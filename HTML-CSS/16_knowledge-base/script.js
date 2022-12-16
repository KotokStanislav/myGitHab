/* selct */
const element = document.querySelector('.selectCostom');
const choices = new Choices(element, {
  searchEnabled: false,
	position: 'bottom',
  placeholder: true
});

/* map */
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("myMap1", {
        center: [48.872185, 2.354224],
        zoom: 18
    });

    var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/mapimg.svg',
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

/* scrol */
document.querySelectorAll(".costomScroll").forEach(dropdown => {
  new SimpleBar(dropdown, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 90,
  scrollbarColor: `#CCB26E`,
});
})

/* Form */
var selector = document.querySelector('input[type="tel"]');
var im = new Inputmask("+380 (99) - 99 - 99 - 999");
im.mask(selector);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      msxLength:30
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 9
      }
    },
    mail: {
      required: true,
      email: true
    }
  },
  messages: {
    name: {
      required: 'Вы не ввели имя',
      minLength: 'В имени не может быть меньше 2 букв',
      msxLength: 'Слижком много букв для имени'
    },
    tel: {
      required: 'Вы не ввели телефон',
      function: 'Вы не верно ввели телефон'
    },
    mail: {
      required: 'Вы не ввели e-mail',
      email: 'Вы не правильно ввели e-mail'
    }
  },
  colorWrong: '#FF5C00'
});

/* tolltip */
tippy('#myTolltip', {
  content: 'Глава 2, страница 176',
  theme: 'gray',
});

