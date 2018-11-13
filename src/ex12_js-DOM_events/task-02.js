let accItem = document.getElementsByClassName('Item');
document.getElementById('Wrapper').addEventListener('click', toggleItem);
function toggleItem(e) {
    if (e.target && e.target.nodeName === 'H2') {
        let parentItem = e.target.parentNode;
        for (let i = 0; i < accItem.length; i++) {
            accItem[i].className = 'Item close';
        }
        if (parentItem.className === 'Item close') {
            parentItem.className = 'Item open';
        }
    }
}
