import { Component, OnInit } from '@angular/core';
import { BioService } from '../services/bio.service';
import { CertificatesService } from '../services/certificates.service';
import { EducationService } from '../services/education.service';
import { ExpirienceService } from '../services/expirience.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(public bio: BioService, private cert: CertificatesService, private edu: EducationService, public exp: ExpirienceService) { }

  ngOnInit(): void {
  }

}
