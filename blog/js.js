// FILTER JS
$(document).ready(function() {
    $('.filter-item').click(function() {
        const value = $(this).attr('data-filter')
        if (value == 'all') {
            $('.post-box').show('1000')
        } else {
            $('.post-box')
                .not('.' + value)
                .hide("1000");
            $('.post-box')
                .filter('.' + value)
                .show("1000");
        }
    });
    // add acitve btn
    $('.filter-item').click(function() {
        $(this).addclass("active-filter").siblings().removeClass("active-filter");
    });
});
//header bg chg on sll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);

});