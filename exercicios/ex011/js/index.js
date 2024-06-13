const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColor = estilosBody.backgroundColor;

console.log(backgroundColor)

for (c of ps) {
    console.log(c)
}