# =========================
# Build Angular
# =========================
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# =========================
# Nginx
# =========================
FROM nginx:alpine

# Supprimer la page par défaut
RUN rm -rf /usr/share/nginx/html/*

# ⚠️ COPIE DU DOSSIER browser (CRITIQUE)
COPY --from=build /app/dist/yassine/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
