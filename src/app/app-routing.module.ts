import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'main-menu',
    pathMatch: 'full'
  },
  {
    path: 'hasil-pbb',
    loadChildren: () => import('./hasil-pbb/hasil-pbb.module').then( m => m.HasilPbbPageModule)
  },
  {
    path: 'main-menu',
    loadChildren: () => import('./main-menu/main-menu.module').then( m => m.MainMenuPageModule)
  },
  {
    path: 'cek-berkas',
    loadChildren: () => import('./cek-berkas/cek-berkas.module').then( m => m.CekBerkasPageModule)
  },
  {
    path: 'cek-bphtb',
    loadChildren: () => import('./cek-bphtb/cek-bphtb.module').then( m => m.CekBphtbPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
