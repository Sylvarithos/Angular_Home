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
  housingLocaionList: Housinglocaion[] = [];
  filteredLocationList: Housinglocaion[] = [];
  readonly baseUrl = "test";

  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocaionList: Housinglocaion[]) => {
        this.housingLocaionList = housingLocaionList;
        this.filteredLocationList = housingLocaionList;
      });
    // this.filteredLocationList = this.housingLocaionList;
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
