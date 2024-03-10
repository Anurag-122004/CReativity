/*--------------NAVBAR scroll -----------*/

window.addEventListener(`scroll`, () => {
    document.querySelector(`nav`).classList.toggle(`window-scroll`, window.scrollY > 50);
})

const faqs = document.querySelectorAll(`.faq`);

faqs.forEach(faq => {
    faq.addEventListener(`click`, () => {
        faq.classList.toggle(`open`);

        const icon = faq.querySelector(`.faq__icon i`);

        if (icon && icon.className.includes('fa-plus')) {
            icon.className = 'fa-solid fa-minus';
        } else {
            icon.className = 'fa-regular fa-plus';
        }
    })
})