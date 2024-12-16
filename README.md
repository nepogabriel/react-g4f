<h1 align="center">
CRUD React.js 
</h1>

# Sobre
Consumindo CRUD via API utilizando React.js, Axios, React Router e Json-Server.

O projeto se comunica com suas APIs:

- 1- ViaCep (Buscar endereço)
- 2- CRUD de notícias (json-server) (Administrar notícias)

Os diretórios/arquivos mais importantes são:

- main.jsx (Configuração de rotas está nesse arquivo);
- App.jsx (Arquivo responsável por redenrizar as demais páginas)
- Views/* (Páginas da aplicação)
- api/index.ts (baseURL das APIs utilizadas)

# Rodando projeto
## Pré-requisitos
- Git
- Docker

## Portas necessárias
- Porta 5175
- Porta 3000

## Passo a Passo
- 1- Clonar
```URL
https://github.com/nepogabriel/react-g4f.git
```
- 2- Entrar na pasta
```
cd react-g4f
```

- 3- Construir imagem
```
docker build -t react-json-server .
```

- 4- Executar imagem
```
docker run -it -p 5175:5173 -p 3000:3000 react-json-server
```

- 5- Links de acesso
- React:
```URL
http://localhost:5175/
```

- Json-Server:
```URL
http://localhost:5175/
```