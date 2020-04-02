import _ from 'lodash';
import './style.css';
import Icon from './logo.png';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webapck'], ' ');

    // css-loader test
    element.classList.add('red');

    // file-loader test
    var img = new Image();
    img.src = Icon;

    element.appendChild(img);

    return element;
}

document.body.appendChild(component());