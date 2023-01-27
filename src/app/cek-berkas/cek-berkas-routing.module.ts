import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CekBerkasPage } from './cek-berkas.page';

const routes: Routes = [
  {
    path: '',
    component: CekBerkasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CekBerkasPageRoutingModule {}
