<template>
    <div>
       <template>
         <div> <h3> Itens do Pedido </h3> </div>
          <el-table
            :data="itens_v"
            highlight-current-row
            show-summary
            style="width: 100%">
            <el-table-column
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              property="dataCadastro"
              label="Data Cadastro"
              >
              <template slot-scope="scope" >
                  <el-tag type="success" >{{scope.row.dataCadastro.split('T')[0]}}</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              property="nome"
              label="Nome"
              >
            </el-table-column>
            <el-table-column
              property="valor"
              label="Valor"
              >
            </el-table-column>
          </el-table>
          <br>
          
        </template>
    </div>
</template>
<script>
export default {
    props:['itens_v'],
    data(){
        return{
            itens_n:[]
        }
    }
}
</script>
<style scoped>
</style>
