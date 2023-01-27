import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HasilPbbPageRoutingModule } from './hasil-pbb-routing.module';

import { HasilPbbPage } from './hasil-pbb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HasilPbbPageRoutingModule
  ],
  declarations: [HasilPbbPage]
})
export class HasilPbbPageModule {}
