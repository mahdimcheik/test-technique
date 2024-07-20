import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarLinkComponent } from './components/navbar-link/navbar-link.component';
import { DetailsComponent } from './pages/details/details.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { CityLegendComponent } from './components/city-legend/city-legend.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { ListCapitalsComponent } from './components/list-capitals/list-capitals.component';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { DialogGenericComponent } from './components/modals/dialog-generic/dialog-generic.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { EditAddCityComponent } from './components/modals/edit-add-city/edit-add-city.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NavbarLinkComponent,
    DetailsComponent,
    CityLegendComponent,
    CityCardComponent,
    ListCapitalsComponent,
    DialogGenericComponent,
    EditAddCityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    SidebarModule,
    DialogModule,
    FormsModule,
  ],
  providers: [provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
