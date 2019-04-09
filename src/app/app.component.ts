import { Component } from '@angular/core';
import { QuestionarioManagerService } from './questionario-manager.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  nome = null;
  sexo = ['Feminino','Masculino'];
  idade = null;
  selecionar_cidade = null;
  cidades = ['Palmas','Mossoró','Porto Nacional']

  constructor(private pessoa: QuestionarioManagerService){
    
  }


  salvar() {
      const pessoa = {
        id: Math.random() + 1,
        nome: this.nome,
        sexo: this.sexo,
        idade: this.idade,
        cidade: this.selecionar_cidade,
    };

    this.pessoa.salvar(pessoa)
    
    }
  
};