FROM node:14-alpine
#chuẩn bị môi trường node.js, version node14/alpine

WORKDIR /baoanh/backend

COPY package*.json ./ 
#Copy package.json và package-lock.json
RUN npm install

RUN npm install -g @babel/core @babel/cli

COPY . .
#Copy tất cả file hiện tại của docker ở local vào nơi WORKDIR

RUN npm run build-src
#Tạo thư mục build trên docker

CMD [ "npm","run", "build" ]
#Chạy câu lệnh npm run build

#docker build --tag node-docker .
#Build image 
#--tag đặt tên cho image
#. tạo ngay file docker

# docker run -p 8080:8080 -d node-docker