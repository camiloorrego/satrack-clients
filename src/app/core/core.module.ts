import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { AngularMaterialModule } from '../modules/angularmaterial.module';

@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,        
  ]
})
export class CoreModule { }
