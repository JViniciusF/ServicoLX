
### Requerimentos do projeto

- Node versão 12.19.0 LTS ou última estável - [Node Download](https://nodejs.org/en/);
- React-Native - Expo CLI [Expo](https://expo.io/learn)

### Como iniciar o projeto

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
    Obs.: Utilize as credênciais acima para utilizar o banco de testes.

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
    Obs.: Utilize as credênciais acima para utilizar a API local.

  - Após instalar as dependências e criar o arquivo ``environment.js``, inicie a aplicação Expo:
  ```
    cd front-end
    npm run start -a
  ```
