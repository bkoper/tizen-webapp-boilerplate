import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import './style.scss';

ReactDom.render(<App />, document.querySelector("#main"));

window.onload = function() {
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });
};
