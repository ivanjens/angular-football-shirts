import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreAboutComponent } from './store-about/store-about.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full'
  },
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: 'about',
    component: StoreAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
