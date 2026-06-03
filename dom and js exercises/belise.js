document.getElementById('box').addEventListener('click', function () {
  console.log('div clicked');
});

document.getElementById('btn').addEventListener('click', function () {
  console.log('button clicked');
});

container.addEventListener('click', function (event) {
  if (event.target.matches('button')) {
    console.log('A button was clicked');
  }
});

