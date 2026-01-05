// 1. Veri listesi: Tüm bağış kalemlerini buraya ekliyoruz
const donations = [
    { id: 1, category: "BAG", title: "Bag Donation", price: "₺500.00", stock: 200, img: "images/canta.png" },
    { id: 2, category: "SHOE", title: "Shoe Donation", price: "₺2300.00", stock: 150, img: "images/ayakkabı.png" },
    { id: 3, category: "BOAT", title: "Boat Donation", price: "₺2000.00", stock: 150, img: "images/bot.png" },
    { id: 4, category: "COAT", title: "Coat Donation", price: "₺1500.00", stock: 150, img: "images/mont.png" },
    { id: 5, category: "NOTEBOOK", title: "Notebook Donation", price: "₺150.00", stock: 500, img: "images/defter.png" },
    { id: 6, category: "COLERED PENCIL", title: "Colored Pencil Donation", price: "₺580.00", stock: 400, img: "images/kalem.png" },
    { id: 7, category: "COLORING BOOK", title: "Coloring Book Donation", price: "₺70.00", stock: 300, img: "images/boyama.png" },
    { id: 8, category: "BOOK", title: "Book Donation", price: "₺350.00", stock: 150, img: "images/kitap.png" }
];

// 2. HTML'deki kapsayıcıyı seçiyoruz
const container = document.getElementById('donation-list');

// 3. Her bir bağış verisi için bir HTML kutusu oluşturuyoruz
function displayDonations() {
    let htmlContent = ""; // Kutuları biriktireceğimiz değişken

    donations.forEach(item => {
        // Senin orijinal HTML yapını aynen buraya yapıştırıyoruz
        htmlContent += `
            <div class="box">
                <div class="box-head">
                    <img src="${item.img}" alt="${item.title}">
                    <span class="donation-category">${item.category}</span>
                    <h3>${item.title}</h3>
                    <div class="price">${item.price}</div>
                    <div class="stock">Needed: <span>${item.stock}</span></div>
                </div>
                <div class="box-bottom">
                    <a href="#" class="btn">aid</a>
                </div>
            </div>
        `;
    });

    // Hazırladığımız tüm kutuları HTML içine basıyoruz
    container.innerHTML = htmlContent;
}

// Sayfa yüklendiğinde fonksiyonu çalıştır
displayDonations();