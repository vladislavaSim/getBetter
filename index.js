const contactBtn = document.querySelector('.contact')
const closingBtn = document.querySelector('.closing')
let modalIsActive = false;
const modalHolder = document.querySelector('#modal-holder')
const modalWindow = document.querySelector('.modal-window')
const $container = document.querySelector('.container')
const $button = document.querySelector('.button')
const $textBox = document.createElement('div');
const taskListRu = [
    'Сходить на выставку',
    'Убрать мусор в лесу, в парке или у реки. Можно позвать друзей на помощь!',
    'Извиниться перед человеком, которого обидел',
    'Покормить бездомное животное',
    'Сделать небольшой подарок тому, кто этого не ожидает',
    'День без плохих слов',
    'Приготовить блюдо, которое никогда раньше не готовил',
    'Убрать в комнате',
    'Сделать комплимент незнакомому человеку',
    'Встретиться с другом',
    'Сделать 10 приседаний',
    'День без жалоб',
    'Сделать то, что давно откладывал на потом',
    'Съесть фрукты или овощной салат',
    'Лечь спать пораньше',
    'Благодарить людей вслух в течение дня',
    'Написать тому, с кем давно не общались',
    'Выучить новое слово',
    'Пойти на прогулку',
    'Пожертвовать на благотворительность',
    'Помочь каждому, кто попросит о помощи сегодня',
    'День без соцсетей',
    'День без переедания',
    'Написать приятные комментарии под фото трём людям',
    'Сделать кормушку для птиц',
    'Проветрить комнату',
    'Позвонить близкому человеку',
    'Удалить ненужные фото, видео и скриншоты',
    'Прочитать 3 страницы любой книги',
    'Избавиться от вещи, связанной с плохими воспоминаниями'
];

const taskListEn = [
    'Go to the exhibition',
    'Pick up all the rubbish in a forest, park or riverside. Call your friends for help!',
    'Apologize to the person you offended',
    'Feed a stray animal',
    'Make a small gift to someone who doesn\'t expect it',
    'No bad words day',
    'Make a dish you\'ve never cooked before',
    'Clean up the room',
    'Compliment a stranger',
    'Meet a friend',
    'Do 10 squats',
    'No Complaints Day',
    'Do what you put off for a long time',
    'Eat fruit or vegetable salad',
    'Go to bed earlier',
    'Thank people out loud throughout the day',
    'Write someone who you haven\'t talked for a long time',
    'Learn a new word',
    'Go for a walk',
    'Donate to charity',
    'Help everyone who asks for help today',
    'No social networks day',
    'No overeating day',
    'Write nice comments under the photo to three people',
    'Make a feeder for birds',
    'Ventilate the room',
    'Call a close person',
    'Delete needless photos, videos and screenshots',
    'Read 3 pages of any book',
    'Get rid of the thing associated with bad memories'
];

$textBox.classList.add('text')
let activeLangRus = true;
$button.innerHTML = 'стать лучше';
const array = [taskListRu, taskListEn];

const $langSwitchBtn = document.querySelector('.language');
$langSwitchBtn.innerHTML = 'ENG'
switchLanguage(array[0])

function switchLanguage(arr) {
    $textBox.innerText = ''
        $button.addEventListener('click', function () {
            let index =  Math.floor(Math.random() * arr.length);
            $textBox.innerText = arr[index]
            $container.appendChild($textBox)
        })
}


$langSwitchBtn.addEventListener('click', function (){
    if(activeLangRus) {
        $button.innerHTML = 'get better'
        $langSwitchBtn.innerHTML = 'RUS'
    switchLanguage(array[1])
        return activeLangRus = false
    }
    if(!activeLangRus){
        $button.innerHTML = 'стать лучше';
        $langSwitchBtn.innerHTML = 'ENG'
    switchLanguage(array[0])
        return activeLangRus = true
    }
})


contactBtn.addEventListener('click', function () {
    if(!modalIsActive) {
        modalWindow.style.display = 'block'
        modalHolder.classList.add('modal-holder')
        $button.style.display = 'none'
        document.querySelector('.button-holder-header').style.display = 'none'
    }
})
closingBtn.addEventListener('click', function () {
    modalWindow.style.display = 'none'
    modalHolder.classList.remove('modal-holder')
    $button.style.display = 'block'
    document.querySelector('.button-holder-header').style.display = 'flex'
})






