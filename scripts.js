// import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

function toggleNavbar() {
  var navbarMenu = document.getElementById("navbar-menu");
  navbarMenu.classList.toggle("show-menu");
}

function startAnimation() {
    var imageSources = ["assets/two.png", "assets/one.png"];
    var currentImageIndex = 0;
  
    setInterval(function() {
      currentImageIndex = (currentImageIndex + 1) % imageSources.length;
      document.getElementById("myImage").src = imageSources[currentImageIndex];
    }, 100);
  }
  
  setTimeout(startAnimation, 4000);

window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".main-text").classList.remove("hidden");
  }, 2000); // 2 seconds delay
});

setTimeout(function () {
  document.getElementById("countdown").classList.remove("hidden");
}, 4000);

setTimeout(function () {
  document.getElementById("marquee").classList.remove("hidden-2");
  document.getElementById("marquee").classList.add("show");
}, 7000);

// codepen

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy,
    dayMonth = "05/24/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      //   (document.getElementById("days").innerText = Math.floor(distance / day)),
      (document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();
