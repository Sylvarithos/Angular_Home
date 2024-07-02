import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HomeComponent, RouterModule],
  // templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img
            class="brand-logo"
            src="favicon.ico"
            alt="logo"
            aria-hidden="true"
          />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = "Bictory";
}
