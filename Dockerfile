FROM nginx
COPY ./docker/index.html /usr/share/nginx/html
COPY ./docker/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80