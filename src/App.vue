<template>
  <div id="app">
      <el-container>
        <el-header>
          <el-menu
          :default-active="'1'"
          class="el-menu-demo"
          mode="horizontal"
          @select="selecionarItemMenu"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-menu-item index="1">Home</el-menu-item>
            <el-submenu index="2">
                 <template slot="title">Venda</template>
                   <el-menu-item index="2-1">Excluir</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-header>
        <el-main>
          <painel-c></painel-c>
        </el-main>
      </el-container>
  </div>
</template>
<script>

import PainelComponet from './components/painel/Painel.vue';

export default {
  components:{
    'painel-c':PainelComponet
  },
  data(){
    return{

    }
  },
  methods:{
    selecionarItemMenu(key, keyPath){
      //console.log(key);
      //console.log(keyPath);
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
