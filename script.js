<<<<<<< HEAD


// Sayfa yüklendiğinde çalışması için her şeyi bir fonksiyon içine alıyoruz
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sekme Değiştirme Elemanlarını Seçme
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // 2. Form Giriş Elemanlarını Seçme (Kayıt İçin)
    const regForm = document.getElementById('register-form');
    const logForm = document.getElementById('login-form');

    // --- SEKME DEĞİŞTİRME MANTIĞI ---
    tabRegister.addEventListener('click', () => {
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    tabLogin.addEventListener('click', () => {
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    // --- KAYIT OLMA (LocalStorage Kayıt) ---
    regForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Sayfanın yenilenmesini engelle

        // Formdaki verileri alalım
        const userData = {
            fullName: document.getElementById('reg-name').value,
            email: document.getElementById('reg-email').value,
            phone: document.getElementById('reg-phone').value,
            age: document.getElementById('reg-age').value,
            password: document.getElementById('reg-password').value
        };

        // Veriyi tarayıcı hafızasına (LocalStorage) kaydedelim
        // Not: Gerçekte dizi olarak tutulur ama en basit hali bu:
        localStorage.setItem('savedUser', JSON.stringify(userData));

        alert('Kayıt başarılı! Şimdi giriş yapabilirsiniz.');
        
        // Kayıt bitince Giriş sekmesine geri dönelim
        tabLogin.click();
    });

    // --- GİRİŞ YAPMA (LocalStorage Kontrol) ---
    logForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const loginEmail = document.getElementById('login-email').value;
        const loginPass = document.getElementById('login-password').value;

        // Hafızadaki kullanıcıyı çekelim
        const storedUser = JSON.parse(localStorage.getItem('savedUser'));

        if (storedUser && storedUser.email === loginEmail && storedUser.password === loginPass) {
            alert('Giriş başarılı! Ana sayfaya yönlendiriliyorsunuz.');
            window.location.href = 'index.html'; // Başarılıysa ana sayfaya gönder
        } else {
            alert('E-posta veya şifre hatalı!');
        }
    });
});
=======
// 1. Sekmeleri ve Formları Tanımlama
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// --- SEKME DEĞİŞTİRME MANTIĞI ---
tabRegister.onclick = () => {
    loginForm.classList.add('hidden');      // Girişi gizle
    registerForm.classList.remove('hidden'); // Kaydı göster
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
};

tabLogin.onclick = () => {
    registerForm.classList.add('hidden');   // Kaydı gizle
    loginForm.classList.remove('hidden');    // Girişi göster
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
};

// --- BACKEND BAĞLANTISI ---

// KAYIT OLMA
registerForm.onsubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: document.getElementById('reg-email').value,
            password: document.getElementById('reg-password').value
        })
    });
    alert(await res.text()); // "Başarılı" mesajı gelir
};

// GİRİŞ YAPMA
loginForm.onsubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: document.getElementById('login-email').value,
            password: document.getElementById('login-password').value
        })
    });
    const mesaj = await res.text();
    alert(mesaj);
    if(mesaj === "Başarılı") window.location.href = "index.html";
};
>>>>>>> 127e58e (Proje yapisi ana dizine tasindi)
