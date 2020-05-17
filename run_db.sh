docker run -d --name pyfln-mariadb -v `pwd`/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=passpass  -p 3306:3306 mariadb:latest
