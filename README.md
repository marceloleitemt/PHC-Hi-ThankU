# PHChiThankUI
Sim, no início era o ThankUI (UI para consumir a api desenvolvida em vb.net)
Tudo começou com o desenvolvimentos paralelos aos estudos do curso. Quando foi-nos informada as stacks, busquei construir uma API local em VB.NET e SQL. Esse desenvolvimento embora simples me ajudou a perceber melhor como tudo se encaixaria e me familiarizar com as linguagens, stacks etc.

Para consumir o JSON fornecido pela referida API, criei esse projeto em angular e boostrap.

A seguir nos estudos da framework cs web, criei esse simples Ecrã com seus objetos de ecrã, para registar os ThankUs. Foi também criada uma view mais complexa para o Portal, editando o tema e oferecendo uma User Experience maais atraente, mas infelizmente esse desenvolvimento foi perdido durante os estudos com a base de dados.

Por fim, houve a decisão de levar esse desenvolvimento para a nuvem a fim de fazer uma entrega, o que resultou no projeto funcionando através do firebase.

## O que precisa para rodar essa branch?
Criar uma tabela de utilizador com os seguintes campos:
//ident using readme.md syntax:
* TABELA U_THANKU
	* TIPO (C)
	* MENSAGEM (M)
	* NOMEUTIL (C)
	* DEUTIL (C)
	* USERNO (FN)
	* PARAUTIL (C)
	* PARAUSERNO (FN)
	* Likes (N) Contagem de Likes                       


**Passo 1:** Importar no CS WEB o Ecrã, objetos de Ecrã e Script.

**Passo 2:** Atualizar o shared.services.ts com a url do endpoint

**Passo 3:** ng serve --o


# Readme Padrão do Angular CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
