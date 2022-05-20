import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpirienceService {
  expirience = [{
    name: "KnowledgeNow",
    title: "Website Designer",
    started_on: "June 2015",
    till: "March 2016",
    type: "Internship",
    time: "09 Months",
    description: "This job was an internship programme offered by KnowledgeNow which did operated for the webinars through their website portal",
    responsibilities: [
      "Designing Newsletter",
      "Designing Html Pages from Adobe Photoshop designs",
      "Creating small scale websites with bootstrap",
      "Doing Mass Marketting on social media",
      "Creating Office reporting system for internal use of the organization",
      "Interacting on-behalf-of company with the traffic on social media platforms"
    ],
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Bootstrap",
      "Html",
      "Css",
      "Jquery"
    ]
  }, {
    name: "Graphics Junction",
    title: "Website Developer",
    started_on: "April 2016",
    till: "November 2016",
    type: "Contract",
    time: "07 Months"
  }, {
    name: "Upwork | Fiverr | Local Vendors",
    title: "Backend Developer",
    started_on: "December 2016",
    till: "July 2018",
    type: "Freelance",
    time: "01 Year, 06 Months"
  }, {
    name: "Ticket Manager",
    title: "Lead Software Engineer",
    started_on: "July 2018",
    till: "September 2021",
    type: "Full-Time | Onsite",
    time: "3 Years 2 Months"
  }, {
    name: "Focusteck",
    title: "Full Stack Developer",
    started_on: "October 2021",
    till: "Present",
    type: "Full-Time | Remote",
    time: "08 Months"
  }];
  constructor() { }
}
