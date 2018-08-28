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
                    <div className="mosaicoUm" col-xs={12}>Mosaico Um</div>
                    <div className="mosaicoDois" col-xs={12}>Mosaico Dois</div>
                    <div className="mosaicoTres" col-xs={12}>Mosaico Tres</div>
                    <div className="mosaicoQuatro" col-xs={12}>Mosaico Quatro</div>
                </div>
            </div>
        )
    }
}

export default MosaicoNoticias