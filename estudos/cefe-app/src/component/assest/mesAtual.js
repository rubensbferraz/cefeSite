import React from 'react'

const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

const MesAtual = (props) => {
    let mesSystema = new Date().getMonth();
    let mesAtual = meses[mesSystema]
    return(
        <div>
            {mesAtual}
        </div>
    )
}

export  {MesAtual}