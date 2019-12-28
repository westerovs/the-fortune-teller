let out = document.querySelector(`.out`);
let ball = document.querySelector(`.ball`);
// ball.classList.remove(`animation`);

let prediction = [
  `Попробуй ещё...`,
  `Да`,
  `Нет`,
  `Хорошая мысль`,
  `Плохая идея`,
  `Глупый вопрос`,
  `Истина рядом`,
  `Ты на верном пути`,
  `Время..`,
  `Спроси завтра`, 
  `Следуй знакам`,
  `Поищи на земле`,
  `Никто кроме нас`,
  `Слушай своё сердце`, 
  `Скорее да, чем нет`, 
  `Скорее нет, чем да`, 
  `Иди работай`, 
  `Посмотри на верх`, 
  `за пределами того...`, 
  `Эй Полегче!`, 
  `Не трожь меня!`, 
  `Нажми ещё раз`, 
];

document.querySelector(`.refresh`).onclick = () => {
  ball.classList.add(`animation`);
  let r = Math.floor(Math.random() * prediction.length);
  out.innerHTML = prediction[r];
};