import Cliente from '../../dominio/cliente/Cliente';

export default class Venda{
    constructor(){
        this.id;
        this.cliente= new Cliente;
        this.status=[];
        this.dataVenda;
        this.itens;
    }
}