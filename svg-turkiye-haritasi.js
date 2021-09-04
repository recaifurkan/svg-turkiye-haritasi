/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

function svgturkiyeharitasi() {
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');


  element.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris') {
        info.innerHTML = [
          '<div>',
          event.target.parentNode.getAttribute('data-iladi'),
          '</div>'
        ].join('');
      }
    }
  );

  element.addEventListener(
    'mousemove',
    function (event) {
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX + 'px';
    }
  );

  element.addEventListener(
    'mouseout',
    function (event) {
      info.innerHTML = '';
    }
  );

  element.addEventListener(
    'click',
    function (event) {
      if (event.target.tagName === 'path') {
        const parent = event.target.parentNode;
        const id = parent.getAttribute('id');

        if (
          id === 'guney-kibris'
        ) {
          return;
        }

        window.location.href = (
          '#'
          + id
          + '-'
          + parent.getAttribute('data-plakakodu')
        );
      }
    }
  );
}


function showNotification(plakakodu, message) {


  const info = document.querySelector('.notification');
  info.style.display = 'block';
  info.innerHTML = message;

  const g = document.querySelector(`g[data-plakakodu='${plakakodu}']`);
  g.classList.add("notified");

  const infoRect = info.getBoundingClientRect();
  const rect = g.getBoundingClientRect();
  let elementLeft, elementTop; //x and y
  const scrollTop = document.documentElement.scrollTop ?
    document.documentElement.scrollTop : document.body.scrollTop;
  const scrollLeft = document.documentElement.scrollLeft ?
    document.documentElement.scrollLeft : document.body.scrollLeft;

  elementTop = rect.top + scrollTop + (rect.height / 2) - (infoRect.height / 2);
  elementLeft = rect.left + scrollLeft + (rect.width / 2) - (infoRect.width / 2);

  console.log(rect);


  info.style.top = elementTop + 'px';
  info.style.left = elementLeft + 'px';

  console.log(info);
  setTimeout(() => {
    g.classList.remove("notified");
    info.style.display = 'none';

  }, 2000)

}
