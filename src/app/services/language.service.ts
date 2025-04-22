import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<'en' | 'es'>('en');
  currentLanguage$ = this.currentLanguage.asObservable();

  setLanguage(lang: 'en' | 'es') {
    this.currentLanguage.next(lang);
  }

  getLanguage() {
    return this.currentLanguage.value;
  }
}