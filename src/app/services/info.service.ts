import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  allowed = {
    bio: true,
    certificates: true,
    education: true,
    expirience: true,
    projects: true,
    skills: true
  };
  constructor() { }
}
