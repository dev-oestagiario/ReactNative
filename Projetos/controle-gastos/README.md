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
