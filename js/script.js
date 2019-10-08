var linkPopap = document.querySelector('.link-popap');
var popapLogin = document.querySelector('.modal');
var closeLogin = popapLogin.querySelector('.close-popap');
var popapMap = document.querySelector('.map-modal');
var linkMap = document.querySelector('.link-map');
var closeMap = popapMap.querySelector('.close-map');

linkPopap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popapLogin.classList.add('modal-on');
});

closeLogin.addEventListener('click', function (evt) {
    evt.preventDefault();
    popapLogin.classList.remove('modal-on');
});

linkMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popapMap.classList.add('map-modal-on');
});

closeMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    popapMap.classList.remove('map-modal-on');
});