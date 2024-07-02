import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocaionComponent } from "../housing-locaion/housing-locaion.component";
import { Housinglocaion } from "../housinglocaion";
import { HousingService } from "../housing.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocaionComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  housingLocaionList: Housinglocaion[];
  filteredLocationList: Housinglocaion[] = [];

  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocaionList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocaionList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocaionList;
      return;
    }
    this.filteredLocationList = this.housingLocaionList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
