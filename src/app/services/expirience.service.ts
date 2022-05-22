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
    ],
    accomplishments: false
  }, {
    name: "Graphics Junction",
    title: "Website Developer",
    started_on: "April 2016",
    till: "November 2016",
    type: "Contract",
    time: "07 Months",
    description: "One of leading companies in UK offered me contract based job, that was for automating the printing coorporation with a website, This phase was extended to include the ecommerce platform for their organization as well as website builder dashboard for their website.",
    responsibilities: [
      "Showcase of the products",
      "Categorization of the designs on the site",
      "Advanced pricing with Quantity vs. Quality ratio",
      "Search engine optimization of the website",
      "Online customization of the product display",
      "Cart Features",
      "Recording customer feedbacks",
      "Different payment integrations"
    ],
    skills: [
      "Php",
      "Bootstrap",
      "Html",
      "Css",
      "Jquery",
      "3rd Party Integration, i.e Paypal",
      "Algorithms for user specific pricing"
    ],
    accomplishments: [{
      name: "Happy Customer",
      description: "Customer was happy with the development of the website"
    }]
  }, {
    name: "Upwork | Fiverr | Local Vendors",
    title: "Backend Developer",
    started_on: "December 2016",
    till: "July 2018",
    type: "Freelance",
    time: "01 Year, 06 Months",
    description: "In this period of time, I have got various type of projects, which includes frontend, backend and Database administration from multiple vendors.",
    responsibilities: [
      "Creating One-Page websites",
      "Debugging the issues on the existing website with multiple teams",
      "Writing python scripts for the existing applications",
      "Creating new components for different sites",
      "Create an ecommerce platform for local vendors",
      "Doing Seo for the applications",
      "Deployment of applications on different hosting sites",
      "Creating Graphic Designs | Visiting Cards, Animations and much more"
    ],
    skills: [
      "Php",
      "Jquery",
      "NodeJs",
      "Angular",
      "Python",
      "Html",
      "Css",
      "Javascript",
      "Jquery",
      "Seo",
      "Bootstrap | Materialgrammi",
      "Adobe Photoshop | Illustrator | After Effect",
      "IT Support",
      "Requirement Analysis"
    ],
    accomplishments: false
  }, {
    name: "Ticket Manager",
    title: "Software Engineer | Lead Microservices",
    started_on: "July 2018",
    till: "September 2021",
    type: "Full-Time | Onsite",
    time: "3 Years 2 Months",
    description: "This organization managers the selling and reselling of event based tickets around Europe as well as United States, I have worked on their online platform responsible for their business.",
    responsibilities: [
      "Code Inspections",
      "Authorization Module of the system",
      "Integrating different components with mobile applications",
      "New feature module of angular application",
      "Designing angular widgets that are highly scaleable to integrate with different pages",
      "Design Html layouts",
      "Creating different microservices using AWS Lambda and API Gateway",
      "Maintaining the microservices",
      "Leading backend team of two developers",
      "Administrating MySql, Writing Stored procedures for the different scenarios",
      "Creating AWS State Machine and linking different microservices with the machine",
      "Handling critical bug fixes on the application",
      "Spam Investigations",
      "Fixing data corruption in the database",
      "Creating application usage reports for SRE team",
      "Continously improving the application for high performance",
      "Creating, Choping and Assigning tasks for the team"
    ],
    skills: [
      "Php",
      "NodeJs | ExpressJs | NestJs",
      "Angular",
      "MySql",
      "AWS Lambda",
      "AWS Api Gateway",
      "AWS State Machine",
      "AWS Cloudwatch",
      "AWS SNS | SQS | Secrets Manager",
      "ElasticSearch",
      "Swagger",
      "Html",
      "Css",
      "Javascript",
      "Bootstrap",
      "IT Support",
      "Work breakdown",
      "Collaborations",
      "leadership"
    ],
    accomplishments: [{
      name: "All-Star",
      description: "This title represents the annual performance highest rate in the whole organization."
    }]
  }, {
    name: "Focusteck",
    title: "Full Stack Developer | Lead Software Engineer",
    started_on: "October 2021",
    till: "Present",
    type: "Full-Time | Remote",
    time: "08 Months",
    description: "",
    responsibilities: [
      "Create API endpoints",
      "Create frontend components",
      "Integration of API's with frontend",
      "Creating Architecture of the module",
      "Fixing the critical issues on the website",
      "analyzing and improving the code-quality of the existing features",
      "Creating the data oriented sites from scratch",
      "Work with AWS Services for the microservices",
      "Improving the process flow of the team",
      "Leading microservice team",
      "Creating the interaction recorder algorithms",
      "Train new members of the team"
    ],
    skills: [
      "NodeJs | NestJs",
      "Angular",
      "AWS Lambda",
      "AWS API Gateway",
      "AWS EC2",
      "AWS SNS",
      "AWS SQS",
      "Html",
      "Css",
      "Javascript",
      "Module research",
      "Requirement Analysis"
    ],
    accomplishments: false
  }];
  constructor() { }
}
