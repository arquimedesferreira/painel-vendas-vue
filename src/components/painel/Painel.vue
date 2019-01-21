<template>
    <div>
        <template>
          <el-table
            ref="singleTable"
            :data="tabelaVendas"
            highlight-current-row
            @current-change="handleCurrentChange"
            style="width: 100%">
            <el-table-column
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              property="cliente.nome"
              label="Nome"
              >
            </el-table-column>
            <el-table-column
              prop="nome"
              label="Status"
              align="center"
              :filters="statusItensFilter"
              :filter-method="filterTag">
              <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.status.filter(s=>s.ativo===true)[0].nome }}</span>
              </template>
            </el-table-column>
            <el-table-column
              property="address"
              label="Editar">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  :type="definirCorDoBotao(scope.row.status.filter(s=>s.ativo===true)[0].nome)"
                  @click="editarVenda(scope.$index, scope.row)">Edit</el-button>
              </template>        
            </el-table-column>
          </el-table>
        </template>
        <template>
          <el-dialog 
            title="Venda" 
            width="90%"
            :visible.sync="mostrarForm"
            :before-close="antesDeFechar">
            <form-venda-c :idVenda='idVenda'> </form-venda-c>
          </el-dialog>
        </template>
    </div>
</template>
<script>

import Venda from '../../dominio/venda/Venda';
import VendaService from '../../dominio/venda/VendaService';
import FormVenda from '../form-venda/Venda.vue';
export default {
  components:{
    'form-venda-c':FormVenda
  },
  data(){
    return{
        mostrarForm:false,
        idVenda:'',
        statusItensFilter:[
          {text:"No Balcão", value:"No Balcão"},
          {text:"Separando Material", value:"Separando Material"},
          {text:"ParaPagamento", value:"ParaPagamento"},
          {text:"Finalizado", value:"Finalizado"},
          {text:"Cancelado", value:"Cancelado"}
        ],
        tabelaVendas:[]
    }
  },
  methods:{
      atualizarVendas(){
        this._vendaService
            .todas()
            .then(
              res=>{
                this.tabelaVendas=res;
              }, err =>{
                console.log("errorororororor!");
              }
            );
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      editarVenda(index, row){
          this.mostrarForm=true;
          //console.log(index);
          this.idVenda = row.id;
          //console.log(row.id);
      },
      definirCorDoBotao (s){
          switch(s) {
              case 'No Balcão':
                return 'warning';
                break;
              case 'Separando Material':
                return 'primary';
                break;
              case 'ParaPagamento':
                return 'success';
                break;
              case 'Finalizado':
                return 'info';
                break;
              case 'Cancelado':
                return 'danger';
                break;
              default:
              return '';
          }
      },
      filterTag(value,row){
          return row.status.filter(s=>s.ativo===true)[0].nome === value;
      },
      antesDeFechar(done){
        this.$confirm('Você tem certeza que quer fechar a Venda sem Gravar ?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  },
  created(){
    this._vendaService = new VendaService(this.$resource);
    this.atualizarVendas();
  }
}
</script>
<style scoped>
</style>