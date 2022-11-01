
/*
==============================================
==============================================
*/

/* ====== start scroll to top btn ====== */

let btnTop = document.getElementById("go-to-top");

window.addEventListener("scroll", () => {
    btnTop.classList.toggle("active", window.scrollY >= 100)
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

/* end scroll to top */

/*
==============================================
==============================================
*/

/* === start footer dateYear === */


window.addEventListener("load", ()=> {
    let dateYear = document.querySelector(".dateYear");
    let newDate = new Date();
    dateYear.innerHTML = newDate.getFullYear();
});



/* === end footer dateYear === */

/*
==============================================
==============================================
*/


/*global $ */

$(function () {
    'use strict';
    $('.info-list li').click(function () {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info-content div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });
});
