const shareButon = document.getElementById('share-btn');
const shareMenu = document.getElementById('share-menu')

shareButon.addEventListener("click", function () {
    
    shareButon.classList.toggle('share-btn-active')
    
    const isHidden = shareMenu.classList.contains('hide')
    
    if (isHidden) {
        shareMenu.classList.remove('hide')
        shareMenu.classList.add('appear')
    } else {
        shareMenu.classList.remove('appear')
        shareMenu.classList.add('hide')
    }
    


});
