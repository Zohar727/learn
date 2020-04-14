import _ from 'lodash';
import printMe from './print';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webapck'], ' ');

    var btn = document.createElement('button');
    btn.onclick = printMe;

    element.appendChild(btn);

    // css-loader test
    // element.classList.add('red');

    // file-loader test
    // var img = new Image();
    // img.src = Icon;

    // element.appendChild(img);

    return element;
}

document.body.appendChild(component());