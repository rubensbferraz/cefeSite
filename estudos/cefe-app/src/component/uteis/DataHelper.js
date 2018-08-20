export default class DataHelper {
    constructor() {
        throw new Error('Esta class não pode ser extanciada');
    }
    static dataParaTexto(dataPalestra) {
        return `${dataPalestra.getDate()}/${(dataPalestra.getMonth() + 1)}/${dataPalestra.getFullYear()}`;
    }
    static textoParaData(texto) { 
        if (!/^\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('Use formato aaaa-mm-dd');
        // @ts-ignore
        return new Date(...texto.split('-').map((item, indece) => item - indece % 2));
    }
}