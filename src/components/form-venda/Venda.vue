<template>
    <div>
        Form Venda!! {{idVenda}}
        <el-form ref="form" :model="venda" label-width="120px">
            <el-form-item label="Nome Cliente :">
              <el-input v-model="venda.cliente.nome"></el-input>
            </el-form-item>
            <el-form-item label="Data :">
             <el-input v-model="venda.dataVenda.split('T')[0]" label="Data Venda"></el-input>
            </el-form-item>
            <el-form-item>
                Tabela de Itens 
            </el-form-item>
            <el-form-item>
                Tabela de Status
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import VendaService from '../../dominio/venda/VendaService';
import Venda from '../../dominio/venda/Venda';

export default {
    props:['idVenda'],
    data(){
        return{
            venda:new Venda()
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
            //console.log("Buscar venda!");
            //console.log(id);
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
