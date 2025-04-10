# Projeto React Native com Expo e TypeScript: Controle de Gastos Pessoais

## Visão Geral
Vamos criar um aplicativo de controle de gastos pessoais para aprender os conceitos básicos de React Native com Expo e TypeScript.

O app permitirá:
- Registrar gastos em diferentes categorias (mercado, combustível, etc.)
- Visualizar um resumo dos gastos
- Gerenciar entradas e saídas financeiras

## 🛠️ Configuração Inicial

### Passo 1: Criar o projeto
```bash
npx create-expo-app controle-gastos --template expo-template-blank-typescript
```
### Passo 2: Executar o projeto

cd controle-gastos
npm run android   # Para Android
npm run ios       # Para iOS
npm run web       # Para versão web

# Estrutura do Projeto React Native com Expo e TypeScript
```bash
controle-gastos/
├── node_modules/
├── assets/
├── App.tsx
├── app.json
├── package.json
├── tsconfig.json
└── babel.config.js
```
## 1. node_modules/

🔹 **O que é**: Pasta criada automaticamente pelo npm/yarn

🔹 **Função**: Armazena todas as dependências do projeto

🔹 **Conteúdo**:

- Bibliotecas do React Native e Expo
- Dependências de desenvolvimento (TypeScript, Babel)
- Bibliotecas adicionais que você instalar

⚠️ **Importante**:

- Nunca edite manualmente
- Não deve ser commitada no Git (está no .gitignore)
- Recriada automaticamente com `npm install`

---

## 2. assets/

🔹 **O que é**: Pasta para recursos estáticos

🔹 **Função**: Armazenar imagens, fonts, ícones, etc.

🔹 **Uso típico**:
```javascript
import logo from './assets/logo.png';
````

## 3. App.tsx

🔹 O que é: Componente principal do React Native

Exemplo de código:
```javascript
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
}
````
🔹 Características:

- Ponto de entrada da aplicação

- Componente raiz (tudo parte daqui)

- Extensão .tsx indica uso de JSX + TypeScript

## 4. app.json

🔹 O que é: Arquivo de configuração do Expo

- Conteúdo exemplo:
```json
{
  "expo": {
    "name": "Controle Gastos",
    "slug": "controle-gastos",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain"
    },
    "android": {
      "package": "com.seunome.controle-gastos"
    }
  }
}
```
🔹 Configurações importantes:

- name: Nome do app (como aparece no celular)

- slug: Usado em URLs (expo.io/@yourname/slug)

- icon/splash: Imagens de ícone e tela inicial

- Configs específicas por plataforma (android/ios)

## 5. package.json

🔹 O que é: Arquivo de configuração do Node.js/npm

- Partes principais:

a) Metadados:
```json
{
  "name": "controle-gastos",
  "version": "1.0.0",
  "private": true
}
```
b) Scripts (comandos úteis):
```json
"scripts": {
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web"
}
```
c) Dependências:
```json
"dependencies": {
  "expo": "~48.0.0",
  "react": "18.2.0",
  "react-native": "0.71.0"
},
"devDependencies": {
  "@types/react": "~18.0.0",
  "typescript": "~4.9.0"
}
```
🔹 Funções:

- Lista todas as bibliotecas necessárias

- Define comandos para rodar o projeto

- Especifica versões de cada dependência

## 6. tsconfig.json

🔹 O que é: Configuração do TypeScript

Conteúdo típico:
```json
{
  "compilerOptions": {
    "jsx": "react-native",
    "target": "esnext",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  },
  "exclude": ["node_modules"]
}
```
🔹 Opções importantes:

- jsx: Como tratar sintaxe JSX

- strict: Ativa verificações de tipo

- esModuleInterop: Compatibilidade entre módulos

🔹 Propósito:

- Define regras para checagem de tipos

- Configura como o TS compila para JS

## 7. babel.config.js

🔹 O que é: Configuração do Babel (transpilador)

Conteúdo padrão:
```javascript
module.exports = {
  presets: ['babel-preset-expo']
};
```
🔹 Funcionamento:

- babel-preset-expo inclui:

	- Preset para React Native

	- Suporte a JavaScript moderno

	- Otimizações para mobile

ℹ️ Importante:

- Raramente precisa ser modificado

- Adicione plugins apenas para funcionalidades extras

## Fluxo de Execução

- Inicialização:
	
	- Expo lê app.json para configurações

	- Carrega App.tsx como componente raiz

- Desenvolvimento:

	- Babel transpila TypeScript/JSX (usando tsconfig.json)

	- Metro Bundler empacota o código

- Build:
	 
	- Expo CLI usa todas essas configurações para gerar os binários


📂 Estrutura de Pastas

```bash
/src
  /components    # Componentes reutilizáveis
  /screens       # Telas do aplicativo
  /contexts      # Contextos do React
  /types         # Tipos TypeScript
  /utils         # Utilitários e helpers
```

Crie essas pastas manualmente ou com o comando:
```bash
mkdir -p src/{components,screens,contexts,types,utils}
```

📦 Dependências Necessárias

Instale as bibliotecas adicionais:

```bash
npx expo install react-native-paper @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context react-native-vector-icons @types/react-native-vector-icons
```

⚙️ Configuração do VS Code

Para habilitar o comando code no terminal:

- Abra o VS Code

- Pressione Ctrl+Shift+P (Windows/Linux) ou Cmd+Shift+P (Mac)

- Busque por "Shell Command"

- Selecione: "Install 'code' command in PATH"

- Reinicie o terminal
