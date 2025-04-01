import { Component, inject } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressbarComponent } from "./shared/progressbar/progressbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ProgressbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pipes-app';
}
