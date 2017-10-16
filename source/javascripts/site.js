function shrinkHeader() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            nav = document.getElementsByClassName('nav')[0];
            logo = document.getElementsByClassName('logo')[0];
            if (distanceY < 15) {
                var navPaddingOffsetCalc = 30 - distanceY;
            }
            else {
                var navPaddingOffsetCalc = 15;
            }
            if (distanceY < 138) {
                var navOffset = 225 - distanceY;
                nav.setAttribute('style', 'height:' +
                     navOffset + 'px; padding:' +
                     navPaddingOffsetCalc + 'px 30px;');
            }
            else {
                nav.setAttribute('style',
                    'height: 87px; padding: 15px 30px;');
            }
            if (distanceY < 103) {
                var logoOffset = 160 - distanceY;
                logo.setAttribute('style', 'height:' +
                     logoOffset + 'px;');
            }
            else {
                logo.setAttribute('style', 'height: 57px;');
            }

    });
}
window.onload = shrinkHeader();


// for every 10 pixels that i scroll (distanceY), make the paddingoffset 1px,
// as long as the distance i scroll is under 150px