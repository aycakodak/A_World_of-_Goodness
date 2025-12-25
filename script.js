// --- SEKME VE FORM SEÇİMLERİ ---
const tabLogin = document.getElementById('tab-login');
const tabRegister = document.getElementById('tab-register');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// --- SEKME DEĞİŞTİRME MANTIĞI ---
tabRegister.onclick = () => {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    tabRegister.classList.add('active');
    tabLogin.classList.remove('active');
};

tabLogin.onclick = () => {
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    tabLogin.classList.add('active');
    tabRegister.classList.remove('active');
};

// --- BACKEND BAĞLANTILARI ---

// 1. KAYIT OLMA (API'ye Gönderir)
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
    alert(await res.text()); 
};

// 2. GİRİŞ YAPMA (API'den Kontrol Eder)
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

// 3. BAĞIŞ YAPINCA STOK DÜŞÜRME (Hocanın beklediği o son dokunuş)
const bagisButonu = document.getElementById('aid_page');
if (bagisButonu) {
    bagisButonu.onclick = async (e) => {
        e.preventDefault(); // Sayfanın en üste zıplamasını engeller
        const res = await fetch('/bagis-yap', { method: 'POST' });
        const sonuc = await res.text();
        alert(sonuc); // Ekranda "Kalan Stok: 99" gibi yazar
    };
}