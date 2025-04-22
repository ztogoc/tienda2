import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <div class="main-content">
        <router-outlet></router-outlet>
      </div>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .main-content {
      flex: 1;
      padding: 1rem;
      max-width: 1400px;
      margin: 0 auto;
      width: 100%;
    }
    :host ::ng-deep {
      .card-img-top {
        height: 18em !important;
        object-fit: contain !important;
        padding: 1rem !important;
        background: #f8f9fa !important;
      }
      .products-grid {
        display: grid !important;
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 1.5rem !important;
      }
      @media (max-width: 1200px) {
        .products-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }
      }
      @media (max-width: 768px) {
        .products-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      @media (max-width: 576px) {
        .products-grid {
          grid-template-columns: 1fr !important;
        }
      }
    }
  `]
})
export class AppComponent {}
