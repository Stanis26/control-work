// function Test (clazz, text) {
//     document.getElementsByClassName(clazz)[0].innerText = text;
// }

// Test('block4', 'Бешляга');
// Test('block5', 'Станислав');
// Test('block6', 'Сергеевич');
// // Test('block7', 'муж.');
// // Test('block8', '26.10.2004');

// // document.getElementsByClassName('block4')[0].innerText = 'Станислав';

function change (clazz, text) {
    document.querySelector(clazz).innerText = text;/* - функция которая вставляет нужный нам текст к нужному тегу */
}                                                   /* - переменные clazz - класс text - нужный мне текст */

const buttonEnglish = document.querySelector('#english'); /*  - опбращаюсь к кнопке через id и даем ей название */
const buttonRussia = document.querySelector('#russia');
const buttonСlear = document.querySelector('#clear');

const surname = document.querySelector('.block4'),
      Name = document.querySelector('.block5'),
      fatherName = document.querySelector('.block6'),
      pol = document.querySelector('.block7'),
      date = document.querySelector('.block8'),
      place = document.querySelector('.block9');


buttonEnglish.addEventListener('click', () => { /* - навешивай обработчик событий(клик) на кнопку */
    change('.block4', 'Beshlyaga'); /* - запускаем нашу функцию */
    change('.block5', 'Stanislav');
    change('.block6', 'Sergeevich');
    change('.block7', 'male');
    change('.block8', '26.10.2004');
    change('.block9', 'Republick of Moldova c.Tiraspol');
    surname.classList.add('apear');
    Name.classList.add('apear');
    fatherName.classList.add('apear');
    pol.classList.add('apear');
    date.classList.add('apear');
    place.classList.add('show');
    buttonEnglish.classList.add('button-active');
    buttonСlear.classList.remove('button-active');
    buttonRussia.classList.remove('button-active');
    setTimeout(
        "surname.classList.remove('apear'); Name.classList.remove('apear'); fatherName.classList.remove('apear'); pol.classList.remove('apear'); date.classList.remove('apear'); place.classList.remove('show'); "
        , 500);
});

buttonRussia.addEventListener('click', () => {
    change('.block4', 'Бешляга');
    change('.block5', "Cтанислав");
    change('.block6', 'Сергеевич');
    change('.block7', 'муж.');
    change('.block8', '26.10.2004');
    change('.block9', 'Република Молдовы г.Тирасполь');
    surname.classList.add('apear');
    Name.classList.add('apear');
    fatherName.classList.add('apear');
    pol.classList.add('apear');
    date.classList.add('apear');
    place.classList.add('show');
    buttonRussia.classList.add('button-active');
    buttonСlear.classList.remove('button-active');
    buttonEnglish.classList.remove('button-active');
    setTimeout(
        "surname.classList.remove('apear'); Name.classList.remove('apear'); fatherName.classList.remove('apear'); pol.classList.remove('apear'); date.classList.remove('apear'); place.classList.remove('show'); "
        , 500);
    
});


buttonСlear.addEventListener('click', () => {
    change('.block4', 'Фамилия');
    change('.block5', "Имя");
    change('.block6', 'Отчество');
    change('.block7', 'пол');
    change('.block8', 'xx.xx.xxxx');
    change('.block9', 'место рождения');
    surname.classList.add('apear');
    Name.classList.add('apear');
    fatherName.classList.add('apear');
    pol.classList.add('apear');
    date.classList.add('apear');
    place.classList.add('show');
    buttonСlear.classList.add('button-active');
    buttonEnglish.classList.remove('button-active');
    buttonRussia.classList.remove('button-active');
    setTimeout(
        "surname.classList.remove('apear'); Name.classList.remove('apear'); fatherName.classList.remove('apear'); pol.classList.remove('apear'); date.classList.remove('apear'); place.classList.remove('show'); "
        , 500);
});



