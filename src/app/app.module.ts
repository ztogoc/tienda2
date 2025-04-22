import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProductNamePipe } from './pipes/product-name.pipe';
import { StockStatusPipe } from './pipes/stock-status.pipe';
import { PruebasComponent } from './pruebas/pruebas.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    ProductNamePipe,
    StockStatusPipe,
    PruebasComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }