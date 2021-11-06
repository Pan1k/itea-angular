export interface IUserShort {
  "name": string,
  "username": string,
  "email": string,
  "phone": string,
  "website": string
}

export interface IUser extends IUserShort {
  "id": number,
  "address": IAddress,
  "company": ICompany
}

export interface IAddress {
  "street": string,
  "suite": string,
  "city": string,
  "zipcode": string,
  "geo": {
    "lat": string,
    "lng": string
  }
}

export interface ICompany {
  "name": string,
  "catchPhrase": string,
  "bs": string
}
