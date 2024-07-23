import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';

import { LoginPageComponent } from '@pages/login-page/login-page.component';
import { SearchPageComponent } from '@pages/search-page/search-page.component';
import { ProfilePageComponent } from '@pages/profile-page/profile-page.component';
import { StorePageComponent } from '@pages/store-page/store-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [authGuard],
    children: [
      { path: '', component: SearchPageComponent },
      { path: 'profile', component: ProfilePageComponent },
      { path: 'store', component: StorePageComponent },
    ],
  },

  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
