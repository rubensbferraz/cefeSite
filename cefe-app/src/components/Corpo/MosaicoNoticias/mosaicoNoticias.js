import React, { Component } from 'react'
import './../css/mosaicoNoticias.css';
import MosaicoUm from './mosaicoUm';
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
                <div className="containerMosaicoNoticiasUm">
                    <div className="mosaicoUm"><MosaicoUm/></div>
                    <div className="mosaicoDois">Mosaico Dois</div>
                </div>
                <div className="containerMosaicoNoticiasDois">
                    <div className="mosaicoTres">Mosaico Tres</div>
                    <div className="mosaicoQuatro">Mosaico Quatro</div>
                </div>
            </div>
        )
    }
}

export default MosaicoNoticias