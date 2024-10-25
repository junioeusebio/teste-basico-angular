import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css'],
})
export class HomeComponent {

  constructor(private router: Router, 
              private translate: TranslateService,
              @Inject(DOCUMENT) private document: Document) {
    translate.setDefaultLang('pt');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  verVaga() {
    this.router.navigateByUrl('vaga');
  }
  show = false
  toggleButtonTransate() {
    this.show = !this.show;
  }
}
