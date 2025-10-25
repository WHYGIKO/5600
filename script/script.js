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
  "Ҳа, албатта. Агар сен вақт машинасида 2005 йилга қайтсан, у ерда бу пул билан ҳатто хот-дог ҳам бор эди.",
      "Ҳа, етади — лекин нафас олишни ҳар икки соатда бир марта қилиб, сувни Wi-Fi орқали ичсанг.",
      "Ҳа, етади. Фақат сен 3 та нарса қилма: ема, ичма ва ҳаракат қилма.",
      "Ҳа, лекин бу 5600 сўм сенга ҳаёт ҳақида жуда чуқур ўйлаш имконини беради. Чунки бошқа иш қолмайди.",
      "Ҳа, агар сен зен буддист бўлсан ва барча моддий нарсалардан воз кечган бўлсан — табриклайман, сен тайёр.",
      "Ҳа, етади. Фақат сенга 24 соатлик сабр, юмор ҳисси ва бир таёқ нон керак бўлади.",
      "Ҳа, лекин сен кунда эмас, йилда яшайдиган режимда бўлсан. Масалан, 1 кун — 1 ой ҳисобланади.",
      "Ҳа, етади. Фақат ‘жисмоний овқатланиш’ни ‘руҳий энергия қабул қилиш’ деб ўзгартиришинг керак.",
      "Ҳа, етади. Фақат сўнгги 5 соатда ўзингни ишонтириб бўлсан — омад.",
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