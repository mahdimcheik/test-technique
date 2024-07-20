import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { mapResolver } from './resolvers/map.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { data: mapResolver },
  },
  {
    path: 'details',
    component: DetailsComponent,
    resolve: { data: mapResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
