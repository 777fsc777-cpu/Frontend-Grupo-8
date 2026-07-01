export class Estate {
  idEstate: number = 0;
  title: string = '';
  description: string = '';
  adress: string = '';
  district: string = '';
  city: string = '';
  monthlyPrice: number = 0;
  type: string = '';
  state: boolean = false;
  rooms: number = 0;
  bathrooms: number = 0;
  areaM2: number = 0;
  creationDate: Date | string = '';
  idUser: any = 0;
  user?: { idUser: number };
  ownerName: string = '';
  ownerLastName: string = '';
  ownerPhoneNumber: string = '';
}
