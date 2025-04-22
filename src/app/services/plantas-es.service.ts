import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlantaEs } from '../interfaces/planta-es.interface';

@Injectable({
  providedIn: 'root'
})
export class PlantasEsService {
  private apiUrl = 'http://localhost/backend/api/plantas_es.php';

  constructor(private http: HttpClient) {}

  getPlantas(): Observable<{success: boolean, data: PlantaEs[]}> {
    return this.http.get<{success: boolean, data: PlantaEs[]}>(this.apiUrl);
  }
}