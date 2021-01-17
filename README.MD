# ServiceLX :iphone: :heavy_check_mark:

## Devs :bust_in_silhouette:

- Arthur Barbero [LinkedIn](https://www.linkedin.com/in/arthur-barbero/) / [Github](https://github.com/arthurbarbero);
- Felippe Alves [LinkedIn](https://www.linkedin.com/in/felippe-alves-de-paula/) / [Github](https://github.com/FelippeAlves);
- José Vinícius [LinkedIn](https://www.linkedin.com/in/jose-vinicius-ferreira-santana-903239181/) / [Github](https://github.com/JViniciusF).


## Objetivo :dart:

Este repositório tem como objetivo apresentar os conhecimentos adquiridos, de forma autodidática no que tange as ferramentas utilizadas abaixo, em uma simples aplicação mobile.

## Introdução :memo:

Nos dias atuais, a procura de produtos e serviços via online se intensificou de maneira exponencial, principalmente devido aos acontecimentos decorrentes da pandemia. O cenário atual pede por soluções mais específicas em todos os ramos de negócio, sejam eles a compra e venda de produtos, entrega de produtos alimentícios entre outros. Dentro deste cenário podemos perceber que existe uma adaptação de plataformas de compra e venda para o ramo de serviços, porém, não existe tal aplicação específica ou na qual angariou seu espaço de forma significante no mercado.
Pensando desta forma, criou-se o ServiceLX, uma aplicação mobile que se concentra na oferta e demanda de serviços de seus usuários de forma simples.

## Tecnologias utilizadas :computer:

- [React Native](https://reactnative.dev/);
- [Expo](expo.io);
- [Node.JS](https://nodejs.org/en/);
- [Express](https://expressjs.com/pt-br/);
- [Mongoose](https://mongoosejs.com/).

## Features 

### Login :lock:

Utilizamos a própria conta google do usuário para realizar o Login no aplicativo. Utilizando as ferramentas Expo conseguimos acesso as aplicações nativas do Android e assim conseguimos informações da conta do usuário como foto, e-mail e nome completo. Também utilizando as ferramentas Expo, podemos utilizar a geolocalização do usuário para definir seu endereço completo.

<img src="https://raw.githubusercontent.com/JViniciusF/ServicoLX/master/imagens/Login.jpeg" width="400"><img src="https://raw.githubusercontent.com/JViniciusF/ServicoLX/master/imagens/user1.jpeg" width="400">

### Home :house:

Ao logar, o usuário já pode realizar a visualização dos últimos serviços disponibilizados por outros usuários.

<img src="https://raw.githubusercontent.com/JViniciusF/ServicoLX/master/imagens/Home.jpeg" width="400">

### Pesquisar :mag:

Quando pesquisar, o usuário poderá colocar palavras chaves e também pesquisar por filtro de preço, reputação ou quantidade de vezes que o serviço foi cotado.

<img src="https://raw.githubusercontent.com/JViniciusF/ServicoLX/master/imagens/Pesquisa.jpeg" width="400"><img src="https://raw.githubusercontent.com/JViniciusF/ServicoLX/master/imagens/Pesquisa_filtro_pre%C3%A7o.jpeg" width="400">


### Menu lateral :page_with_curl:

O usuário poderá, ao arrastar da esquerda para a direita, ter mais opções para ver, criar e separar seus serviços favoritos.

<img src="https://raw.githubusercontent.com/JViniciusF/ServicoLX/master/imagens/Menu_lateral.jpeg" width="400">

### Categorias :books:

Ao acessar as categorias, o usuário poderá filtrar os serviços por sua categoria cadastrada.

<img src="https://raw.githubusercontent.com/JViniciusF/ServicoLX/master/imagens/Categorias.jpeg" width="400">

### Inserir Anúncio :inbox_tray:

Utilizando a seção de "inserir anúncio" qualquer usuário poderá cadastrar seu serviço.

<img src="https://raw.githubusercontent.com/JViniciusF/ServicoLX/master/imagens/Cadastro.jpeg" width="400">

### Detalhes do Serviço :book:

Ao clicar em qualquer serviço, seja proveniente de pesquisa, home ou categorias, é demonstrado os detalhes do serviço e opções de contratação do mesmo. Ao contratar, o usuário também pode realizar a avaliação do serviço prestado.

<img src="https://raw.githubusercontent.com/JViniciusF/ServicoLX/master/imagens/Detalhes.jpeg" width="400"><img src="https://raw.githubusercontent.com/JViniciusF/ServicoLX/master/imagens/Rating.jpeg" width="400">


## Requerimentos do projeto

- Node versão 12.19.0 LTS ou última estável - [Node Download](https://nodejs.org/en/);
- React-Native - Expo CLI [Expo](https://expo.io/learn)

## Como iniciar o projeto

- Baixe e instale [NodeJS](https://nodejs.org/en/) em seu SO de preferência;
- Instale o Expo-CLI
    ```
    npm install expo-cli --global
    ```

- Clone o projeto usando o comando 
  
  ```
    ~/
    git clone https://github.com/JViniciusF/ServicoLX.git

    cd ServicoLX

    ~/ServicoLX/
    git fetch

    git checkout develop 

    git pull
  ```

- Back-End

  - Baixe os packages com o gerenciador de pacotes NPM:
  ```
    cd back-end
    npm install
  ``` 

  - Criando o arquivo ``.env``. Dentro da raiz do repositório existe um exemplo do arquivo chamado ``.env-example``, este deve ser seguido para a conexão com seu banco de dados local, segue exemplo 
  ```
    MONGO_DATA_BASE=serviceLX
    MONGO_URL=sandbox.w6eyr.mongodb.net/
    MONGO_USERNAME=serviceLX
    MONGO_PASSWORD=1hN5aLAU3Ksgit6I
  ```
    Obs.: Utilize as credenciais acima para utilizar o banco de testes.

    - Rode a aplicação
    ```
      npm run start    
    ```
- Front-end

  - Baixe os packages com o gerenciador de pacotes NPM:
  ```
    cd front-end
    npm install
  ``` 

  - Criando o arquivo ``environment.js``. Dentro da raiz da pasta front-end existe um exemplo do arquivo chamado ``environment-example.js``, este deve ser seguido para a conexão com a API local, segue exemplo 
  ```
    import Constants from "expo-constants";
    import { Platform } from "react-native";

    const ENV = {
        dev: {
            apiUrl: 'http://192.168.15.8:3333/',
            amplitudeApiKey: null,
        },
        staging: {
            apiUrl: "[your.staging.api.here]",
            amplitudeApiKey: "[Enter your key here]",
            // Add other keys you want here
        },
        prod: {
            apiUrl: "[your.production.api.here]",
            amplitudeApiKey: "[Enter your key here]",
            // Add other keys you want here
        }
    };

    const getEnvVars = (env = Constants.manifest.releaseChannel) => {
        // What is __DEV__ ?
        // This variable is set to true when react-native is running in Dev mode.
        // __DEV__ is true when run locally, but false when published.
        if (__DEV__) {
            return ENV.dev;
        } else if (env === 'staging') {
            return ENV.staging;
        } else if (env === 'prod') {
            return ENV.prod;
        }
    };
   
    export default getEnvVars;
  ```
    Obs.: Utilize as credenciais acima para utilizar a API local.

  - Após instalar as dependências e criar o arquivo ``environment.js``, inicie a aplicação Expo:
  ```
    cd front-end
    npm run start -a
  ```
