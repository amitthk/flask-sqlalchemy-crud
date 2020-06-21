cd pyfln-ui
export PATH=$PATH:`pwd`/node_modules/.bin:~/Apps/node && \
npm run ng --serve -- --proxy-config proxy.conf.json
