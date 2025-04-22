import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="footer-content">
        <p>&copy; 2025 Tienda Online</p>
        <nav class="footer-nav">
          <a href="/about">About</a>
          <a href="/contact">Contacto</a>
          <a href="/privacy">Política dde privacidad</a>
        </nav>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background: #333;
      color: white;
      padding: 2rem 0;
      margin-top: auto;
    }
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .footer-nav a {
      color: white;
      text-decoration: none;
      margin-left: 1rem;
    }
    .footer-nav a:hover {
      text-decoration: underline;
    }
  `]
})
export class FooterComponent {}
