const width = document.querySelector('#rect-width');
const height = document.querySelector('#rect-height');
const tr = document.querySelector('#tr');
const tl = document.querySelector('#tl');
const br = document.querySelector('#br');
const bl  = document.querySelector('#bl');
const rect = document.querySelector('.block');

const properties = [width, height, tr, tl, br, bl];

function changeRect() {
    // updating rectangular
    rect.style.width = width.value + 'px';
    rect.style.height = height.value + 'px';
    rect.style.borderRadius = tr.value + '% ' + tl.value + '% ' + bl.value + '% ' + br.value + '%';
    // updating labels
    let widthLabel = document.querySelector('label[for=rect-width]');
    widthLabel.textContent = 'Width: ' + width.value + 'px';
    let heightLabel = document.querySelector('label[for=rect-height]');
    heightLabel.textContent = 'Height: ' + height.value + 'px';
    let trLabel = document.querySelector('label[for=tr]');
    trLabel.textContent = 'Top-right radius:' + tr.value + '%';
    let tlLabel = document.querySelector('label[for=tl]');
    tlLabel.textContent = 'Top-left radius:' + tl.value + '%';
    let brLabel = document.querySelector('label[for=br]');
    brLabel.textContent = 'Bottom-right radius:' + br.value + '%';
    let blLabel = document.querySelector('label[for=bl]');
    blLabel.textContent = 'Bottom-left radius:' + bl.value + '%';
}

for (let property of properties){
    property.addEventListener('input', changeRect);
    if (property.id === 'rect-width' || property.id === 'rect-height') property.value = property.max;
    else property.value = property.min;
}