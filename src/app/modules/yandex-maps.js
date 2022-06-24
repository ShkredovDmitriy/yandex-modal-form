let script = document.createElement('script');
script.setAttribute(
  'src',
  'https://api-maps.yandex.ru/2.1?apikey=fae801ae-b568-4b8e-9d9c-71070501d1a5&load=package.map&lang=ru_RU'
);
script.addEventListener('load', () => {
  ymaps.ready(function () {
    var myMap = new ymaps.Map(
        'ymapsContainer',
        {
          center: [55.789396, 37.536832],
          zoom: 14,
        },
        {
          searchControlProvider: 'yandex#search',
        }
      ),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Это красивая метка',
        },
        {
          iconLayout: 'default#image',
          iconImageHref: 'images/map__dot-gradient.svg',
          iconImageSize: [30, 42],
          iconImageOffset: [-22, -42],
        }
      );

    myMap.geoObjects.add(myPlacemark);

    myMap.balloon.open(
      [55.789396, 37.536832],
      '<div class="map__address-block"><p><b>Адрес:</b> Ходынский бульвар 2, офис № Б-42</p><p><b>Телефон:</b> +7 968 945 91 41</p><p><b>Почта:</b> info@digital-easy.ru</p></div>',
      {
        closeButton: false,
      }
    );
  });
});

// OBSERVER
const target = document.querySelector('.map');
function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      document.body.appendChild(script);
    }
  });
}
const observer = new IntersectionObserver(handleIntersection);
observer.observe(target);
