import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasService, Planta } from '../../services/plantas.service';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguageService } from '../../services/language.service';
import { PlantasEsService } from '../../services/plantas-es.service';
import { PlantaEs } from '../../interfaces/planta-es.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlantDetailsModalComponent } from '../../components/plant-details-modal/plant-details-modal.component';

@Component({
  selector: 'app-plantas',
  standalone: true,
  imports: [CommonModule, NgbRatingModule],
  template: `
    <div class="container py-5">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1>{{ currentLang === 'es' ? 'Catálogo de Plantas' : 'Plant Catalog' }}</h1>
        <div class="btn-group">
          <button class="btn" 
                  [class.btn-primary]="currentLang === 'en'"
                  [class.btn-outline-primary]="currentLang === 'es'"
                  (click)="changeLanguage('en')">
            English
          </button>
          <button class="btn" 
                  [class.btn-primary]="currentLang === 'es'"
                  [class.btn-outline-primary]="currentLang === 'en'"
                  (click)="changeLanguage('es')">
            Español
          </button>
        </div>
      </div>
      <div class="products-grid">
        <article class="card product-card h-100" *ngFor="let planta of plantas">
          <div class="card-header">
            <span class="badge" [ngClass]="currentLang === 'es' ? (planta.interior ? 'bg-success' : 'bg-primary') : (planta.indoor ? 'bg-success' : 'bg-primary')">
              {{ currentLang === 'es' ? (planta.interior ? 'Interior' : 'Exterior') : (planta.indoor ? 'Indoor' : 'Outdoor') }}
            </span>
          </div>
          <div class="card-body d-flex flex-column">
            <h3 class="card-title">{{ currentLang === 'es' ? planta.nombre_comun : planta.common_name }}</h3>
            <p class="scientific-name">{{ currentLang === 'es' ? planta.nombre_cientifico : planta.scientific_name }}</p>
            
            <div class="plant-details">
              <p><strong>{{ currentLang === 'es' ? 'Familia' : 'Family' }}:</strong> 
                 {{ currentLang === 'es' ? planta.familia : planta.family }}</p>
              <p><strong>{{ currentLang === 'es' ? 'Origen' : 'Origin' }}:</strong> 
                 {{ currentLang === 'es' ? planta.origen : planta.origin }}</p>
              <p><strong>{{ currentLang === 'es' ? 'Tipo' : 'Type' }}:</strong> 
                 {{ currentLang === 'es' ? planta.tipo : planta.type }}</p>
              
              <div class="care-info">
                <p><i class="bi bi-droplet"></i> {{ currentLang === 'es' ? 'Riego' : 'Watering' }}: 
                   {{ currentLang === 'es' ? planta.riego : planta.watering }}</p>
                <p><i class="bi bi-brightness-high"></i> {{ currentLang === 'es' ? 'Luz' : 'Sunlight' }}: 
                   {{ currentLang === 'es' ? planta.luz_solar : planta.sunlight }}</p>
                <p><i class="bi bi-heart"></i> {{ currentLang === 'es' ? 'Nivel de cuidado' : 'Care Level' }}: 
                   {{ currentLang === 'es' ? planta.nivel_cuidado : planta.care_level }}</p>
              </div>
  
              <div class="warnings mt-3">
                <p *ngIf="currentLang === 'es' ? planta.venenosa_humanos : planta.poisonous_to_humans" class="text-danger">
                  <i class="bi bi-exclamation-triangle"></i> 
                  {{ currentLang === 'es' ? 'Tóxica para humanos' : 'Toxic to humans' }}
                </p>
                <p *ngIf="currentLang === 'es' ? planta.venenosa_mascotas : planta.poisonous_to_pets" class="text-danger">
                  <i class="bi bi-exclamation-triangle"></i> 
                  {{ currentLang === 'es' ? 'Tóxica para mascotas' : 'Toxic to pets' }}
                </p>
              </div>
            </div>
            <button class="btn btn-outline-primary mt-auto" (click)="openDetails(planta)">
              {{ currentLang === 'es' ? 'Ampliar detalles' : 'View details' }}
            </button>
          </div>
        </article>
      </div>
    </div>
  `,
  styles: [`
    .card-body {
      height: 100%;
    }
    .btn-outline-primary {
      border-color: #2c5f2d;
      color: #2c5f2d;
    }
    .btn-outline-primary:hover {
      background-color: #2c5f2d;
      color: white;
    }
  `]
})
export class PlantasComponent implements OnInit {
  plantasEn: Planta[] = [];
  plantasEs: PlantaEs[] = [];
  currentLang: 'en' | 'es' = 'en';

  constructor(
    private plantasService: PlantasService,
    private plantasEsService: PlantasEsService,
    private languageService: LanguageService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLang = lang;
      this.loadPlantas();
    });
  }

  loadPlantas() {
    if (this.currentLang === 'es') {
      this.plantasEsService.getPlantas().subscribe(
        response => {
          if (response.success) {
            this.plantasEs = response.data;
          }
        },
        error => console.error('Error fetching plantas:', error)
      );
    } else {
      this.plantasService.getPlantas().subscribe(
        response => {
          if (response.success) {
            this.plantasEn = response.data;
          }
        },
        error => console.error('Error fetching plantas:', error)
      );
    }
  }

  changeLanguage(lang: 'en' | 'es') {
    this.languageService.setLanguage(lang);
  }

  get plantas(): any[] {
    return this.currentLang === 'es' ? this.plantasEs : this.plantasEn;
  }

  openDetails(planta: any) {
    const modalRef = this.modalService.open(PlantDetailsModalComponent, {
      size: 'lg',
      centered: true
    });
    modalRef.componentInstance.planta = planta;
    modalRef.componentInstance.isSpanish = this.currentLang === 'es';
  }
}