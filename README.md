<h1> Aula 4 </h1>

* realizando a conexão do backend com o frontend

<br />

## ⚙️ backend

### :rocket: Technologies 
> node.js / typescript / express / hoppscotch / ts-node-dev / prisma / SQLite / cors

- sem alterações no backend, apenas utilizamos para conectar com o frontend

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

- transformar ancora que representa o jogo em um componente
- component de publicar anuncio
- puxando informações do backend usando useeffect
- tipagem no usestate<>()
- utilização de biblioteca **radix-ui** sem estilização para fazer modais mais acessiveis -> componentes sem estilização que trazem comportamentos comuns que vemos na web
- criação de component input extendendo htmlinputattribute

```bash
# rodando o projeto com vite
$ yarn dev

# no terminal gera um link local para visualização da página do react
```

<br />

## 📱 mobile

### :rocket: Technologies 
> expo / typescript / ngrok / react navigation

- conectar com o backend usando useEffect -> no mobile ao inves de localhost colocamos o endereço ip
- como o fetch nao funcionava de forma alguma no iphone, optou-se por usar **ngrok** onde colocamos o comando ngrok http ´nossaporta´ e conseguimos fazer a requisição
- utilização da biblioteca **react navigation** para implementar navegação
vamos usar a navegação stack onde uma página sobrepõe a outra e depois é descartada

```bash
$ yarn porta # abrir a porta para mobile
$ yarn dev # para utilização de um novo tipo de conexão com o celular
$ yarn android # abre no emulador
```