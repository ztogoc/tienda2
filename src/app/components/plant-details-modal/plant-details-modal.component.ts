import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Planta } from '../../services/plantas.service';
import { PlantaEs } from '../../interfaces/planta-es.interface';

@Component({
  selector: 'app-plant-details-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-header bg-light">
      <h4 class="modal-title">{{ getName() }}</h4>
      <button type="button" class="btn-close" (click)="activeModal.dismiss()"></button>
    </div>
    <div class="modal-body">
      <div class="plant-details">
        <div class="detail-section">
          <h5>{{ isSpanish ? 'Información Básica' : 'Basic Information' }}</h5>
          <p><strong>{{ isSpanish ? 'Nombre científico' : 'Scientific name' }}:</strong> 
             {{ getScientificName() }}</p>
          <p><strong>{{ isSpanish ? 'Familia' : 'Family' }}:</strong> 
             {{ getFamily() }}</p>
          <p><strong>{{ isSpanish ? 'Origen' : 'Origin' }}:</strong> 
             {{ getOrigin() }}</p>
        </div>

        <div class="detail-section">
          <h5>{{ isSpanish ? 'Características' : 'Characteristics' }}</h5>
          <p><strong>{{ isSpanish ? 'Tipo' : 'Type' }}:</strong> 
             {{ getType() }}</p>
          <p><strong>{{ isSpanish ? 'Ciclo' : 'Cycle' }}:</strong> 
             {{ getCycle() }}</p>
          <p><strong>{{ isSpanish ? 'Velocidad de crecimiento' : 'Growth rate' }}:</strong> 
             {{ getGrowthRate() }}</p>
        </div>

        <div class="detail-section">
          <h5>{{ isSpanish ? 'Cuidados' : 'Care' }}</h5>
          <p><strong>{{ isSpanish ? 'Riego' : 'Watering' }}:</strong> 
             {{ getWatering() }}</p>
          <p><strong>{{ isSpanish ? 'Luz solar' : 'Sunlight' }}:</strong> 
             {{ getSunlight() }}</p>
          <p><strong>{{ isSpanish ? 'Nivel de cuidado' : 'Care level' }}:</strong> 
             {{ getCareLevel() }}</p>
          <p><strong>{{ isSpanish ? 'Nivel de mantenimiento' : 'Maintenance level' }}:</strong> 
             {{ getMaintenanceLevel() }}</p>
        </div>

        <div class="detail-section">
          <h5>{{ isSpanish ? 'Dimensiones' : 'Dimensions' }}</h5>
          <p><strong>{{ isSpanish ? 'Altura' : 'Height' }}:</strong> 
             {{ getHeight() }}</p>
          <p><strong>{{ isSpanish ? 'Extensión' : 'Spread' }}:</strong> 
             {{ getSpread() }}</p>
        </div>

        <div class="detail-section">
          <h5>{{ isSpanish ? 'Advertencias' : 'Warnings' }}</h5>
          <p *ngIf="isPoisonousToHumans()" class="text-danger">
            ⚠️ {{ isSpanish ? 'Tóxica para humanos' : 'Toxic to humans' }}
          </p>
          <p *ngIf="isPoisonousToPets()" class="text-danger">
            ⚠️ {{ isSpanish ? 'Tóxica para mascotas' : 'Toxic to pets' }}
          </p>
        </div>
        
        <div class="detail-section">
          <h5>{{ isSpanish ? 'Floración' : 'Flowering' }}</h5>
          <p><strong>{{ isSpanish ? 'Temporada de floración' : 'Flowering season' }}:</strong> 
             {{ getFloweringSeason() }}</p>
          <p><strong>{{ isSpanish ? 'Color de flor' : 'Flower color' }}:</strong> 
             {{ getFlowerColor() }}</p>
          <p><strong>{{ isSpanish ? 'Color de hojas' : 'Leaf color' }}:</strong> 
             {{ getLeafColor() }}</p>
        </div>

        <div class="detail-section">
          <h5>{{ isSpanish ? 'Cultivo' : 'Growing' }}</h5>
          <p><strong>{{ isSpanish ? 'Suelo' : 'Soil' }}:</strong> 
             {{ getSoil() }}</p>
          <p><strong>{{ isSpanish ? 'Propagación' : 'Propagation' }}:</strong> 
             {{ getPropagation() }}</p>
          <p><strong>{{ isSpanish ? 'Resistencia mínima' : 'Minimum hardiness' }}:</strong> 
             {{ getHardinessMin() }}°</p>
          <p><strong>{{ isSpanish ? 'Resistencia máxima' : 'Maximum hardiness' }}:</strong> 
             {{ getHardinessMax() }}°</p>
        </div>

        <div class="detail-section">
          <h5>{{ isSpanish ? 'Características adicionales' : 'Additional features' }}</h5>
          <p><strong>{{ isSpanish ? 'Fruto comestible' : 'Edible fruit' }}:</strong> 
             {{ isSpanish ? (hasEdibleFruit() ? 'Sí' : 'No') : (hasEdibleFruit() ? 'Yes' : 'No') }}</p>
          <p *ngIf="hasEdibleFruit()">
            <strong>{{ isSpanish ? 'Temporada de cosecha' : 'Harvest season' }}:</strong> {{ getHarvestSeason() }}
          </p>
          <p><strong>{{ isSpanish ? 'Tolerante a la sequía' : 'Drought tolerant' }}:</strong> 
             {{ isSpanish ? (isDroughtTolerant() ? 'Sí' : 'No') : (isDroughtTolerant() ? 'Yes' : 'No') }}</p>
          <p><strong>{{ isSpanish ? 'Atrae' : 'Attracts' }}:</strong> {{ getAttracts() }}</p>
          <p><strong>{{ isSpanish ? 'Susceptibilidad a plagas' : 'Pest susceptibility' }}:</strong> {{ getPestSusceptibility() }}</p>
        </div>

        <div class="detail-section">
          <h5>{{ isSpanish ? 'Descripción' : 'Description' }}</h5>
          <p>{{ getDescription() }}</p>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-primary" (click)="activeModal.close()">
        {{ isSpanish ? 'Cerrar' : 'Close' }}
      </button>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      max-width: 800px;
      margin: 0 auto;
    }
    .modal-header {
      border-bottom: 2px solid #2c5f2d;
    }
    .modal-title {
      color: #2c5f2d;
      font-weight: 600;
    }
    .plant-details {
      max-height: calc(90vh - 200px);
      overflow-y: auto;
      padding-right: 10px;
    }
    .plant-details::-webkit-scrollbar {
      width: 8px;
    }
    .plant-details::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }
    .plant-details::-webkit-scrollbar-thumb {
      background: #2c5f2d;
      border-radius: 4px;
    }
    .detail-section {
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #dee2e6;
    }
    .detail-section:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
    h5 {
      color: #2c5f2d;
      margin-bottom: 1rem;
      font-weight: 600;
    }
    .text-danger {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #dc3545;
    }
    p {
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }
    strong {
      color: #2c5f2d;
    }
    .modal-footer {
      border-top: 2px solid #2c5f2d;
    }
  `]
})
export class PlantDetailsModalComponent implements OnInit {
  @Input() planta!: Planta | PlantaEs;
  @Input() isSpanish = false;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    if (!this.planta) {
      console.error('Plant data is required');
      this.activeModal.dismiss();
    }
  }

  isPlantaEs(planta: Planta | PlantaEs): planta is PlantaEs {
    return this.isSpanish;
  }

  getName(): string {
    return this.isPlantaEs(this.planta) ? this.planta.nombre_comun : this.planta.common_name;
  }

  getScientificName(): string {
    return this.isPlantaEs(this.planta) ? this.planta.nombre_cientifico : this.planta.scientific_name;
  }

  getFamily(): string {
    return this.isPlantaEs(this.planta) ? this.planta.familia : this.planta.family;
  }

  getOrigin(): string {
    return this.isPlantaEs(this.planta) ? this.planta.origen : this.planta.origin;
  }

  getType(): string {
    return this.isPlantaEs(this.planta) ? this.planta.tipo : this.planta.type;
  }

  getCycle(): string {
    return this.isPlantaEs(this.planta) ? this.planta.ciclo : this.planta.cycle;
  }

  getGrowthRate(): string {
    return this.isPlantaEs(this.planta) ? this.planta.velocidad_crecimiento : this.planta.growth_rate;
  }

  getWatering(): string {
    return this.isPlantaEs(this.planta) ? this.planta.riego : this.planta.watering;
  }

  getSunlight(): string {
    return this.isPlantaEs(this.planta) ? this.planta.luz_solar : this.planta.sunlight;
  }

  getCareLevel(): string {
    return this.isPlantaEs(this.planta) ? this.planta.nivel_cuidado : this.planta.care_level;
  }

  getMaintenanceLevel(): string {
    return this.isPlantaEs(this.planta) ? this.planta.nivel_mantenimiento : this.planta.maintenance_level;
  }

  getHeight(): string {
    return this.isPlantaEs(this.planta) 
      ? `${this.planta.altura} ${this.planta.unidad_altura}`
      : `${this.planta.height} ${this.planta.height_unit}`;
  }

  getSpread(): string {
    return this.isPlantaEs(this.planta)
      ? `${this.planta.extension} ${this.planta.unidad_extension}`
      : `${this.planta.spread} ${this.planta.spread_unit}`;
  }

  isPoisonousToHumans(): boolean {
    return this.isPlantaEs(this.planta) ? this.planta.venenosa_humanos : this.planta.poisonous_to_humans;
  }

  isPoisonousToPets(): boolean {
    return this.isPlantaEs(this.planta) ? this.planta.venenosa_mascotas : this.planta.poisonous_to_pets;
  }

  getFloweringSeason(): string {
    return this.isPlantaEs(this.planta) ? this.planta.temporada_floracion : this.planta.flowering_season;
  }

  getFlowerColor(): string {
    return this.isPlantaEs(this.planta) ? this.planta.color_flor : this.planta.flower_color;
  }

  getLeafColor(): string {
    return this.isPlantaEs(this.planta) ? this.planta.color_hojas : this.planta.leaf_color;
  }

  getSoil(): string {
    return this.isPlantaEs(this.planta) ? this.planta.suelo : this.planta.soil;
  }

  getPropagation(): string {
    return this.isPlantaEs(this.planta) ? this.planta.propagacion : this.planta.propagation;
  }

  getHardinessMin(): number {
    return this.isPlantaEs(this.planta) ? this.planta.resistencia_min : this.planta.hardiness_min;
  }

  getHardinessMax(): number {
    return this.isPlantaEs(this.planta) ? this.planta.resistencia_max : this.planta.hardiness_max;
  }

  hasEdibleFruit(): boolean {
    return this.isPlantaEs(this.planta) ? this.planta.fruto_comestible : this.planta.edible_fruit;
  }

  getHarvestSeason(): string {
    return this.isPlantaEs(this.planta) ? this.planta.temporada_cosecha : this.planta.harvest_season;
  }

  isDroughtTolerant(): boolean {
    return this.isPlantaEs(this.planta) ? this.planta.tolerante_sequia : this.planta.drought_tolerant;
  }

  getAttracts(): string {
    return this.isPlantaEs(this.planta) ? this.planta.atrae : this.planta.attracts;
  }

  getPestSusceptibility(): string {
    return this.isPlantaEs(this.planta) ? this.planta.susceptibilidad_plagas : this.planta.pest_susceptibility;
  }

  getDescription(): string {
    return this.isPlantaEs(this.planta) ? this.planta.descripcion : this.planta.description;
  }
}