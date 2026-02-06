# Estágio de Servidor: Usa uma imagem leve do Nginx baseada em Alpine Linux
FROM nginx:alpine

# Define o diretório de trabalho para onde o Nginx serve os arquivos
WORKDIR /usr/share/nginx/html

# Remove os arquivos padrão do Nginx para evitar conflitos
RUN rm -rf ./*

# Copia o index.html e outros arquivos estáticos para o container
# Certifique-se de que o nome do seu arquivo é index.html
COPY . .

# Expõe a porta 80 para o Easypanel
EXPOSE 80

# Inicia o Nginx em modo foreground
CMD ["nginx", "-g", "daemon off;"]
