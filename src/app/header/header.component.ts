import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  styleUrl: './header.component.css',
  template: `
    <header>
      <h1>Angular Header</h1>
      <nav>
        <a
          class="button"
          routerLink=""
          routerLinkActive="activeButton"
          [routerLinkActiveOptions]="{ exact: true }"
          ariaCurrentWhenActive="page"
          >Home</a
        >
        |
        <a
          class="button"
          routerLink="/lifecycle"
          routerLinkActive="activeButton"
          ariaCurrentWhenActive="page"
          >Life Cycle</a
        >
        |
        <a
          class="button"
          routerLink="/iframe"
          routerLinkActive="activeButton"
          ariaCurrentWhenActive="page"
          >IFrame</a
        >
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
