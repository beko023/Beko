 const container = document.querySelector(".container")

const colors = [ 'red', 'lime', 'pink', 'lime', 'yellow', 'aqua', 'blue', 'purple']

for (let i=0; i < 651; i++){
    const div = document.createElement('div')
    div.classList.add('item')

    div.addEventListener('mouseover' , () => {
        let random = Math.floor(Math.random() * 10)
        let randomColor = colors[random]
        div.style.backgroundColor = randomColor
    })

     div.addEventListener('mouseleave', () => {
         setTimeout (()=> {
             div.style.backgroundColor = 'rgb(85,85,85)'
         }, 1000)
     })

     container.append(div)
}
