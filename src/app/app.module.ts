import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { MateriasComponent } from './materias/materias.component';
import { AlumnosDetallesComponent } from './alumnos-detalles/alumnos-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    MateriasComponent,
    AlumnosDetallesComponent
  ],
  imports: [
    BrowserModule,
    IonicModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
