import React, { Component } from 'react';
export class FaceBook extends Component {

    faceCEFE (d, s, id){
        let js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.2';
        fjs.parentNode.insertBefore(js, fjs);
    }
    render () {
        return (
            <div>
            <div id="fb-root"></div>
            $.getScript(function (d, s, id) {
                this.faceCEFE()
            }(document, 'script', 'facebook-jssdk'));
            </div>
        )
    }
}

export default FaceBook;