let btnConsultation = document.querySelectorAll('.order');
let btnBuy = document.querySelectorAll('.buy');
let modal = document.querySelector('.modal');
let call = document.querySelector('.modal__callback');
let order = document.querySelector('.modal__order');
let close = document.querySelectorAll('.modal__close');
let getText = document.querySelectorAll('.catalog__name');
let putText = document.querySelector('.modal__order .modal__descr');

function addClass(btn, el, cl) {
    btn.forEach((item, index) => 
        item.addEventListener('click', function(e) {
            e.preventDefault();
            el.classList.remove('modal__cancel');
            modal.classList.remove('modal__cancel');
            modal.classList.add(cl);
            el.classList.add(cl);
            putText.textContent = getText[index].textContent;
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
