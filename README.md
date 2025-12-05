# 🍕 efood - Plataforma de Delivery de Comida

Uma aplicação web moderna de delivery de comida desenvolvida com React, TypeScript e Styled Components.

## ✨ Funcionalidades

- 🏠 **Home Page**: Visualize todos os restaurantes disponíveis
- 🍽️ **Página de Restaurante**: Explore o menu completo de cada restaurante
- 🛒 **Carrinho de Compras**: Adicione e remova itens facilmente
- 💾 **Persistência**: Carrinho salvo no localStorage
- 📱 **Design Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- ✨ **Animações Suaves**: Transições e efeitos visuais agradáveis
- 🔔 **Notificações Toast**: Feedback visual ao adicionar itens
- ⚡ **Performance Otimizada**: Lazy loading de imagens e React.memo

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Styled Components** - CSS-in-JS
- **React Router** - Navegação entre páginas
- **Vite** - Build tool moderna e rápida

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/efood.git

# Entre na pasta do projeto
cd efood

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Lint
npm run lint
```

## 📁 Estrutura do Projeto

```
efood/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   │   ├── Button/
│   │   ├── Cart/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── MenuItem/
│   │   ├── RestaurantCard/
│   │   └── Toast/
│   ├── pages/          # Páginas da aplicação
│   │   ├── Home/
│   │   ├── Restaurant/
│   │   └── NotFound/
│   ├── hooks/          # Custom hooks
│   ├── styles/         # Estilos globais e tema
│   ├── types/          # Definições TypeScript
│   ├── data/           # Dados mockados
│   └── App.tsx         # Componente principal
├── public/             # Arquivos estáticos
└── package.json
```

## 🎨 Funcionalidades Detalhadas

### Carrinho de Compras
- Adicionar itens com quantidade
- Remover itens individualmente
- Cálculo automático do total
- Persistência no localStorage
- Animação de abertura/fechamento

### Design Responsivo
- **Mobile**: Layout em 1 coluna
- **Tablet**: Layout em 2 colunas
- **Desktop**: Layout em 4 colunas

### Otimizações
- Lazy loading de imagens
- React.memo para evitar re-renders
- Animações CSS performáticas
- Bundle otimizado com Vite

## 🌐 Deploy

O projeto pode ser facilmente deployado em:

- **Vercel**: `vercel --prod`
- **Netlify**: Arraste a pasta `dist` após o build
- **GitHub Pages**: Configure o workflow de CI/CD

## 📝 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Seu Nome]

---

⭐ Se você gostou deste projeto, não esqueça de dar uma estrela!
