import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './actions'
import moduleA from './modules/modulesA'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const state={
    counter:1000,
    students:[
        {id:110,name:'sec', age :18},
        {id:111,name:'kobe', age :24},
        {id:112,name:'James', age :30},
        {id:113,name:'Wade', age :31}
    ],
    info:{
        name:"Lebron James",
        age:"35",
        height:2.08
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        a: moduleA
    }
})

// 3.导出
export default store