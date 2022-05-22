import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BioService {

  bio: any = {
    name: "Ashbeel Ghouri",
    title: "Software Engineer",
    current_employer: "Focusteck",
    contact_number: "+923175043399",
    email: "ashbeelghouri@protonmail.com",
    github: "https://github.com/ashbeelghouri",
    linkedin: "https://www.linkedin.com/in/ashbeel-ghouri-903873104/",
    expirience: "6 years",
    address: "Near SP House, House # 247/1, Mohalla Munawar Colony, Adyala Road, Rawalpindi, Pakistan"
  };

  constructor() { }

  get(name: string) {
    return this.bio && this.bio[name] ? this.bio[name] : false;
  }
}
