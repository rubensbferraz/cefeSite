import React from 'react';

const txtSemanas = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

const DiaSemana = () => {
    let semanaCorrente = new Date().getDay();
    let semana = txtSemanas[semanaCorrente];
    return (
        <div>{semana}</div>
    );
}

export {DiaSemana}
