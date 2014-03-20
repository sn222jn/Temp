var TIME_PER_PAGE = 2000;
window.onload = function () {
    var pages = document.querySelectorAll('.page'),
            numPages = pages ? pages.length : 0;
    i = -1;

    iLoopcount = -1;

    function nextPage() {
        if (iLoopcount === 2) {
            iLoopcount = -1;
            i = -1;
            pages[2].classList.remove('currentPage');
        }

        if (i >= 0) {
            pages[i].classList.remove('currentPage');
        }
        i++;
        iLoopcount++;

        pages[i].classList.add('currentPage');

        setTimeout(nextPage, TIME_PER_PAGE);
    }

    nextPage();
};

