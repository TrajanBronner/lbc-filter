function deleteAdsFromList() {
    try {
        const liList = document.querySelectorAll('.bgMain ul')[0].querySelectorAll('li');
        Array.from(liList)
            .filter(el => !el.hasAttribute('itemscope'))
            .forEach(el => el.remove());
    } catch (e) {
        console.log(e)
    }
}

function deleteIframes() {
    try {
        Array.from(document.querySelectorAll('iframe')).forEach(el => el.remove())
    } catch (e) {
        console.log(e)
    }
}

function deleteGoogleAds() {
    try {
        Array.from(document.querySelectorAll('.googleafs')).forEach(el => el.remove())
    } catch (e) {
        console.log(e)
    }
}

deleteAdsFromList();
setTimeout(deleteIframes, 1000);
deleteGoogleAds();
