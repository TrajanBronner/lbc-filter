const filterListKey = 'lbc-filter-list';

function filterResultList() {

    let deleteList = [];
    const savedList = localStorage.getItem(filterListKey);

    if (!savedList) {
        localStorage.setItem(filterListKey, JSON.stringify([]));
    } else {
        deleteList = JSON.parse(savedList);
    }

    deleteList.forEach(el => document.querySelector(`li a[href*="${el}"]`)?.remove());
}

setTimeout(filterResultList, 0);

(() => {
    const match = window.location.href.match(/^https:\/\/www\.leboncoin\.fr.*\/([0-9]+)\.htm\/$/);

    if (!match) {
        return;
    }

    const itemId = match[1];

    // just place a div at top right
    const butt = document.createElement('button');
    butt.style.position = 'fixed';
    butt.style.top = '0';
    butt.style.right = '0';
    butt.style.zIndex = '10000';
    butt.textContent = 'Delete';

    butt.addEventListener('click', () => {
        const savedList = JSON.parse(localStorage.getItem(filterListKey));
        savedList.push(itemId)
        localStorage.setItem(filterListKey, JSON.stringify(savedList));
    })

    document.body.appendChild(butt);
})();