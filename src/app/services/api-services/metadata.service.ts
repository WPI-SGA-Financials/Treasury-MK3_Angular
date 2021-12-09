import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Path_Api } from '../../types/path.enum';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../types/response.model';
import { AllMetadata } from '../../components/filters/types/metadata.model';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  constructor(private httpService: HttpService) {}

  getAllMetadata(): Observable<ResponseModel<AllMetadata>> {
    return this.httpService.getRequest(Path_Api.ALL_METADATA);
  }
}
