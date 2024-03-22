
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


# Projeto final ADA

Este projeto é uma aplicação web de e-commerce construída com React para o projeto final do curso de Frontend da ADA em parceria com o Potência Tech.




## Páginas da Aplicação

- **Login / Cadastro:** os usuários podem criar uma conta ou fazer login para acessar a plataforma. 
    - **Rota:** /login
 
- **Home:** Exibe uma lista de livros que podem ser adicionados ao carrinho.
    - **Rota:** /

- **Detalhes do Livro:** Mostra informações detalhadas sobre um livro específico. 
    - **Rota:** /details


## Stacks utilizadas

**Front-end:** 
- React
- TypeScript
- CSS

**Back-end:** 

- JSON Server: *solução rápida e fácil para simular um backend RESTful API.*





## Funcionalidades

- **Login:** é necessário que o usuário realize o login para acessar as páginas Home e Details
- **Cadastro de usuários:** novos usuários podem se cadastrar e após o cadastro são redirecionados a página Home.
- **Inserir um item no carrinho¹**: ao clicar no botão de adicionar um item ao carrinho é adicionado um item no carrinho (ver demonstração).
- **Ver detalhes de um livro específico**: ao clicar na imagem do livro o usuário é direcionado para a página de detalhes que trará informaçõs específicas daquele livro. Além disso, nessa página terá o link do Preview do Livro e também o link para comprar o ebook do mesmo pela Google Play.

***¹Obs.:** Ao clicar em adicionar um item ao carrinho irá aparecer o número de itens adicionados ao carrinho. Não foi implementada a função de adicionar o item em si no carrinho e também não foi adicionado a página para visualizar os itens inseridos no carrinho.*
## Estrutura do Projeto

- ```src/```
    - ```components/```: Componentes reutilizáveis.
    - ```pages/```: Páginas da aplicação (Login, Home, Details).
    - ```context/```: Contexto global para gerenciamento de estado.
    - ```hooks/```: Hooks personalizados
    - ```routes/```: Configuração das rotas da aplicação.
    - ```styles/```: Estilos globais
## APIs Utilizadas

- **Google Books API:** Utilizada para listar e detalhar os livros. Essa API permite listar e buscar dados relacionados a livros do Google Books, incluindo informações sobre autor, editor, número de páginas, descrições, preço, link para pré-visualização, link para compra do ebook na Google Play, entre outras.

- **Advice API:** Utilizada para apresentar um conselho aleatório na página de Login. Essa API fornece frases motivacionais e inspiradoras.
## Rodando localmente

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```


## Demonstração

Insira um gif ou um link de alguma demonstração


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Autores

- [@octokatherine](https://www.github.com/octokatherine)


## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack...

