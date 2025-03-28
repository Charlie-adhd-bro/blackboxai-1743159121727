# Бесплатные способы размещения сервера

## 1. Облачные решения

### Vercel (рекомендуется)
1. Зарегистрируйтесь на [vercel.com](https://vercel.com)
2. Установите Vercel CLI: `npm install -g vercel`
3. В папке проекта выполните: `vercel`
4. Следуйте инструкциям для деплоя

### Netlify
1. Зарегистрируйтесь на [netlify.com](https://netlify.com)
2. Перетащите папку проекта в интерфейс Netlify
3. Настройте автоматический деплой

## 2. Локальный сервер для тестирования

1. Установите Node.js
2. В папке проекта создайте файл `server.js`:
```javascript
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('.'));

app.post('/bookings', (req, res) => {
    console.log('New booking:', req.body);
    res.json({ success: true });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```
3. Установите зависимости: `npm install express`
4. Запустите сервер: `node server.js`

## 3. Альтернативные варианты

### GitHub Pages (только фронтенд)
1. Создайте репозиторий на GitHub
2. Загрузите файлы в ветку `gh-pages`
3. Активируйте GitHub Pages в настройках репозитория

### Firebase Hosting
1. Создайте проект на [Firebase](https://firebase.google.com)
2. Установите Firebase CLI: `npm install -g firebase-tools`
3. Выполните `firebase init` и выберите Hosting
4. Задеплойте: `firebase deploy`