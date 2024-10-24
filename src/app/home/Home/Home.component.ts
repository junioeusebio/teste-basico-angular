import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  verVaga() {
    this.router.navigateByUrl('vaga');
  }

}
