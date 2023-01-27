import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { pbb_model } from '../models/pbb_model';
import { berkas_model } from '../models/berkas-model';
import { bphtb_model } from '../models/bphtb_model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API = "http://192.168.1.210/api_sikebal_android/index.php/";

  constructor(private http: HttpClient) { }

  getPbb(datas: any): Observable<pbb_model>{
    return this.http.post<pbb_model>(this.API + "Pbb/CekNopData", datas);
  }

  getBerkas(data: any): Observable<berkas_model> {
    return this.http.post<berkas_model>(this.API + "Berkas/cekBerkas", data);
  }
  
  getBphtb(data: any): Observable<bphtb_model> {
    return this.http.post<bphtb_model>(this.API + "Bphtb/getBphtbData", data);
  }
}
