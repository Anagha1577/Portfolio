let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let currentSection = sections[0];
sections.forEach(sec => {
    let offset = sec.offsetTop - 100;
    if (window.scrollY >= offset) {
        currentSection = sec;
    }
});
let currentLink = document.querySelector('header nav a[href*=' + currentSection.getAttribute('id') + ']');
if (currentLink) {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    currentLink.classList.add('active');
}

window.addEventListener('scroll', () => {
  
});


window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);
}


function openTab(event, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}