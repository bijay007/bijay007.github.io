function goHome() {
    const btnHome = document.getElementsByClassName('btn-home')[0];
    if (btnHome) {
        console.log(btnHome);
        btnHome.addEventListener('click', function() {
            window.location.href = '/';
        });
    }
}
function goToCategory() {
    const btnCategory = document.getElementsByClassName('btn-category')[0];
    if (btnCategory) {
        console.log(btnCategory);
        btnCategory.addEventListener('click', function() {
            window.location.href = '/pages/category';
        });
    }
}
function goToDetails() {
    const btnGoToDetails = document.getElementsByClassName('btn-details')[0];
    const isHistoryPage = window.location.pathname.includes('history');
    if (btnGoToDetails) {
        console.log(btnGoToDetails);
        btnGoToDetails.addEventListener('click', function() {
            if (isHistoryPage) {
                window.location.href = 'discography';
            } else {
                window.location.href = 'history';
            }
        });
    }
}

// Add event-listeners on page load
goHome();
goToCategory();
goToDetails();
