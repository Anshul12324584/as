const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0]);
  var n = items.length;
  e.target.matches('.prev') && slider.append(items[n-1]);
}
document.addEventListener('click',activate,false);