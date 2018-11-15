const domTagElements = {};
let domNodeElements = 0;
const domClassElements = {};

function addToTags (elem) {
    if(typeof domTagElements[elem.tagName] === 'undefined') {
        domTagElements[elem.tagName] = 1;
    }else{
        domTagElements[elem.tagName] = domTagElements[elem.tagName] + 1;
    }
}
function addToNodes (elem) {
    domNodeElements++;
}
function addToClasses (elem, classVal) {
    if(typeof domClassElements[elem.classList[classVal]] === 'undefined') {
        domClassElements[elem.classList[classVal]] = 1;
    }else{
        domClassElements[elem.classList[classVal]] = domClassElements[elem.classList[classVal]] + 1;
    }
}
function scanDOM (elem) {
    if (elem.hasChildNodes())  {
        for(let i = 0; i < elem.childNodes.length; i++) {
            let child = elem.childNodes[i];
            if (child.nodeType === child.ELEMENT_NODE) {
                addToTags(child);
                if(child.className){
                    for (let i = 0; i < child.classList.length; i++){
                        addToClasses(child, i);
                    }
                }
                scanDOM(child);
            } else if (child.nodeType === child.TEXT_NODE){
                addToNodes(child);
            }
        }
    } else {
        addToTags(elem);

        Object.keys(domTagElements).forEach((val) => {
            console.log(`Тэгов ${val}: ${domTagElements[val]}`);
        });
        console.log('Текстовых узлов: ' + domNodeElements);
        Object.keys(domClassElements).forEach((val) => {
            console.log(`Элементов с классом ${val}: ${domClassElements[val]}`);
        })
    }
}
let body = document.querySelector('body');
scanDOM(body);