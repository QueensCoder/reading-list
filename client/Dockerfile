# set alias
FROM node:alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# nginx causing binding error on herroku
# FROM nginx
# EXPOSE 80
# COPY --from=builder /app/build /usr/share/nginx/html
# default command is to start nginx do not need to tell it to exec a start