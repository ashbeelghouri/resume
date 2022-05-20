import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {
  certificates = [{
    name: "Golang",
    subtitle: "The Complete Developer's Guide",
    completed_on: "31 October 2021",
    link: "https://www.udemy.com/certificate/UC-ff8f2377-28ad-4718-b2d1-51d776936d21/",
    organization: "Udemy"
  }];
  constructor() { }
}
