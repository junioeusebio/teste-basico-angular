import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Vaga',
  templateUrl: './Vaga.component.html',
  styleUrls: ['./Vaga.component.css']
})
export class VagaComponent {

  constructor(private router: Router) {}

  voltar() {
    this.router.navigateByUrl('');
  }
}
