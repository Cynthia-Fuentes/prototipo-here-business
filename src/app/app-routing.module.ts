import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LoginComponent } from './pages/login/login.component';
import { MisNegociosComponent } from './pages/mis-negocios/mis-negocios.component';
import { NegociosFavoritosComponent } from './pages/negocios-favoritos/negocios-favoritos.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { RegistroNegocioComponent } from './pages/registro-negocio/registro-negocio.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';

const routes: Routes = [
  { path: 'home', component: OnboardingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent },
  { path: 'registro-negocio', component: RegistroNegocioComponent },
  { path: 'mis-negocios', component: MisNegociosComponent },
  { path: 'negocios-favoritos', component: NegociosFavoritosComponent },
  { path: 'ubicacion', component: UbicacionComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }


]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }