# Deploy do Projeto Efood na Vercel

## Passos para fazer o deploy:

### 1. Acesse a Vercel
- Vá para [https://vercel.com](https://vercel.com)
- Faça login com sua conta do GitHub

### 2. Importe o Projeto
- Clique em "Add New..." → "Project"
- Selecione o repositório `Soares20cm/efood`
- Clique em "Import"

### 3. Configure o Projeto
Na página de configuração, ajuste as seguintes opções:

**Framework Preset:** Create React App

**Root Directory:** `efood` (IMPORTANTE: selecione a pasta efood)

**Build Command:** `npm run build` (já está configurado no package.json)

**Output Directory:** `build` (padrão do Create React App)

**Install Command:** `npm install` (padrão)

### 4. Configuração Automática
O projeto já possui um arquivo `vercel.json` configurado que:
- Define o comando de build correto
- Configura o diretório de saída
- Adiciona rewrites para SPA (Single Page Application)

### 5. Deploy
- Clique em "Deploy"
- Aguarde o build finalizar (pode levar 2-5 minutos)
- Após o deploy, você receberá um link como: `https://efood-seu-usuario.vercel.app`

## Verificação

Após o deploy, verifique se:
- ✅ A página inicial carrega os 6 restaurantes (3 Japonesa, 3 Italiana)
- ✅ As imagens aparecem corretamente (sushi.png, macarrao.png)
- ✅ Ao clicar em "Saiba mais", navega para a página do restaurante
- ✅ A página do restaurante mostra 6 produtos (Pizza Margherita)
- ✅ O modal de produto abre ao clicar em "Adicionar ao carrinho"
- ✅ O carrinho lateral funciona corretamente
- ✅ O modal de entrega e pagamento funcionam
- ✅ A API está carregando dados (mesmo que use dados estáticos na apresentação)

## Estrutura do Projeto

```
efood/
├── efood/              # Pasta principal do projeto React
│   ├── src/           # Código fonte
│   ├── public/        # Arquivos públicos
│   ├── package.json   # Dependências e scripts
│   └── build/         # Gerado após npm run build
├── vercel.json        # Configuração da Vercel
└── DEPLOY.md          # Este arquivo
```

## Troubleshooting

### Erro: "No Build Output"
Se aparecer este erro:
1. Certifique-se de que o **Root Directory** está configurado como `efood`
2. Verifique se o build command é `npm run build`
3. Verifique se o output directory é `build`

### Erro: "404 Not Found" ao navegar
- O arquivo `vercel.json` já está configurado com rewrites para SPA
- Certifique-se de que o arquivo foi commitado no repositório

### Erro de Build
1. Verifique os logs de build na Vercel
2. Teste o build localmente: `cd efood && npm run build`
3. Verifique se todas as dependências estão instaladas

## Dados do Projeto

**Repositório GitHub:** https://github.com/Soares20cm/efood

**API Utilizada:** https://api-ebac.vercel.app/api/efood/restaurantes

**Tecnologias:**
- React 19.2.4
- TypeScript 4.9.5
- Redux Toolkit 2.5.0
- React Router DOM 7.13.0
- Styled Components 6.1.19

## Comandos Úteis

```bash
# Instalar dependências
cd efood && npm install

# Rodar localmente
npm start

# Build de produção
npm run build

# Testar build localmente
npx serve -s build
```
