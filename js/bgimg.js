const imgs = ['00.png','01.png','02.png']

const todayImage = imgs[Math.floor(Math.random() * imgs.length)]
const bgElements = document.createElement("img");
bgElements.src = "img/" + todayImage
const bodyElements = document.body
bodyElements.appendChild(bgElements)