# 1. Base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy project files
COPY . .

# 5. Build the app
RUN npm run build

# 6. Expose and run
EXPOSE 3000
CMD ["npm", "start"]
