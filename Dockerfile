# Usa imagem base com Nginx
FROM nginx:alpine

# Remove a configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do seu projeto para o diretório do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80
