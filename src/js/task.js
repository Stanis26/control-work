const x = document.getElementById('1'),
      y = document.getElementById('2'),
      z = document.getElementById('3'),
      text = document.querySelector('.text'),
      btn = document.getElementsByClassName('button')[0];

function check() {
    const a = +x.value, 
          b = +y.value,
          c = +z.value,
          triangle = ((a + b > c) && /* (и) */ ( a + c > b) && /* (и) */( c + b > a)),
          pifagor = ((a**2 + b**2 === c**2) || /* (или) */ ( a**2 + c**2 === b**2) || /* (или) */ ( c**2 + b**2 === a**2));


    if (triangle && pifagor) {
        text.innerText = 'Это треугольник и он прямоугольный!';
    } else if (triangle && !pifagor){
        text.innerText = 'Это треугольник , но не прямоугольный!';
    } else {
        text.innerText = 'Это вообще неизвестное чудо творения!';
    }
}

btn.addEventListener('click', check);

