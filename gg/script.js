pageTwo = document.getElementById('About')
navigationBar = document.querySelectorAll('navbar')


pageTwo.addEventListener("scroll", function() {
    navigationBar.style.display = 'flex';
});

