import { Component, Input } from "@angular/core";
import { Housinglocaion } from "../housinglocaion";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-housing-locaion",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./housing-locaion.component.html",
  styleUrl: "./housing-locaion.component.css",
})
export class HousingLocaionComponent {
  @Input() housingLocation!: Housinglocaion;
}
