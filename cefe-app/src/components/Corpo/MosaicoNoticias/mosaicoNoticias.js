import React, { Component } from 'react'
import './../css/mosaicoNoticias.css';
export class MosaicoNoticias extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mosaicoUm: '',
            mosaicoDois: '',
            mosaicoTres: '',
            mosaicoQuatro: ''
        }
    }
    render () {
        return (
            <div>
                <div className="containerMosaicoNoticias">
                    <div className="mosaicoUm">Mosaico Um</div>
                    <div className="mosaicoDois">Mosaico Dois</div>
                    <div className="mosaicoTres">Mosaico Tres</div>
                    <div className="mosaicoQuatro">Mosaico Quatro</div>
                </div>
            </div>
        )
    }
}

export default MosaicoNoticias