import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [RouterOutlet, RouterModule]
})
export class AppComponent {}
