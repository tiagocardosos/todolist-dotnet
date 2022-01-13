# ToDoList em .NET 6 + Angular 13 + Mysql

Este projeto foi criado para fins didáticos.

## Acessos

API -> http://localhost:5000/swagger/index.html

Front -> http://localhost:4200/#

Banco:
User: root
Pass: zinco
IP: localhost

## Iniciando projeto

```
docker-compose up -d
```

## Features

- [ ] Documentar código
- [ ] Adicionar campos e pesquisa
- [ ] Comentar todos os códigos
- [ ] Adicionar o Migration em um Migration.Dockerfile
- [ ] Aplicar uma arquitura limpa na API
- [ ] Git Action para o front
- [ ] Git Action para a API

## Comandos de console

### Anotações durante o aprendizado

```
dotnet add package Microsoft.EntityFrameworkCore.Sqlite
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.Tools
```

### Criando Database com EF

```
dotnet ef migrations add CreateDatabase
dotnet ef database update
```

### Testando a aplicação

```
dotnet clean
dotnet build
dotnet run
```

### Gerando release e executando no terminal

```
dotnet publish --configuration Release --output dist
dotnet TodoApiMinimal.dll
```

## Comandos docker

Testando a publicação para preparar e rodar no docker

### Teste dockerfile

```
docker build -t apitodo .
docker run -d -p 5000:80 -p --name apitodo apitodo
```

### Usando o docker-compose

```
docker-compose up -d --build
```

ou argumentos

```
docker-compose up -d --build-arg ASPNETCORE_ENVIRONMENT=Development
```

### Atualizando apenas um container

```
docker-compose up -d --no-deps --build api #ignorando dependências
```

```
docker-compose up -d --build --build-arg ASPNETCORE_ENVIRONMENT=Development api
```

Referências:
https://balta.io/blog/docker-instalacao-configuracao-e-primeiros-passos
https://balta.io/blog/wsl
