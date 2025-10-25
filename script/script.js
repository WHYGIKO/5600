const dateNow = new Date();
const opts = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
document.getElementById("today").textContent = dateNow.toLocaleDateString(
  "uz-Cyrl-UZ",
  opts
);

const qochish = document.getElementById('qochish'),
xa =document.querySelector('.yes'),
headline = document.querySelector('.headline'),
refresh = document.querySelector('.brand')
console.log(xa);

const jokes = [
  "етади, агар сен иқтисод дарсини эмас, реал ҳаётни тест қилиб кўрмоқчи бўлсанг.",
  "етади, лекин сенинг харажат режангда 'йемаслик' асосий стратегия бўлса.",
  "етади, агар сен ўзингни инфляция билан шахсан таниш деб ҳисобласанг.",
  "етади, лекин сен учун ‘қимматчилик’ сўзи аллақачон ҳиссиёт эмас, муҳит бўлса.",
  "етади, агар сен дам олишни орзу эмас, хатога ўхшатиб қабул қилсанг.",
  "етади, лекин сен овқатни жисмонан эмас, визуал контент орқали қабул қилсанг.",
  "етади, агар сен ‘minimalism’ сўзини мажбурий ҳолат деб билиб қолган бўлсанг.",
  "етади, лекин сен учун ‘омад’ сўзи endi valyuta эмас, хазил бўлса.",
  "етади, агар сен Wi-Fi орқали витамин D қабул қилсанг.",
  "етади, лекин сен сувни литрда эмас, пиксельда ҳисобласанг.",
  "етади, агар сен бозорга кириб, фақат нархни кўриб тоқат тўпласанг.",
  "етади, лекин сен нархни эшитиб, чуқур руҳий ривожланиш босқичига ўтсанг.",
  "етади, агар сен “тўйиш”ни метафора деб тушунсанг.",
  "етади, лекин сен дунёқарашингни ҳам инфляцияга мослаб кенгайтирсанг.",
  "етади, агар сен шундай кунда ҳам ‘барчаси яхши’ деб ишонсанг.",
  "етади, лекин сен 5600 сўмлик кунни motivational контент сифатида қабул қилсанг.",
  "етади, агар сен қурилиш материалларидан эмас, сабрдан уй қурсанг.",
  "етади, лекин сен яшашни survival challenge деб қабул қилсанг.",
  "етади, агар сен 'яна ҳам яхшироқ кунлар' ни cached версиядан изласанг.",
  "етади, лекин сен реал ҳаётни beta-тест деб қабул қилсанг."
];



qochish.addEventListener('mouseenter', ()=> {
    console.log(qochish);
    
    const maxX = window.innerWidth - qochish.offsetWidth - 20,
    maxY = window.innerHeight - qochish.offsetHeight - 20,
    x = Math.random() * maxX,
    y = Math.random() * maxY;
    qochish.style.position = "absolute";
    qochish.style.left = `${x}px`;
    qochish.style.top = `${y}px`;

})
xa.addEventListener('click', () => {
    const i = Math.floor(Math.random()* jokes.length)
  headline.innerHTML = jokes[i]
  xa.innerHTML= 'жавоб ёкмадими? унда яна бос...'
  qochish.style.opacity = 0
  qochish.style.position = 'absolute'
  refresh.innerHTML = 'Хохласанг бошидан бошлаймиз'
  refresh.style.cursor =  'pointer';

});
refresh.addEventListener('click', () => {
    location.reload()
})