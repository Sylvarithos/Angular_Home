import { Injectable } from "@angular/core";
import { Housinglocaion } from "./housinglocaion";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  url = "http://localhost:3000/locations";

  constructor() {}

  readonly baseUrl = "test";
  // housingLocaionList: Housinglocaion[] = [
  //   {
  //     id: 0,
  //     name: "Acme Fresh Start Housing",
  //     city: "Chicago",
  //     state: "IL",
  //     photo: `${this.baseUrl}/1.jpg`,
  //     availableUnits: 4,
  //     wifi: true,
  //     laundry: true,
  //   },
  //   {
  //     id: 1,
  //     name: "A113 Transitional Housing",
  //     city: "Santa Monica",
  //     state: "CA",
  //     photo: `${this.baseUrl}/2.jpg`,
  //     availableUnits: 0,
  //     wifi: false,
  //     laundry: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Warm Beds Housing Support",
  //     city: "Juneau",
  //     state: "AK",
  //     photo: `${this.baseUrl}/3.jpg`,
  //     availableUnits: 1,
  //     wifi: false,
  //     laundry: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Homesteady Housing",
  //     city: "Chicago",
  //     state: "IL",
  //     photo: `${this.baseUrl}/4.jpg`,
  //     availableUnits: 1,
  //     wifi: true,
  //     laundry: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Happy Homes Group",
  //     city: "Gary",
  //     state: "IN",
  //     photo: `${this.baseUrl}/1.jpg`,
  //     availableUnits: 1,
  //     wifi: true,
  //     laundry: false,
  //   },
  //   {
  //     id: 5,
  //     name: "Hopeful Apartment Group",
  //     city: "Oakland",
  //     state: "CA",
  //     photo: `${this.baseUrl}/2.jpg`,
  //     availableUnits: 2,
  //     wifi: true,
  //     laundry: true,
  //   },
  //   {
  //     id: 6,
  //     name: "Seriously Safe Towns",
  //     city: "Oakland",
  //     state: "CA",
  //     photo: `${this.baseUrl}/3.jpg`,
  //     availableUnits: 5,
  //     wifi: true,
  //     laundry: true,
  //   },
  //   {
  //     id: 7,
  //     name: "Hopeful Housing Solutions",
  //     city: "Oakland",
  //     state: "CA",
  //     photo: `${this.baseUrl}/4.jpg`,
  //     availableUnits: 2,
  //     wifi: true,
  //     laundry: true,
  //   },
  //   {
  //     id: 8,
  //     name: "Seriously Safe Towns",
  //     city: "Oakland",
  //     state: "CA",
  //     photo: `${this.baseUrl}/1.jpg`,
  //     availableUnits: 10,
  //     wifi: false,
  //     laundry: false,
  //   },
  //   {
  //     id: 9,
  //     name: "Capital Safe Towns",
  //     city: "Portland",
  //     state: "OR",
  //     photo: `${this.baseUrl}/2.jpg`,
  //     availableUnits: 6,
  //     wifi: true,
  //     laundry: true,
  //   },
  // ];

  async getAllHousingLocations(): Promise<Housinglocaion[]> {
    const data = await fetch(this.url);
    // return this.housingLocaionList;
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<Housinglocaion | undefined> {
    // return this.housingLocaionList.find(
    //   (Housinglocaion) => Housinglocaion.id === id
    // );
    const data = await fetch(`${this.url}/${id}`);
    console.log(data);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
