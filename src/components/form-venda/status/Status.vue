<template>
    <div>
        <template>
         <el-row :gutter="20">
            <el-col :span="6"> <strong> - </strong></el-col>
            <el-col :span="6">
                <strong>
                    <div> <h3> Status do Pedido </h3> </div>
                </strong>
            </el-col>
            <el-col :span="6">
                <el-button type="success" icon="el-icon-plus" @click="adicionarStatus()" circle></el-button>
            </el-col>
          </el-row>
          <el-table
            ref="singleTable"
            :data="status_v"
            highlight-current-row
            style="width: 100%">
            <el-table-column
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              property="data"
              label="Data"
              >
              <template slot-scope="scope" >
                  <el-tag type="success" >{{scope.row.data.split('T')[1]}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              property="nome"
              label="Nome"
              >
            </el-table-column>
            
            <el-table-column
              property="ativo"
              label="Ação">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  :type="definirCorDoBotao(scope.row)"
                  @click="editarStatus(scope.$index, scope.row)">Editar</el-button>
              </template>        
            </el-table-column>
          </el-table>
          <el-dialog  
            :visible="dialogoStatus"
            title="Adicionar Status"
            append-to-body>
              <el-form>
                  <el-form-item >
                      <el-input placeholder="Nome"></el-input>
                  </el-form-item>
                  <el-form-item >
                      <el-button @click="salvarStatus()">Salvar</el-button>
                  </el-form-item>
              </el-form>
          </el-dialog>
        </template>    
    </div>        
</template>
<script>
export default {
    props:['status_v'],
    data(){
        return{
            status_n:[],
            dialogoStatus:false,
            novoStatus: ''
        }
    },
    methods:{
        definirCorDoBotao(v){
            switch(v) {
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
        editarStatus(i,r){
            console.log(i);
            console.log(r);
        },
        adicionarStatus(){
            //console.log('Adicionar status novo')
            this.dialogoStatus = !this.dialogoStatus;
        },
        salvarStatus(){
            console.log('Salvando Status');
            this.dialogoStatus = !this.dialogoStatus;
        }
    }
}
</script>
<style scoped>

</style>
