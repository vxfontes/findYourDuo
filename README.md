<h1> Aula 3 </h1>

* desenvolvimento do backend

<br />

## ⚙️ backend

### :rocket: Technologies 
> node.js / typescript / express / hoppscotch / ts-node-dev / prisma / SQLite / cors

- entidades
    1. game: { id, title, bannerUrl }
    2. ads/anuncio: { id, gameId, nickName, yearsPlaying, discord, weekDays, hourStart, hourEnd, useVoiceChannel, createdAt }
- casos de uso
    1. listagem de games com contagem de anúncios
    2. criação de novo anúncio
    3. listagem de anúncios por game
    4. buscar discord pelo ID do anúncio

- utilização do query (estado na aplicação), route (identificação na rota) e body (corpo da requisição)
- criação das rotas principais da aplicação e adição no hoppscotch
- utilização de: linguagem nativa da db, _query builder_ para transformar codigo em js em sql para mais facil utilização de db ou _ORM_ que faz relação entre as tabelas do db e classes ou entidades do javascript -> forma mais fácil -> utilização do **prisma**
- ``` yarn prisma init --datasource-provider SQLite ``` para a criação de arquivos proprios para sqlite, como .env -> definição de variáveis de ambiente
- modelagem do banco de dados dentro do arquivo do prisma 
- damos um ``` yarn prisma migrate dev ``` para "converter" o banco em sql e gera-se um arquivo e no terminal pergunta sobre o nome da migration -> funciona como versionamento da db como commit no git
- utilização de extensao para visualizar banco de dados -> mostra tabelas criadas e migrations ja feitas -> ou...
- **utilizar comando ```yarn prisma studio``` gera uma interface gráfica com nossa database**
- criando funcionalidade das rotas e formatando com o proprio prisma a forma de exibição
- criando funções de conversão de horas
- instalando **cors** para proteger informações do backend que não desejamos que o frontend acesse 

```bash
# rodando projeto usando tsnd
$ yarn dev

# rodar comando para criar nova migration
$ yarn prisma migrate dev

# rodar comando para visualizar db
$ yarn prisma studio
```

<br />

## 💻 web

### :rocket: Technologies 
> react.js / vite / typescript / tailwind css / photosphor

- não foram trabalhadas mais funções da web nesta aula

```bash
# rodando o projeto com vite
$ yarn dev

# no terminal gera um link local para visualização da página do react
```

<br />

## 📱 mobile

### :rocket: Technologies 
> expo / typescript

- não foram trabalhadas mais funções do mobile nesta aula

```bash
- yarn dev # para utilização de um novo tipo de conexão com o celular
- yarn android # abre no emulador
```