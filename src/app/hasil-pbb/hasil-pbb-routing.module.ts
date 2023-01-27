import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HasilPbbPage } from './hasil-pbb.page';

const routes: Routes = [
  {
    path: '',
    component: HasilPbbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HasilPbbPageRoutingModule {}
