const tourCards = [
    {
        image: "./img/1.webp",
        title: "Франция",
        description:
            "Париж, Лувр, Эйфелева башня и романтика на Сене. Идеально для первого выезда за границу.",
        price: 1200,
    },
    {
        image: "./img/2.webp",
        title: "Италия",
        description:
            "Рим, Венеция, Флоренция – колыбель искусства и гастрономии. Вкуснейшая паста и мороженое!",
        price: 1350,
    },
    {
        image: "./img/3.webp",
        title: "Испания",
        description:
            "Барселона, пляжи Коста-Брава, фестивали и тапас. Жаркое солнце и незабываемая атмосфера!",
        price: 1100,
    },
    {
        image: "./img/4.webp",
        title: "Греция",
        description:
            "Афины, острова Санторини и Миконос – древняя история и кристально чистое море.",
        price: 1250,
    },
    {
        image: "./img/5.webp",
        title: "Турция",
        description:
            "Стамбул, Анталия, теплые моря и великолепные отели. Отличный выбор для семейного отдыха.",
        price: 950,
    },
    {
        image: "./img/6.webp",
        title: "Грузия",
        description:
            "Тбилиси, горы, вино и гостеприимство. Близко, вкусно и душевно – идеально на выходные.",
        price: 600,
    },
];

const divCard = document.querySelector('.card');
const imageMain = document.querySelector('.img-slider');
const parTitle = document.querySelector('.info .name');
const parDesc = document.querySelector('.info .description');
const parPrice = document.querySelector('.info .price');

const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right')

function createCard() {
    const slide = tourCards[currentIndex];
    imageMain.src = slide.image;
    parTitle.textContent = slide.title;
    parDesc.textContent = slide.description;
    parPrice.textContent = slide.price;
};

let currentIndex = 0;

btnRight.addEventListener('click', () => {
    currentIndex++;
    if(currentIndex >= tourCards.length) currentIndex = 0;
    createCard();
});

btnLeft.addEventListener('click', () => {
    currentIndex--;
    if(currentIndex < 0) currentIndex = tourCards.length - 1;
    createCard();
})



