document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".classes-buttons button");
    const contents = document.querySelectorAll(".tab-content");

    // Burada tablar arasında geçiş yapılacak
    contents.forEach(content => content.classList.add("hidden"));

    // Eğer tab içeriği varsa ilk tabı göster
    if (contents.length > 0) {
        contents[0].classList.remove("hidden");

        // Eğer buton varsa ilk butonu aktif yap
        if (buttons.length > 0) {
            buttons[0].classList.add("active");
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const tab = this.getAttribute("data-tab");

            // Butonlardan aktif olanı kaldır
            buttons.forEach(btn => btn.classList.remove("active"));

            // Tıklanan butonu aktif yap
            this.classList.add("active");

            // Burda tab içeriklerini gizle
            contents.forEach(content => content.classList.add("hidden"));

            // Tıklanan tabı göster
            document.getElementById(tab).classList.remove("hidden");
        });
    });


    // Trainer kısmında isimleri göster/gizle
    const trainerCards = document.querySelectorAll('.trainer-card');

    trainerCards.forEach(card => {
        // İsimleri göster
        card.addEventListener('mouseenter', function () {
            const trainerName = this.querySelector('.trainer-name');
            if (trainerName) {
                trainerName.classList.remove('hidden');
                trainerName.classList.add('show');
            }
        });

        // Mouse çekildiğinde isimleri gizle
        card.addEventListener('mouseleave', function () {
            const trainerName = this.querySelector('.trainer-name');
            if (trainerName) {
                trainerName.classList.add('hidden');
                trainerName.classList.remove('show');
            }
        });
    });
});

// Burada BMI hesaplama işlemleri yapılacak

document.addEventListener('DOMContentLoaded', function () {
    // Burada BMI hesaplama işlemleri yapılacak
    const calculateBtn = document.getElementById('calculate-bmi');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function () {
            const height = parseFloat(document.getElementById('height-input').value);
            const weight = parseFloat(document.getElementById('weight-input').value);
            const resultContainer = document.getElementById('result-container');
            const bmiResult = document.getElementById('bmi-result');
            const bmiCategory = document.getElementById('bmi-category');
            const indicator = document.getElementById('bmi-indicator');

            // Burada hatalı girişleri kontrol et
            if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) { // Eğer height veya weight değeri boş veya 0 ise hata mesajı göster, isNan fonksiyonu ise sayı olup olmadığını kontrol eder
                bmiResult.textContent = "Please enter valid height and weight";
                bmiCategory.textContent = "";
                resultContainer.className = "p-4 mt-4 bg-red-100 text-red-700 rounded-lg";
                indicator.classList.add('hidden');
                return;
            }

            // Calculate BMI
            const bmi = weight / Math.pow(height / 100, 2); // Burada Math.pow fonksiyonu ile height'i 100'e böldük ve karesini aldık
            const roundedBMI = bmi.toFixed(1); // Burada BMI değerini 1 ondalık basamağa yuvarladık
            // Set category and color
            let category, colorClass; // Burada category ve colorClass değişkenlerini tanımladık
            if (bmi < 18.5) {
                category = "Underweight";
                colorClass = "bg-blue-100 text-blue-700";
            } else if (bmi < 25) {
                category = "Normal weight";
                colorClass = "bg-green-100 text-green-700";
            } else if (bmi < 30) {
                category = "Overweight";
                colorClass = "bg-yellow-100 text-yellow-700";
            } else {
                category = "Obesity";
                colorClass = "bg-red-100 text-red-700";
            }

            // Burada BMI sonucunu ekrana yazdır
            const xPos = Math.min(Math.max((bmi - 15) * 3.2, 5), 95); // Burada BMI değerine göre x pozisyonunu hesapladık
            indicator.style.left = `${xPos}%`; // Burada x pozisyonunu ayarladık
            indicator.style.top = "58%"; // Burada y pozisyonunu ayarladık
            indicator.classList.remove('hidden'); // Burada indicator'ü gösterdik
        });
    }
});

// Burada mobile menu işlemleri yapılacak
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('show');
    });

    // Burada mobile menunun dışına tıklanınca menüyü kapat
    document.addEventListener('click', function (event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnButton = mobileMenuButton.contains(event.target);

        if (!isClickInsideMenu && !isClickOnButton && mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
        }
    });

    // Burada mobile menüdeki linklere tıklanınca menüyü kapat
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
        });
    });
});

// Burada navbar scroll efekti yapılacak
document.addEventListener('DOMContentLoaded', function () {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        // Eğer scroll 50px'den fazla ise navbar'a class ekle
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
});