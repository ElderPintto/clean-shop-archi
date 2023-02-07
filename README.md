# Clean Shop Archi

Uma POC contruída no intuito de compreensão DDD com arquitetura limpa

## Estruturação

```shell
  ├── src
  │   ├── core
  │   │   └── src
  │   │       ├── domain
  │   │       │   ├── product
  |   |       |   |   ├── intity
  │   │       |   │   |   └── index.ts
  |   |       |   |   ├── useCase
  │   │       |   │   |   └── index.ts
  |   |       |   |   └── repository
  │   │       |   │       └── index.ts
  │   │       └── infra
  │   │           ├── cleints
  │   │           │   └── axiosClient.ts
  │   │           │   └── baseApiClient.ts
  │   │           └── interfaces
  │   │               └── apiClient.ts
  │   └── vue
  │       └── src
  │           └── view
  │                └── dashboard
  |                    ├── componentes
  │                    |   └── exempleComponent.vue
  |                    ├── pages
  │                    |   └── indexPage.vue
  |                    ├── routes
  │                    |    └── index.ts
  |                    └── story
  │                        └── index.ts
  ├── package.json
  └── README.md
```

Este é um projeto de aplicação que utiliza o framework Vue.js (quasar) e estrutura seus arquivos que mesclam de com o padrão DDD (Domain-Driven Design) e Clean Architecture.

A pasta **src** é onde se encontram todos os arquivos da aplicação. Dentro dela, há a pasta **core** que é responsável por armazenar o código da camada de negócio, ou seja, o domínio da aplicação.

Na pasta **src/core/src/domain/product**, há três pastas: **entity**, **useCase** e **repository**. A pasta **entity** armazena as entidades do sistema, a pasta **useCase** armazena os casos de uso e a pasta **repository** armazena as implementações dos repositórios.

A pasta **infra** armazena a camada de infraestrutura, onde há a pastas: **clients** A pasta clients armazena as implementações dos clientes da API.

A pasta **vue/src/view** armazena as telas da aplicação, onde há as pastas **components**, **pages**, **routes** e **story**. A pasta **components** armazena os componentes reutilizáveis da aplicação, a pasta **pages** armazena as páginas da aplicação, a pasta **routes** armazena as rotas da aplicação e a pasta **story** armazena as histórias do usuário.

## Pré requisito

`node 16+`

## Instalação de dependências

navegue até a raiz do projeto e rode

```bash
  npm run initial

```

## Iniciar aplicação para desenvolvimento

navegue até a raiz do projeto e rode

```bash
  npm run dev
```

## Iniciar aplicação para produção

navegue até a raiz do projeto e rode

```bash
  npm run build
```
