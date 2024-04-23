import { IProfileApi } from "../api.interface";
import { IProfile } from "../model.interface";

export class LocalProfileApi implements IProfileApi {
  get(): Promise<IProfile> {
    return new Promise(resolve => resolve({
      id: 'ad',
      accountNumber: 123456789123456789123456789,
      city: 'Odesa',
      createdAt: (new Date()).toLocaleDateString(),
      updatedAt: (new Date()).toLocaleDateString(),
      firstName: 'Illia',
      lastName: "Serbin",
      fathersName: "Oleksiyovich",
      houseNumber: 1,
      phoneNumber: "066-736-37-44",
      kveds: ['62.01'],
      privateTaxNumber: 1234567890,
      roomNumber: 1,
      status: "active",
      streetName: "Nyzhinska"
     }))
  }

  update(id: Pick<IProfile, "id">, payload: Omit<IProfile, "id" | "createdAt" | "updatedAt" | "valid" | "kveds">): Promise<IProfile> {
    return new Promise(resolve => resolve({
      id: 'ad',
      accountNumber: 123456789123456789123456789,
      city: 'Odesa',
      createdAt: (new Date()).toLocaleDateString(),
      updatedAt: (new Date()).toLocaleDateString(),
      firstName: 'Illia',
      lastName: "Serbin",
      fathersName: "Oleksiyovich",
      houseNumber: 1,
      phoneNumber: "066-736-37-44",
      kveds: ['62.01'],
      privateTaxNumber: 1234567890,
      roomNumber: 1,
      status: "active",
      streetName: "Nyzhinska"
    }))     
  }

  create(payload: Pick<IProfile, "firstName" | "lastName" | "fathersName">): Promise<IProfile> {
    return new Promise(resolve => resolve({
      id: 'ad',
      accountNumber: 123456789123456789123456789,
      city: 'Odesa',
      createdAt: (new Date()).toLocaleDateString(),
      updatedAt: (new Date()).toLocaleDateString(),
      firstName: 'Illia',
      lastName: "Serbin",
      fathersName: "Oleksiyovich",
      houseNumber: 1,
      phoneNumber: "066-736-37-44",
      kveds: ['62.01'],
      privateTaxNumber: 1234567890,
      roomNumber: 1,
      status: "active",
      streetName: "Nyzhinska"
    }))          
  }
}
