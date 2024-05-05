FROM nginx:1.25.3

# confファイルを上書きは不要
#COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

# index.htmlを上書き
COPY dist/index.html /usr/share/nginx/html/index.html

# assest/ディレクトリを丸ごとコピー
WORKDIR /usr/share/nginx/html/
COPY dist/assets /usr/share/nginx/html/assets/

# 80ポートを公開する
EXPOSE 80
