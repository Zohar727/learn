import _ from 'lodash';
import './style.css';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webapck'], ' ');
    element.classList.add('red');
    return element;
}

document.body.appendChild(component());