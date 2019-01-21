import { Message } from 'element-ui';

export default class VendaService{
    constructor(resource){
        this._resource = resource('api/v1/venda{/id}');
    }
    todas(){
        return this._resource
            .query()
            .then(res => res.json(),
                   err =>{
                        Message({
                            showClose: true,
                            message: 'Erro ao buscar os itens!',
                            type: 'erro'
                        });
                    }
            );
    }
    buscar(id){
        return  this._resource
                    .get({id})
                    .then(res=> res.json(),
                            erro =>{
                                Message({
                                    showClose: true,
                                    message: 'Vixe o que aconteceu, não consegui encontrar nada, acho que algo deu errado!',
                                    type: 'erro'
                                    });
                                });
    }
}