import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpService } from '@treasury-services/http.service';
import { ResponseModel } from '@treasury-types/response.model';
import {
    AllMetadata,
    ClubClassification,
    ClubType,
    FiscalYear,
} from '@treasury-components/filters/types/metadata.model';

@Injectable({
    providedIn: 'root',
})
export class MetadataService {
    constructor(private httpService: HttpService) {}

    getAllMetadata(): Observable<ResponseModel<AllMetadata>> {
        return this.httpService.getRequest('metadata/all').pipe(
            map((response) => {
                let formattedResponse = response;

                formattedResponse = this.formatClassifications(formattedResponse);
                formattedResponse = this.formatClubTypes(formattedResponse);
                formattedResponse = this.formatFiscalYears(formattedResponse);

                return formattedResponse;
            }),
            tap((allMetadata: ResponseModel<AllMetadata>) => {
                allMetadata.data.clubClassifications.sort((a, b) => (a.id > b.id ? 1 : -1));
                allMetadata.data.clubTypes.sort((a, b) => (a.id > b.id ? 1 : -1));
                allMetadata.data.fiscalYears.sort((a, b) => (a.fy < b.fy ? 1 : -1));
            }),
        );
    }

    private formatClassifications(response: any) {
        const { clubClassifications } = response.data;

        const formattedClassifications: ClubClassification[] = [];

        Object.keys(clubClassifications).forEach((key) => {
            formattedClassifications.push({ id: parseInt(key, 10), classification: clubClassifications[key] });
        });

        response.data = { ...response.data, ...{ clubClassifications: formattedClassifications } };

        return response;
    }

    private formatClubTypes(response: any) {
        const { clubTypes } = response.data;

        const formattedClubTypes: ClubType[] = [];

        Object.keys(clubTypes).forEach((key) => {
            formattedClubTypes.push({ id: parseInt(key, 10), type: clubTypes[key] });
        });

        response.data = { ...response.data, ...{ clubTypes: formattedClubTypes } };

        return response;
    }

    private formatFiscalYears(response: any) {
        const { fiscalYears } = response.data;

        const formattedFiscalYears: FiscalYear[] = [];

        Object.keys(fiscalYears).forEach((key) => {
            formattedFiscalYears.push({ id: parseInt(key, 10), fy: fiscalYears[key] });
        });

        response.data = { ...response.data, ...{ fiscalYears: formattedFiscalYears } };

        return response;
    }
}
