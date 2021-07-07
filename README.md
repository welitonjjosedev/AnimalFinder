# Animal Finder

Projeto de desenvolvimento para encontrar pet desaparecidos. É um projeto open source MIT. portanto pode ser copiado alterado desde que mantenha os direitos de quem produziu.

Desenvolvido em Ruby on Rails + Postgres + Redis + Sidekiq em uma esturutura dockerizada

Demo:  http://165.22.39.246/

## Features

- Lista todos os Pets, pode ser filtrado por nome ou status desaparecidos ou encontrado(Há um status de comuncicado que foi suprimido da pesquisa na homepage)
- Cadastro Pedi meu Pet
- Registro e Acesso de donos de Pet, para informar a perda de um pet
- Informa se um Pet Foi encontrado.
- Terceiro podem adicionar informações que auxiliam na localização de um Pet

Animal Finder tem como objetivo auxiliar donos de pet a encontrar seus amiguinho com informações fornecidas por terceiros. 


## INSTALAÇÃO

Deve ter uma sevidor com Docker Instalado.

- Faça download do projeto


```sh
cd Animal-Finder
docker-compose up -d 
```
##### Voilá 
Projeto instalado com sucesso.





## API

Api tem o endpoint default:
165.22.39.246

### register
url: api/auth/register
verb: POST
params:
```sh
{
  "owner": {
    "name": "String",
    "email": "String",
    "password" "String",
    "city": "String",
    "phone": "String",
    "state": "String",
  }
}
```

### login
url: api/login/register
verb: POST
params:
```sh
{
  "owner": {
    "email": "String",
    "password" "String",
  }
}
```

### Animal Create
url: /api/animals
verb: POST
params:
```sh
{
  "animal": {
    "name": "String",
    "age" "Integer",
    "extra" "String",
    "status" "String",
  }
}
```

### Animal update
url: /api/animals/[ID]
verb: POST
params:
```sh
{
  "animal": {
    "name": "String",
    "age" "Integer",
    "extra" "String",
    "status" "String",
  }
}
```



### Animal all
url: /api/animals
verb: GET


### Animal with search
url: /api/animals?q=[string]
verb: GET


### Animal show
url: /api/animals/[ID]
verb: GET


### Animal delete
url: /api/animals/[ID]
verb: DELETE




### Found Create
url: /api/founds
verb: POST
params:
```sh
{
  "found": {
    "name": "String",
    "phone" "String",
    "content" "String",
  }
}
```

### Found update
url: /api/founds/[ID]
verb: POST
```sh
{
  "found": {
    "name": "String",
    "phone" "String",
    "content" "String",
  }
}
```



### found all
url: /api/founds
verb: GET



### found show
url: /api/founds/[ID]
verb: GET


### found delete
url: /api/founds/[ID]
verb: DELETE

# FrontEnd
O frontend desenvolvido em reacjs esta incompleto..
apenas a estrutura dos dados.. e alguns componentes..

Obs: Os Arquivos do FrontEnd Estão na pasta ./frontend
