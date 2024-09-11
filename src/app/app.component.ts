import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <div #main>
      <app-header />
      <router-outlet />
    </div>
  `,
  styles: `
  #main {
    background-color: #f5f5f5;
  }
  `,
})
export class AppComponent {
  title = 'angular-basics';
}
