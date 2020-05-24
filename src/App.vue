<template>
<div id="app">
  <p>
    vuexをtypescriptでスムーズに使用できるように<br>
    vuex-module-decoratorsを導入するサンプル
  </p>
  <ul>
    <li>
      MyModuleA
      <ul>
        <li>
          id: <input type="text" v-model="myModuleAId">
        </li>
        <li>
          name: <input type="text" v-model="myModuleAName">
        </li>
        <li>
          id: {{ myModuleAId }}
        </li>
        <li>
          name: {{ myModuleAName }}
        </li>
        <li>
          getterでnameにMr.をつける: {{ myModuleANameAddSuf }}
        </li>
      </ul>
    </li>
    <li>
      MyModuleB
      <ul>
        <li>
          id: <input type="text" v-model="myModuleBId">
        </li>
        <li>
          name: <input type="text" v-model="myModuleBName">
        </li>
        <li>
          id: {{ myModuleBId }}
        </li>
        <li>
          name: {{ myModuleBName }}
        </li>
        <li>
          getterでidを5桁0埋め: {{ myModuleBIdZeroPadding }}
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import MyModuleA from '@/store/modules/MyModuleA'
import MyModuleB from '@/store/modules/MyModuleB'

export default Vue.extend({

  computed: {

    myModuleAId: {
      get () {

        return MyModuleA.getId
      },
      set (newValue: string) {

        MyModuleA.setId(newValue)
      }
    },

    myModuleAName: {

      get () {

        return MyModuleA.getName
      },
      set (newValue: string) {

        MyModuleA.setName(newValue)
      }
    },

    myModuleANameAddSuf () {

      return MyModuleA.getNameAddSuf('Mr.')
    },

    myModuleBId: {
      get () {

        return MyModuleB.getId
      },
      set (newValue: string) {

        MyModuleB.setId(newValue)
      }
    },

    myModuleBName: {

      get () {

        return MyModuleB.getName
      },
      set (newValue: string) {

        MyModuleB.setName(newValue)
      }
    },

    myModuleBIdZeroPadding () {

      return MyModuleB.getZeroPaddingId(5)
    },


  }
})
</script>
