function goHome() {
    (document.getElementsByClassName('btn-home')[0]).addEventListener('click', function() {
        window.location.href = '/';
    });
}
goHome();
