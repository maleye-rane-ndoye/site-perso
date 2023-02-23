let search = document.querySelector("#lookup");
search.style.display = "none";

function toggle() {
  if (search.style.display === "none") {
    search.style.display = "block";
  } else {
    search.style.display = "none";
  }
}

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nave").style.backgroundColor = "#141414";
  } else {
    document.getElementById("nave").style.backgroundColor = "transparent" ;
  }
}

function displayuser(event) {
  event.preventDefault();


  let profil = document.getElementsByClassName("profil");
  document.getElementById("user").innerHTML = profil;
}

function openHome(userId) {
  localStorage.setItem('userId', userId);
  location.href = "Accueil.html";
}


window.onload = function() {

  let userId = localStorage.getItem('userId');
  let userEl = document.getElementById('user');
  let userNameEl = userEl.querySelector('.username');

  userNameEl.textContent = userId;
  userEl.classList.add(userId);
  
  var vid = document.getElementById("myVideo");
  vid.autoplay = true;
  vid.load();


}

function mysearch() {
  var input, filter, section, a, h3;
  input = document.getElementById("lookup");
  filter = input.value.toUpperCase();
  section = document.getElementById("myMenu");
  a = section.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    h3 = a[i].getElementsByTagName("h3")[0];
    if (h3.innerHTML.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}