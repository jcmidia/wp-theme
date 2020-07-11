const twitter = (e) => {
    e.preventDefault();
    
    const target = e.target.nodeName === 'A' ? e.target : e.target.closest('a');
    const text = `${target.dataset.text} ${target.href}`;
    var url = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text)
    share(url);
}
const facebook = (e) => {
    e.preventDefault();
    
    const target = e.target.nodeName === 'A' ? e.target : e.target.closest('a');
    const link = target.href;
    var url = 'https://www.facebook.com/sharer/sharer.php?u=' + link
    share(url);
}

const share = (url) => {
    var winWidth = 700
    var winHeight = 500
    var winTop = (screen.height / 2) - (winHeight / 2)
    var winLeft = (screen.width / 2) - (winWidth / 2)
    
    window.open(url, 'Sharing', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight)
}

export const init = () => {
    const facebookBtns = document.querySelectorAll('a.share-facebook');
    const twitterBtns = document.querySelectorAll('a.share-twitter');

    facebookBtns.forEach($btn => $btn.addEventListener('click', facebook));
    twitterBtns.forEach($btn => $btn.addEventListener('click', twitter));
};
