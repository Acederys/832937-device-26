var linkPopap = document.querySelector('.link-popap');
var popupLogin = document.querySelector('.modal');
var closeLogin = popupLogin.querySelector('.close-popap');
var popupMap = document.querySelector('.map-modal');
var linkMap = document.querySelector('.link-map');
var closeMap = popupMap.querySelector('.close-map');

var form = popupLogin.querySelector('.modal-form');
var inputName = popupLogin.querySelector('.input-name');
var email = popupLogin.querySelector('.input-email');

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("inputName");
} catch (err) {
  isStorageSupport = false;
}

linkPopap.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupLogin.classList.add('modal-on');
  if (storage) {
    inputName.value = storage;
    email.focus();
    email.classList.add('modal-input-required');
  } else {
    inputName.focus();
    inputName.classList.add('modal-input-required');
  }
});

closeLogin.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupLogin.classList.remove('modal-on');
});


linkMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.add('map-modal-on');
});

closeMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.remove('map-modal-on');
});

form.addEventListener("submit", function (evt) {
  if (!inputName.value || !email.value) {
    evt.preventDefault();
    popupLogin.classList.remove("modal-error");
    popupLogin.offsetWidth = popupLogin.offsetWidth;
    popupLogin.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("inputName", inputName.value);
    }
  }
});
