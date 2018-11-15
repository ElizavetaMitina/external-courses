let accItem = document.getElementsByClassName('Item');
document.getElementById('Wrapper').addEventListener('click', toggleItem);
function toggleItem(e) {
    if (e.target && e.target.nodeName === 'H2') {
        let parentItem = e.target.parentNode;
        let open = document.getElementsByClassName('Item open')[0];
        open.classList.remove('open');
        open.classList.add('close');
        if (parentItem.className === 'Item close') {
            parentItem.className = 'Item open';
        }
    }
}
