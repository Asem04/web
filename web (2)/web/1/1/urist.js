let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Александра Никитина',
        image: '1.1.jpg',
        price: 'Стаж работы: 2 года. Я юрист с узкой специализацией в семейном и трудовом праве. Мой опыт включает в себя успешное представление интересов клиентов в суде. В консультациях помогаю молодым юристам разобраться в сложных вопросах семейного законодательства и трудовых отношений.'
    },
    {
        id: 2,
        name: 'Дмитрий Кузнецов',
        image: '1.2.jpg',
        price: 'Стаж работы: 3 года. Специализируюсь в корпоративном и налоговом праве. Мой опыт включает в себя консультирование предприятий и представление их интересов в суде. В консультациях обращаю внимание на актуальные изменения в законодательстве и поддерживаю студентов в освоении юридической практики.'
    },
    {
        id: 3,
        name: 'Екатерина Лебедева',
        image: '1.3.jpg',
        price: 'Стаж работы: 2 года. Моя специализация – гражданское право и право недвижимости. Занимаюсь юридическим сопровождением сделок с недвижимостью и разрешением споров. В консультациях делюсь опытом работы с клиентами и рассказываю о практических аспектах гражданского права.'
    },
    {
        id: 4,
        name: 'Виктория Смирнова',
        image: '1.4.jpg',
        price: 'Стаж работы: 3 года. Специалист по корпоративному праву и интеллектуальной собственности. Мой опыт включает в себя разработку договоров, проведение дью-дилидженса и регистрацию прав на объекты интеллектуальной собственности. В консультациях стараюсь передать знания по эффективной защите прав клиентов.'
    },
    {
        id: 5,
        name: 'Анастасия Чернова',
        image: '1.5.jpg',
        price: 'Стаж работы: 2 года. Моя специализация – административное и арбитражное право. Занимаюсь представлением интересов клиентов в арбитражных судах и вопросами государственного регулирования. В консультациях рассказываю о практическом опыте ведения дел в арбитражных судах.z'
    },
    {
        id: 6,
        name: 'Максим Иванов',
        image: '1.6.jpg',
        price: 'Стаж работы: 3 года. Юрист по уголовному праву с опытом работы в сфере защиты прав обвиняемых. Мой опыт включает в себя успешное проведение защиты в суде и ведение уголовных дел. В консультациях помогаю студентам и молодым юристам разобраться в сложных вопросах уголовного законодательства.'
    },
   
];
let listCards  = [];

function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Записаться</button>`;
        list.appendChild(newDiv);
    })
}

initApp();
function addToCard(key) {
   
    
    window.location.href = 'form.html';
}
