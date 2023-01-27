import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CekBphtbPage } from './cek-bphtb.page';

const routes: Routes = [
  {
    path: '',
    component: CekBphtbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CekBphtbPageRoutingModule {}
