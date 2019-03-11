import _ from 'lodash';
import './style.css';
import ButtonImage from './button.png';
import Data from './data.xml';

function component(){
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello','icon-gougou','iconfont');

    var image = new Image();
    image.src = ButtonImage;
    element.appendChild(image);

    console.log(Data);

    return element;
}

document.body.appendChild(component());