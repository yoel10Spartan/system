#!/bin/bash

sudo rm -r /home/system/build
( cd /home/system && npm run build )
sudo rm -r /var/www/html/system/
mkdir /var/www/html/system
cp -r /home/system/build/* /var/www/html/system/
chown -R www-data:www-data /var/www/html/system/
nginx -t
systemctl restart nginx