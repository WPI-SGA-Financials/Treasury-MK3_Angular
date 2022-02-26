import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Path_Api } from '../../types/path.enum';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../types/response.model';
import { AllMetadata, ClubClassification, ClubType, FiscalYear } from '../../components/filters/types/metadata.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  constructor(private httpService: HttpService) {}

  getAllMetadata(): Observable<ResponseModel<AllMetadata>> {
    return this.httpService.getRequest(Path_Api.ALL_METADATA).pipe(
      map((response) => {
        response = this.formatClassifications(response);
        response = this.formatClubTypes(response);
        response = this.formatFiscalYears(response);

        return response;
      }),
      tap((allMetadata: ResponseModel<AllMetadata>) => {
        allMetadata.data.clubClassifications.sort((a, b) => (a.id > b.id ? 1 : -1));
        allMetadata.data.clubTypes.sort((a, b) => (a.id > b.id ? 1 : -1));
        allMetadata.data.fiscalYears.sort((a, b) => (a.fy < b.fy ? 1 : -1));
      })
    );
  }

  private formatClassifications(response: any) {
    const { clubClassifications } = response.data;

    let formattedClassifications: ClubClassification[] = [];

    Object.keys(clubClassifications).forEach((key) => {
      formattedClassifications.push({ id: parseInt(key), classification: clubClassifications[key] });
    });

    response.data = { ...response.data, ...{ clubClassifications: formattedClassifications } };

    return response;
  }

  private formatClubTypes(response: any) {
    const { clubTypes } = response.data;

    let formattedClubTypes: ClubType[] = [];

    Object.keys(clubTypes).forEach((key) => {
      formattedClubTypes.push({ id: parseInt(key), type: clubTypes[key] });
    });

    response.data = { ...response.data, ...{ clubTypes: formattedClubTypes } };

    return response;
  }

  private formatFiscalYears(response: any) {
    const { fiscalYears } = response.data;

    let formattedFiscalYears: FiscalYear[] = [];

    Object.keys(fiscalYears).forEach((key) => {
      formattedFiscalYears.push({ id: parseInt(key), fy: fiscalYears[key] });
    });

    response.data = { ...response.data, ...{ fiscalYears: formattedFiscalYears } };

    return response;
  }
}
