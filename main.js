var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 40;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.3)';
    perspective = 'perspective(' + 4000 + 'px) rotateY( ' + x + 'deg)';

    $('.background').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });


    $('.container').css({
        '-webit-transform': perspective,
        '-moz-transform': perspective,
        'transform': perspective
    });


    window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function (e) {

    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;

});

moveBackground();


//Smooth scrolling for anchors
$('a').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top
            },
            800,
            function () {
                window.location.hash = hash;
            }
        );
    }
});