#Imagem base (escolhi a alpine por ser mais leve)
FROM node:alpine AS build

WORKDIR /app

COPY . .

# Baixa as dependências
RUN npm install
# Constroi o aplicativo Vite para produção
RUN npm run build

# Seleciona a imagem base do nginx
FROM nginx:alpine

# Copia os arquivos de construção do Vite para o diretório de publicação do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Inicia o servidor com Nginx
CMD ["nginx", "-g", "daemon off;"]