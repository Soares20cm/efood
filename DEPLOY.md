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

**Root Directory:** `efood`

**Build Command:** `npm run build`

**Output Directory:** `build`

**Install Command:** `npm install`

### 4. Variáveis de Ambiente (se necessário)
Se você tiver variáveis de ambiente no arquivo `.env`, adicione-as na seção "Environment Variables"

### 5. Deploy
- Clique em "Deploy"
- Aguarde o build finalizar (pode levar alguns minutos)
- Após o deploy, você receberá um link como: `https://seu-projeto.vercel.app`

## Verificação

Após o deploy, verifique se:
- ✅ A página inicial carrega os 6 restaurantes
- ✅ As imagens aparecem corretamente (sushi.png, macarrao.png)
- ✅ Ao clicar em "Saiba mais", navega para a página do restaurante
- ✅ A página do restaurante mostra 6 produtos (Pizza Margherita)
- ✅ O modal de produto abre ao clicar em "Adicionar ao carrinho"
- ✅ O carrinho lateral funciona corretamente
- ✅ O modal de entrega e pagamento funcionam

## Troubleshooting

Se houver problemas:
1. Verifique os logs de build na Vercel
2. Certifique-se de que o Root Directory está configurado como `efood`
3. Verifique se todas as dependências estão no package.json
4. Teste o build localmente com `npm run build`

## Link do Repositório
https://github.com/Soares20cm/efood

## API Utilizada
https://api-ebac.vercel.app/api/efood/restaurantes
