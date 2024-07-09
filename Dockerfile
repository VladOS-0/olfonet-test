FROM nginx:alpine

#RUN rm -rf /usr/share/nginx/html/*
COPY ./app /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/sites-enabled/default
EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]