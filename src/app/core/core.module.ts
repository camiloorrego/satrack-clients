import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { AngularMaterialModule } from '../modules/angularmaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { FilterClientsPipe } from './pipes/filter-clients.pipe';
import { ArrayUniquePipe } from './pipes/array-unique.pipe';
import { SizecommentPipe } from './pipes/sizecomment.pipe';

@NgModule({
  declarations: [ClientsComponent, FilterClientsPipe, ArrayUniquePipe, SizecommentPipe],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ]
})
export class CoreModule { }
