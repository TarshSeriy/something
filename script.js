// script.js
const images = [
    { src: 'Screenshot_5.png', description: 'Бодрого времени суток, надеюсь QR использован в свое время)0)0)' },
    { src: 'Screenshot_6.png', description: 'Эт небольшой гайд по пользованию' },
    { src: 'Screenshot_7.png', description: 'Розовая хуйнюшка переключает режими, авто, ручной, или видео' },
    { src: 'Screenshot_8.png', description: 'Эт галерея' },
    { src: 'Screenshot_9.png', description: 'Эт вспышка' },
    { src: 'Screenshot_10.png', description: 'Эт настройки изображения, ISO, Exposition and etc' },
    { src: 'Screenshot_11.png', description: 'Небольшая проблема с зарядкой(' +
            'Там китайская вилка, а переходник дали не рабочий, я тебе кину деньни, купи в любом магазе' +
            'На картинке как раз переходник, покажешь эту картинку,' +
            'время поджмимало прости не успел  (' },
    { src: 'Screenshot_12.png', description: 'Это картридер, в фотике есть SD карта памяти' +
            'чтобы перенести фотки на телефон, вынимаешь карту(в след пункте покажу как)' +
            'и вставляешь в картридер, и далее в телефон' +
            'и спокойно заходишь в проводник телефона и сохраняешь фотки' },
    { src: 'wiggle-cat-wiggle.gif', description: 'Вроде бы все, надеюсь тебе все понравилось <br> Люблю тебя<br>Твой Сережа'}
];

let currentIndex = 0;

const mainImage = document.getElementById('main-image');
const descriptionText = document.getElementById('description-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateContent() {
    mainImage.src = images[currentIndex].src;
    descriptionText.innerHTML = images[currentIndex].description;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateContent();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateContent();
    }
});

// Initialize the first content
updateContent();
