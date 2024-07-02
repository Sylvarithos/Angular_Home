import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocaionComponent } from "../housing-locaion/housing-locaion.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocaionComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
