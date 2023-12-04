const boxes = document.querySelectorAll('.box');

function showbox() {
  const trigerBottom = window.innerHeight;
  console.log(window.innerHeight);

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    console.log(boxTop);

    if (boxTop < trigerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
// showbox();

window.addEventListener('scroll', showbox);
