import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '@progress/kendo-angular-icons';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';


// Componentes
import { AppComponent } from './app.component';
import { NegociosComponent } from './components/negocios/negocios.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroNegocioComponent } from './pages/registro-negocio/registro-negocio.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';
import { MisNegociosComponent } from './pages/mis-negocios/mis-negocios.component';
import { NegociosFavoritosComponent } from './pages/negocios-favoritos/negocios-favoritos.component';
import { HereMapComponent } from './components/here-map/here-map.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmedValidator } from './components/confirmed-validator';

// Servicios
import { LoginService } from './services/login.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroNegocioComponent,
    RegistroUsuarioComponent,
    NavbarComponent,
    MisNegociosComponent,
    NegociosFavoritosComponent,
    UbicacionComponent,
    OnboardingComponent,
    LoadingComponent,
    NegociosComponent,
    HereMapComponent
  ],
  imports: [
    BrowserModule,
    InputsModule,
    BrowserAnimationsModule,
    IconsModule,
    ButtonsModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
