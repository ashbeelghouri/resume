import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  education = [{
    name: "Bacheolars of Computer in Software Engineering",
    completed_on: "2017",
    from: "Foundation University Rawalpindi Campus"
  }];
  constructor() { }
}
