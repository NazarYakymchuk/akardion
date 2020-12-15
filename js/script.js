'use strict'

const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', event => {

        // Якщо потрібно, щоб відкривалася тільки одна вкладка
        const currentyActiveAccordionItemHeader = document.querySelector('.accordion-item-header.active');
        if (currentyActiveAccordionItemHeader && currentyActiveAccordionItemHeader!==accordionItemHeader) {
            currentyActiveAccordionItemHeader.classList.toggle('active');
            currentyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});