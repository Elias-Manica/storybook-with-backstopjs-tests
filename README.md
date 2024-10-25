# Projeto Base para Testes de Regressão Visual

Este projeto serve como um **projeto base** para um artigo sobre **testes de regressão visual** em Design Systems, utilizando ferramentas open source como o **BackstopJS**.

## Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Storybook**
- **BackstopJS**

## Estrutura do Projeto

Na pasta `visual-tests`, você encontrará nossas imagens de referência que são usadas nos testes de regressão visual.

## Artigo

Você pode ler mais sobre o assunto no nosso artigo: [Implementando Testes de Regressão Visual com BackstopJS no storybook](https://medium.com/@elias.manica/implementando-testes-de-regress%C3%A3o-visual-com-backstopjs-no-storybook-75bd83407c7b)

## Como Começar

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/storybook-with-backstopjs-tests.git
   cd storybook-with-backstopjs-tests
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o Storybook:

   ```bash
   npm run storybook
   ```

4. Execute os testes de regressão visual:
   ```bash
   npm run test:visual
   ```
