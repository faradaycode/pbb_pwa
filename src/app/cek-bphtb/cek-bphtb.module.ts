import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CekBphtbPageRoutingModule } from './cek-bphtb-routing.module';

import { CekBphtbPage } from './cek-bphtb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CekBphtbPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CekBphtbPage]
})
export class CekBphtbPageModule {}
