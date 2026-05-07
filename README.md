# API-Avante-Todo
---

# 📝 Gerenciador de Listas e Tarefas API

Uma API REST desenvolvida para o gerenciamento de listas de tarefas, permitindo a organização de afazeres em categorias específicas com suporte a operações completas de CRUD (Create, Read, Update, Delete) e relacionamentos relacionais.

## 🚀 Tecnologias Utilizadas

* **Node.js & Express:** Framework base para a construção da API.
* **TypeScript:** Adição de tipagem estática para maior segurança e produtividade.
* **Prisma ORM:** Manipulação do banco de dados PostgreSQL com modelagem robusta.
* **PostgreSQL:** Banco de dados relacional para persistência dos dados.
* **Docker:** Configurado para permitir que o banco de dados rode isoladamente.

## Funcionalidades
Liste as funcionalidades implementadas.

## Como executar o projeto

### 1. Instale as dependências

```bash
npm install
```

### 2. Suba o container do banco de dados

```bash
docker compose up -d
```

### 3. Crie o arquivo `.env`

Na raiz do projeto, crie um arquivo chamado `.env` e adicione:

```env
DATABASE_URL="postgresql://docker:docker@localhost:1234/polls"
```

### 4. Execute as migrations do Prisma

```bash
npx prisma migrate dev --name init
```

### 5. Gere o client do Prisma

```bash
npx prisma generate
```

### 6. Inicie o servidor

```bash
npm run dev
```

## Decisões tomadas
- Foi utilizado **Docker** para facilitar a configuração e execução do banco de dados, garantindo um ambiente mais padronizado para o projeto.

- Foi utilizada a ORM **Prisma** para simplificar as operações no banco de dados, facilitar a modelagem das entidades e fornecer melhor integração com TypeScript.

- Ao remover uma lista, todas as tarefas relacionadas a ela também são removidas automaticamente. Esse comportamento foi configurado no `prisma.schema`.


## Observações
Tive dificuldade em Estruturar e planejar melhor o meu projeto, devido ao tempo, foquei muito em fazer algo e me esqueci de dar a devida atenção ao planejamento. Em alguns momentos senti que eu realizei re-trabalhos desnecessarios que poderiam ser evitados com um bom planejamento prévio.

## 📌 Documentaçao da API
link para a documentaçao: https://app.swaggerhub.com/apis/none-68c-ba0/APIAVANTE/1.0


