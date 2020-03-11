/*navbar*/

const homeItems = document.querySelectorAll('.home-item-wrapper');

  console.log(document.getElementsByClassName("home-item-wrapper").length);

  homeItems.forEach(homeItem => {
    homeItem.addEventListener('mouseover', () => {
      console.log(homeItem.childNodes[1].classList)
      homeItem.childNodes[1].classList.add('image-darken');
    });

    homeItem.addEventListener('mouseout', () => {
      console.log(homeItem.childNodes[1].classList)
      homeItem.childNodes[1].classList.remove('image-darken');
    });
  });


/*audio links*/

function playItHere(e, link) {
  var audio = document.createElement("audio");
  var src = document.createElement("source");
  src.src = link.href;
  audio.appendChild(src);
  audio.play();
  e.preventDefault();
}



