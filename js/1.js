const items = document.querySelectorAll('.content--item');

function animateItems(index) {
  // Если индекс равен длине массива элементов, то прерываем анимацию
  if (index === items.length) {
    return;
  }

  // Получаем текущий элемент и добавляем ему класс "animated"
  const item = items[index];
  item.classList.add('animated');

  // Ждем 500 миллисекунд и анимируем следующий элемент
  setTimeout(() => {
    animateItems(index + 1);
  }, 1200);
}

animateItems(0);
