import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CekBerkasPageRoutingModule } from './cek-berkas-routing.module';

import { CekBerkasPage } from './cek-berkas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CekBerkasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CekBerkasPage]
})
export class CekBerkasPageModule {}
