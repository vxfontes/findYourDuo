<h1> Aula 2 </h1>

* baixando assets para design da parte web e mobile

<br />

## ⚙️ backend

### :rocket: Technologies 
> node.js / typescript / express / hoppscotch / ts-node-dev

- não foram trabalhado mais funções do backend nesta aula

```bash
# rodando projeto usando tsnd
$ yarn dev
```

<br />

## 💻 web

### :rocket: Technologies 
> react.js / vite / typescript / tailwind css / photosphor

- criação do css geral da aplicação
- instalação do **tailwind** com potscss para estilizar componente através de classes 
    -> utilização para darkmode e responsividade
- realizando configuração no arquivo gerado pelo tailwind init e criação de main css requisitado
- baixando _extensão_ do postcss e do tailwind
- colocando imagem como background com o tailwind e na pasta public aplicando no arquivo index.html
- adicionando logo na pagina principal e iniciando a configuração -> gradiente do nome foi adicionando no arquivo de configuração do tailwind como bg-image
- utilização das imagens dos games na tag 'a' enquanto não conectamos com a twitch
- colocando gradiente preto em cada imagem e arrumando titulo
- criando div debaixo e colocando botão e texto
- para icones vamos utilizar a biblioteca **photosphor**
- trocando a fonte importando no arquivo index.html e setando no arquivo tailwind

```bash
# rodando o projeto com vite
$ yarn dev

# no terminal gera um link local para visualização da página do react
```

<br />

## 📱 mobile

### :rocket: Technologies 
> expo / typescript

- vamos adicionanar as pastas que baixamos no notion, onde importamos alguns assets e algumas configurações como theme: onde configuramos as cores principais da aplicação,
    utils: onde um games.ts exportará um array com alguns games e suas imagens e mais assets para a pasta src

```bash
- yarn dev # para utilização de um novo tipo de conexão com o celular
- yarn android # abre no emulador
```