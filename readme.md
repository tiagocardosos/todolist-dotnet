# ToDoList em .NET 6 + Angular 13 + Mysql

Este projeto foi criado para fins didáticos.

## Features
- [ ] Documentar código
- [ ] Adicionar campos e pesquisa
- [ ] Comentar todos os códigos
- [ ] Adicionar o Migration em um Migration.Dockerfile
- [ ] Aplicar uma arquitura limpa na API

### Instalando packages

```
dotnet add package Microsoft.EntityFrameworkCore.Sqlite
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.Tools
```

### Criando Database

```
dotnet ef migrations add CreateDatabase
dotnet ef database update
```

## Rodando no console

### Testando a aplicação

```
dotnet clean
dotnet build
dotnet run
```

## Gerando release e executando no terminal

```
dotnet publish --configuration Release --output dist
dotnet TodoApiMinimal.dll
```

Testando a publicação para preparar e rodar no docker

### Teste dockerfile

```
docker build -t apitodo .
docker run -d -p 5000:80 -p --name apitodo apitodo
```

### Usando o docker-compose

```
docker-compose up -d
```

ou

```
docker-compose up -d --build-arg ASPNETCORE_ENVIRONMENT=Development
```

### Usando o docker-compose para atualizar apenas um container

```
docker-compose up -d --no-deps --build api
```

```
docker-compose up -d --build --build-arg ASPNETCORE_ENVIRONMENT=Development api
```

#### efetuando o build desconsiderando as dependências
```
docker-compose up -d --no-deps --build api
```
