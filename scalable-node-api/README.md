# Scalable Node API

> API de exemplo utilizada nos capítulos sobre deployments

> **Nota:** Esta aplicação serve de base tanto para a imagen `scalable-node-api:1.0.0` quando para `heavy-node-api` e `scalable-node-api:2.0.0`

## Conteúdo

- `Dockerfile`: Utilizado para criar a imagem que vamos publicar no K8S
- `app`: Pasta que contém o código fonte da aplicação

## Como executar

### Localmente

1. Abra a pasta `app` no terminal de sua preferência
2. Digite `PORT=<numero> && node index.js` ou `PORT=<numero> && npm start` (você precisará ter o NodeJS instalado para poder realizar a ação)
3. O servidor deve se inicializar

### Através de uma imagem docker

#### Se você quiser construir a imagem localmente

1. Execute `docker build -t <nome> .` em um terminal aberto dentro da pasta que contém o arquivo `Dockerfile`
2. Aguarde a construção da imagem
3. Execute `docker run -e PORT='<numero>' -p 8080:<numero> <nome-da-sua-imagem>`
4. Acesse a API em `localhost:<numero>`

#### Rodando através da imagem pré construída no DockerHub

1. Execute `docker run -e PORT='<numero>' -p 8080:<numero> khaosdoctor/scalable-node-api`
2. Acesse a api em `localhost:<numero>`

