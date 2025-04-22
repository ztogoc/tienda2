import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { LanguageService } from './language.service';

export interface Planta {
  id: number;
  plant_id: string;
  common_name: string;
  scientific_name: string;
  family: string;
  origin: string;
  type: string;
  cycle: string;
  watering: string;
  sunlight: string;
  care_level: string;
  growth_rate: string;
  maintenance_level: string;
  flowering_season: string;
  flower_color: string;
  leaf_color: string;
  height: number;
  height_unit: string;
  spread: number;
  spread_unit: string;
  description: string;
  soil: string;
  propagation: string;
  hardiness_min: number;
  hardiness_max: number;
  indoor: boolean;
  poisonous_to_humans: boolean;
  poisonous_to_pets: boolean;
  edible_fruit: boolean;
  harvest_season: string;
  fruit_nutritional_value: string;
  attracts: string;
  pest_susceptibility: string;
  drought_tolerant: boolean;
  flowers: boolean;
  hardiness_location_map: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlantasService {
  private apiUrlEn = 'http://localhost/backend/api/plantas.php';
  private apiUrlEs = 'http://localhost/backend/api/plantas_es.php';

  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {}

  getPlantas(): Observable<{success: boolean, data: Planta[]}> {
    return this.languageService.currentLanguage$.pipe(
      switchMap(lang => {
        const url = lang === 'es' ? this.apiUrlEs : this.apiUrlEn;
        return this.http.get<{success: boolean, data: Planta[]}>(url);
      })
    );
  }
}