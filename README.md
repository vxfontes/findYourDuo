<h1> Aula 1 </h1>

* iniciando configurações dos três ambientes de desenvolvimento


<br />

---
## backend
-------

### :rocket: Technologies 
> node.js / typescript / express / hoppscotch / ts-node-dev

- criamos o projeto com node e adicionamos o **express**
- usamos o <strong>type modules</strong> para conseguir importar de forma semelhante ao reactjs
- criamos apenas a porta e um get para fins de teste
- utilização do **PWA hoppscotch** para testar o crud da aplicação
- conversão para typescript configurando o yarn build
- adicionando **ts-node-dev** para auxiliar na atualização das rotas
- criando script dev para rodar e retornando o type commonjs

```bash
# converter typescript em javascript
$ yarn build

# rodar projeto
$ node build/index.js
```

### utilizando a nova dependencia tsnd (ts-node-dev)
```bash
# apenas rodamos o projeto em typescript com script feito
$ yarn dev
```

---