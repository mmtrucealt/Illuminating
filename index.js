const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// static
app.use(express.static(path.join(__dirname, '../public')));

app.get('/service/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/assets/uv/uv.sw.js')
    .then(function(registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function(error) {
      console.log('Service Worker registration failed:', error);
    });
}
