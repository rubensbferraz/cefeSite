class DateHelper{
    construtor(){
        throw new Error('Esta classe não pode ser instanciada');
    }

    static dataParaTexto(dataPalestra){
        return `${dataPalestra.getDate()}/${dataPalestra.getMonth()+1}/${dataPalestra.getFullYear()}`;
    };

    static textoParaData(texto){
        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');
        // @ts-ignore
        return new Date(...texto.split('-').map((item, indice)=> item - indice %2));
    }
}

export default DateHelper;