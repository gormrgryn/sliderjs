const imgs = [
    "https://ged-project.de/wp-content/uploads/2019/05/ilya-pavlov-87438-unsplash-e1557383667154.jpg",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6726719ee78dabe78033950d9f3f7145&w=1000&q=80",
    "https://www.digi-talks.dk/wp-content/uploads/2019/03/markus-spiske-221494-unsplash-1000x667.jpg"
]
const dots = document.querySelectorAll('.dot')
const list = new LinkedList()
imgs.forEach((i, index) => {
    list.add(i, dots[index])
})
let i = list.head
let proc = false

const dotChange = (dot) => {
    dots.forEach(i => {
        if (i !== dot) {
            i.classList = 'dot nonactive'
        } else {
            dot.classList = 'dot active'
        }
    })
}

document.querySelector('.arrowleft').addEventListener('click', () => {
    if (!proc) {
        proc = true
        i = i.prev ? i.prev : list.tail
        document.querySelector('.info').style.backgroundImage = `url('${i.element}')`
        dotChange(i.dot)
        setTimeout(() => proc = false, 700);
    }
})
document.querySelector('.arrowright').addEventListener('click', () => {
    if(!proc) {
        proc = true
        i = i.next ? i.next : list.head
        document.querySelector('.info').style.backgroundImage = `url('${i.element}')`
        dotChange(i.dot)
        setTimeout(() => proc = false, 700);
    }
})

const swipe = () => {
    if (!proc) {
        i = i.next ? i.next : list.head
        document.querySelector('.info').style.backgroundImage = `url('${i.element}')`
        dotChange(i.dot)
    }
    setTimeout(swipe, 5000);
}

swipe()
