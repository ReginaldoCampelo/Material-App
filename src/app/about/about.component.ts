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
    this.cepService.consultarCep(this.cep)
      .subscribe((dados) => {
        this.dadosCep = dados;
        console.log(this.dadosCep.logradouro);
      });
  }

}
