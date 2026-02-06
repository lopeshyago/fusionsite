# Estágio 1: Compilação do Tailwind
FROM node:18-alpine AS build
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Instala o Tailwind CLI e compila o CSS
# Substitua 'index.html' pelo nome do seu arquivo se for diferente
RUN npx tailwindcss -i ./input.css -o ./style.css --minify

# Estágio 2: Servidor de Produção
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove arquivos padrão
RUN rm -rf ./*

# Copia o HTML e o CSS compilado do estágio anterior
COPY --from=build /app/index.html .
COPY --from=build /app/style.css .
# Se tiver imagens, copie a pasta public também
# COPY --from=build /app/public ./public 

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
