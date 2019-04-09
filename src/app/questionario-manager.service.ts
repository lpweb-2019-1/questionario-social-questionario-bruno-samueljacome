import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa'

@Injectable({
  providedIn: 'root'
})
export class QuestionarioManagerService {

  lista_pessoas: Array<Pessoa> = []
  
  constructor() {
    this.pessoMaisVelhaPessoaMaisNova()
    this.mediaIdadePessoas()
    this.mediaIdadePorCidade()
   }


  salvar(dados){

    this.lista_pessoas.push(new Pessoa(dados.nome, dados.sexo, dados.idade, dados.sexo))
    console.log(this.listaPessoas())

    this.pessoMaisVelhaPessoaMaisNova()
    this.mediaIdadePessoas()
    this.mediaIdadePorCidade()
  }

  listaPessoas = (): Array<Pessoa> => this.lista_pessoas

  pessoMaisVelhaPessoaMaisNova(){
    let mais_velho =  0
    let mais_novo = 999
    let velho
    let novo

     this.listaPessoas().filter(pessoa => {

      if(pessoa.idade > mais_velho){
        velho = pessoa.nome
        mais_velho = pessoa.idade
      }
      if(pessoa.idade < mais_novo){
        novo = pessoa.nome
        mais_novo = pessoa.idade
      }
    })

    const velho_novo = {
      novo,
      velho
    }

    return velho_novo
  }
  mediaIdadePessoas(){
    let qtd_mulheres= 0;
    let qtd_homens = 0;
    let media_mulheres: Number;
    let media_homem: Number;
    let soma_idade_homens = 0;
    let soma_idade_mulheres = 0;

    this.listaPessoas().filter(pessoa=>{
      if(pessoa.sexo==="feminino"){
        qtd_mulheres++
        soma_idade_mulheres += pessoa.idade
      }
      if(pessoa.sexo==="masculino"){
        qtd_homens++
        soma_idade_homens += pessoa.idade
      }
       
    })
    if(qtd_homens>0 ){
      media_homem = (soma_idade_homens)/qtd_homens 
    }
    if(qtd_mulheres>0){
      media_mulheres = (soma_idade_mulheres)/qtd_mulheres
    }
    const medias = {
      media_mulheres,
      media_homem
      
    }
    
    return medias
  }

  mediaIdadePorCidade(){
 
    let media_idade_palmas: Number;
    let media_idade_mossoro: Number;
    let media_idade_portoNacional: Number;
    let soma_idade_palmas: 0;
    let soma_idade_mossoro: 0;
    let soma_idade_portoNacional: 0;
    let soma_pessoas_palmas = 0;
    let soma_pessoas_mossoro = 0;
    let soma_pessoas_portoNacional= 0;

    this.listaPessoas().filter(pessoa=>{
      if(pessoa.cidade==="Palmas"){
      
        soma_idade_palmas += pessoa.idade
        soma_pessoas_palmas++
      }else if(pessoa.cidade==="Mossoró"){
      
        soma_idade_mossoro += pessoa.idade
        soma_pessoas_mossoro++
      }else if(pessoa.cidade==="Porto Nacional"){
      
        soma_idade_portoNacional += pessoa.idade
        soma_pessoas_portoNacional++
      }
       
    })
    if(soma_pessoas_palmas>0 ){
      media_idade_palmas = (soma_idade_palmas)/soma_pessoas_palmas 
    }
    if(soma_pessoas_mossoro>0 ){
      media_idade_mossoro = (soma_idade_mossoro)/soma_pessoas_mossoro 
    }
    if(soma_pessoas_portoNacional>0 ){
      media_idade_portoNacional = (soma_idade_portoNacional)/soma_pessoas_portoNacional
    }
    const media_por_cidade = {
      media_idade_palmas,
      media_idade_mossoro,
      media_idade_portoNacional
      
    }
 
    return media_por_cidade
  }

}
