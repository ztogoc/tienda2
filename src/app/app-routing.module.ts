import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebasComponent } from './pruebas/pruebas.component';

const routes: Routes = [
  // ... existing routes ...
  { path: 'backend-productos', component: PruebasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }