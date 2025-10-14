import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainComponent } from "./core/components/main/main.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MainComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-app');
}
