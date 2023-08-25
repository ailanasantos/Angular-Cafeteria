import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cafe } from '../models/cafe.model';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private baseURL: string =  'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(`${this.baseURL}/cafes`);
  }

  salvar(cafe: Cafe): Observable<Cafe> {
    return this.http.post<Cafe>(`${this.baseURL}/cafes`, cafe);
  }
}
