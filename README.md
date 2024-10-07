<img src="./src/assets/images/logoEstacio.png" align="left" height="64px" /><br><br>
# Curso: Desenvolvimento Full Stack
## Mundo 2 - Nível 2 - Missão Prática

## Projeto: Utilizqção do Javascript, JSON e VUE JS

Este projeto tem como objetivo praticar diversas formas de utilização do JavaScript no lado do cliente, explorando o uso do JSON para transmissão de dados e o framework Vue.js para criar interfaces dinâmicas.

### Objetivos do Projeto

* Explorar a sintaxe do JavaScript na implementação de algoritmos;
* Manipular elementos da página usando o DOM (Document Object Model);
* Utilizar JSON para repositórios e transmissão de dados;
* Utilizar o framework Vue.js na construção dinâmica de elementos HTML.

### Organização do código e Funcionalidades:

O código está organizado na forma de três módulos distintos (ordenando.html, receitas.html e usuarios.html) com práticas específicas.

No primeiro módulo - **HTML** *ordenando.html* - foram desenvolvidas funções em formato *Arrow Function* para manipulação de dados, como:

* **swap:** Troca valores em posições de um vetor;
* **shuffle:** Embaralha os elementos de um vetor;
* **bubble_sort:** Ordena um vetor usando o método do Bubble Sort;
* **selection_sort:** Ordena um vetor com o método do Selection Sort;
* **quick_sort:** Ordena um vetor usando o método do Quick Sort;
* **particionamento:** Função de apoio ao Quick Sort.

Nesta página **HTML** foram mplementadas ações para:

* Adicionar valores a uma lista;
* Ordenar a lista usando diferentes algoritmos;
* Embaralhar os valores da lista.

No segundo módulo - **HTML** *receitas.html* - foi desenvolvida uma página dinâmica para exibir receitas com as seguintes funcionalidades:

* Utilização de um vetor JSON para armazenar informações das receitas;
* Implementação das funções:
    * *getListalngredientes:* Para gerar uma lista **HTML** com os ingredientes;
    * *getCard:* Efetua a criação de um *card* de receita usando as informações armazenadaqs no **JSON**;
    * *preencheCatalogo:* Promove a exibição dos *cards* de receitas na página.

No terceiro e último módulo - **HTML** *usuarios.html* - foi implementada uma página que consome dados **JSON** de um serviço **REST** e os exibe dinamicamente usando o **Vue.js**. As principais funcionalidades aplicadas foram:

* exibir os usuários em um layout de 3 colunas usando **Bootstrap**;
* implementação de um componente **Vue.js** que carrega e exibe as informações dos usuários;
* utilização do *endpoint* https://reqres.in/api/users?per_page=10 para obtenção das informações.

## Estrutura de Arquivos

        /src
        │
        └── assets/
        │   │
        │   └── images/                 # Imagens utilizadas no site e README
        │   │   └── berinjela.png
        │   │   └── Bootstrap.png
        │   │   └── Github-Dark.png
        │   │   └── HTML.png                                
        │   │   └── JavaScript.png
        │   │   └── JQuery.png
        │   │   └── json.png
        │   │   └── logoEstacio.png
        │   │   └── pao_caseiro.png
        │   |   └── salada_de_frutas.png
        │   |   └── VisualStudio-Dark.png
        │   │   └── VueJS-Dark.png        
        │   │
        |   └── exemplosjs              # Pasta de códigos Javascript
        │   │   └── ordenando.js        # Arrow Functions
        |   |
        |   └── ordenando.html          # Página do Procedimento 1       
        |   |
        |   └── receitas.html           # Página do Procedimento 2       
        |   |
        |   └── usuarios.html           # Página do Procedimento 3
        |
        └── README.md                   # Este arquivo


### Tecnologias Utilizadas
<br>
<img src="./src/assets/images/HTML.png" align="left" height="25px" />:  Para a estruturação das páginas.<br>
<img src="./src/assets/images/Bootstrap.png" align="left" height="25px" />:  Bootstrap para facilitar o design *responsivo* e garantir que o site seja amigável em dispositivos móveis.<br>
<img src="./src/assets/images/VisualStudio-Dark.png" align="left" height="25px" />: Editor de código utilizado no desenvolvimento.<br>
<img src="./src/assets/images/Github-Dark.png" align="left" height="25px" />: Para armazenamento dos códigos e controle de versões.<br>
<img src="./src/assets/images/JavaScript.png" align="left" height="25px" />: Para manipulação de dados, atribuir dinamismo à página e controle da lógica do projeto.<br>
<img src="./src/assets/images/JQuery.png" align="left" height="25px" />: biblioteca JavaScript que visa facilitar a programação de sites e aplicações web.<br>
<img src="./src/assets/images/VueJS-Dark.png" align="left" height="25px" />: Para criação de elementos dinâmicos e responsivos.<br>
<img src="./src/assets/images/json.png" align="left" height="25px" />: Formato de dados utilizado para troca de informações.<br>

### Instruções para Execução

* Clone ou acesse o repositório https://github.com/CarlosCatao/Mundo2_Nivel2-MissaoPratica/tree/master/src  e faça o download do código em seu ambiente local.
* Abra os arquivos no seu editor de código (recomendado: Visual Studio Code).
* Abra os arquivos **.html** em um navegador ou utilize a extensão "Live Server" no Visual Studio Code para visualizar as páginas em tempo real e suas funcionalidades.

### Licença

Este projeto é de cunho didático/avaliativo e é de uso livre para estudo e aprendizado daspráticas de tecnologias web. Sinta-se à vontade para modificá-lo e usá-lo como base para seus próprios projetos.

### Autor

[<img loading="lazy" src="https://avatars.githubusercontent.com/u/69771619?v=4" width=115><br><sub>Carlos Automare Catão</sub>](https://github.com/CarlosCatao)]

