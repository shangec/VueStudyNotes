import {INCREMENT} from './mutations-types'
export default{
    // 方法
    [INCREMENT](state){
        this.state.counter++
    },
    decrement(state){
        this.state.counter--
    },
    // incrementCount(state,count){
    incrementCount(state,payload){
        // this.state.counter+=count
        this.state.counter+=payload.count
    },
    addStudent(state,stu){
        state.students.push(stu)
    },
    modifyInfo(state){
        this.state.info.name="Sec"//响应式
        //不建议mutations中使用异步方法
        // setTimeout(()=>{
        //     state.info.name='Sec'
        // },1000)

        // state.info['address'] = '克利夫兰' //非响应式
        // Vue.set(state.info,'address','克利夫兰')//响应式
        // delete state.info.age
        // Vue.delete(state.info,'age')
    }
}