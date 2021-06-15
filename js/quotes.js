const quotes = [{
    quote : "자신이 할 수 없다고 말한 것을 누군가가 하는 것을 보는 것 만큼 당혹스러운 일은 없다.",
    author : "샘 유잉"
},{
     quote : "우리는 누군가의 생각을 막을 수는 없지만 시작하게는 할 수 있다.",
     author : "프랭크 더시"
},{
    quote : "좋은 생각과 행동은 결쿄 나쁜 결과를 낳을 수 없다. 나쁜 생각과 행동은 결코 좋은 결과를 낳을 수 없다.",
    author : "제임스 엘런"
},{
    quote : "사람들은 스스로 상상하지 못하는 일은 결코 이루지 못할 것이다.",
    author : "카렌 포드"
},{
    quote : "모든 사람들이 세상을 바꾸겠다고 생각하지만 어느 누구도 자기 자신을 바꿀 생각은 하지 않는다.",
    author : "레오 톨스토이"
},{
    quote : "인생은 우리가 하루종일 생각하는 것으로 이루어져 있다.",
    author : "랄프 월도 에머슨"
},{
    quote : "인간의 행동은 인간의 사고를 가장 잘 보여준다.",
    author : "존 로크"
},{
    quote : "우리는 오늘 우리의 생각이 데려다놓은 자리에 존재한다. 우리는 내일 우리의 생각이 데려다놓을 자리에 존재할 것이다.",
    author : "제임스 앨런"
},{
    quote : "목표를 설정하는 것에서 너무 감동받지 마라. 목표를 실현하는 것에서 감동을 받아라.",
    author : ""
},{
    quote : "우리가 생각을 제대로 변화시킬 때만 다른 것들이 제대로 나타나기 시작한다.",
    author : ""
},{
    quote : "사람들이 꿈을 이루지 못하는 한 가지 이유는 그들이 생각을 바꾸지 않고 결과를 바꾸고 싶어하기 때문이다.",
    author : ""
}]

const quote = document.querySelector("#quotes span:first-child")
const author = document.querySelector("#quotes span:last-child")

const todayQuote = Math.floor(Math.random() * quotes.length)
quote.innerText = quotes[todayQuote]["quote"]
author.innerText = quotes[todayQuote]["author"]