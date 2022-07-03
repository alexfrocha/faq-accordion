let items = document.querySelectorAll('.faq-item')
let itemsTexts = document.querySelectorAll('.faq-text')

function removerItemsAtivos() {
    items.forEach(e => e.classList.remove('active'));
    itemsTexts.forEach(e => e.classList.add('none'));
}

function ativarItem() {
    for(let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', (e) => {
            if(items[i].classList.contains('active')) return removerItemsAtivos()
            removerItemsAtivos()
            items[i].classList.add('active');
            itemsTexts[i].classList.remove('none');
        })
    }
}

ativarItem()
