<template>
    <div>
        Form Venda!! {{idVenda}}
    </div>
</template>
<script>
import VendaService from '../../dominio/venda/VendaService';

export default {
    props:['idVenda'],
    data(){
        return{
            venda:''
        }
    },
    watch:{
        idVenda: function (val) {
          this.buscarVenda(val);
        }
    },
    mounted(){
      //this.buscarVenda(this.idVenda);
    },
    methods:{
        buscarVenda(id){
            console.log("Buscar venda!");
            console.log(id);
            if(id != null){
                this._vendaService
                    .buscar(this.idVenda)
                    .then(res=>{
                        this.venda = res;
                        console.log(this.venda);
                    });
            }
            
        }
    },
    created(){
        console.log(this.idVenda);
        this._vendaService = new VendaService(this.$resource);
        this.buscarVenda(this.idVenda);
    }
}
</script>
<style scoped>

</style>
