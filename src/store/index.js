import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countList:[],
    countPush:[]
  },
  mutations: {
    cartList(states,paly){
      // 判断是否有重复的如果有的话就让他 +1 如果没有就push到一个新的数组中
      states.countPush.push(paly)
      let lengthList = states.countList.find(item => item.iid === paly.iid)
      // console.log(lengthList)
      if (lengthList) {//第一次为undefined
        lengthList.count += 1
        lengthList.counts += 100
      } else {//为undefined的走这里
        paly.count = 1
        paly.counts = 100
        paly.checked = true
        states.countList.push(paly)
      }

    },
  },
  actions: {
  },
  modules: {
  }
})
