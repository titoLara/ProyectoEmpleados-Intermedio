import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { InicioComponent } from "./inicio/inicio.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, InicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestionEmpleados-Intermedio';

}
