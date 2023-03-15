import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  cep = '';
  dadosCep: any;

  constructor(private cepService: CepService) { }

  ngOnInit(): void {
  }

  consultar() {
    const cepSemMascara = this.cep.replace('-', '');
    this.cepService.consultarCep(cepSemMascara)
      .subscribe((dados) => {
        this.dadosCep = dados;
      });
  }

  formatarCep() {
    this.cep = this.cep.replace(/\D/g, '');
    if (this.cep.length === 8) {
      this.cep = this.cep.replace(/(\d{5})(\d{3})/, '$1-$2');
    }
  }
}
