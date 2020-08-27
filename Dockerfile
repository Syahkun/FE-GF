 
FROM nginx:stable
MAINTAINER syahkun "pamungkas.syahrizal@gmail.com"

RUN mkdir -p /www
RUN mkdir -p /log

COPY default.conf /etc/nginx/conf.d
ADD build/. /www

WORKDIR /www