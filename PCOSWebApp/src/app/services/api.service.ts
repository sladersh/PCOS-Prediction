import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { localhostUrl } from 'src/app/config/app-config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postRFPrediction(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    };
    return this.http.post(`${localhostUrl}/rfprediction`, data, httpOptions);
  }

  getTest(): Observable<any> {
    return this.http.get(`${localhostUrl}/test`);
  }
}
