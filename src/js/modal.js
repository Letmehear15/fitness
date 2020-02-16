let btnConsultation = document.querySelectorAll('.order');
let btnBuy = document.querySelectorAll('.buy');
let modal = document.querySelector('.modal');
let call = document.querySelector('.modal__callback');
let order = document.querySelector('.modal__order');
let close = document.querySelectorAll('.modal__close');


function addClass(btn, el, cl) {
    btn.forEach(item => 
        item.addEventListener('click', function(e) {
            e.preventDefault();
            el.classList.remove('modal__cancel');
            modal.classList.remove('modal__cancel');
            modal.classList.add(cl);
            el.classList.add(cl);
            removeClass(close, el, cl);
        })    
    )
}

function removeClass(btn, el, cl) {
    btn.forEach(item => 
        item.addEventListener('click', function(e) {
            el.classList.remove(cl);
            el.classList.add('modal__cancel')
            modal.classList.remove(cl);
            modal.classList.add('modal__cancel');
        })
    )
}

addClass(btnConsultation, call, 'modal__active');
addClass(btnBuy, order, 'modal__active');
