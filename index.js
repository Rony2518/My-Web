var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
}
var nav = document.querySelector('nav');
nav.addEventListener('click', function () {
    var ul = document.querySelector('nav ul');
    ul.classList.toggle('show');
});
(function () {
    $('.btn').click(function () {
        $(this).toggleClass('active');
        return $('.box').toggleClass('open');
    });

}).call(this);

  
