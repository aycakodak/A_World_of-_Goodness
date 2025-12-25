const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.use(express.static('./')); // HTML dosyalarını okuması için

// KAYIT OLMA
app.post('/register', (req, res) => {
    const data = JSON.parse(fs.readFileSync('data.json'));
    data.users.push(req.body);
    fs.writeFileSync('data.json', JSON.stringify(data));
    res.send("Başarılı");
});

// GİRİŞ YAPMA
app.post('/login', (req, res) => {
    const data = JSON.parse(fs.readFileSync('data.json'));
    const user = data.users.find(u => u.email === req.body.email && u.password === req.body.password);
    if (user) res.send("Başarılı");
    else res.send("Hata tekrar deneyin");
});

app.listen(3000, () => console.log("Sunucu http://localhost:3000 adresinde hazır!"));