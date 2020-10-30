export default{
    // aUpdateInfo(context,payload){
    //     setTimeout(()=>{
    //         context.commit('modifyInfo')
    //         // console.log(payload)//我是payload
    //         // payload()
    //         console.log(payload.message)
    //         payload.success();
    //     },1000)
    // }
    aUpdateInfo(context,payload){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                context.commit('modifyInfo')
                console.log(payload)//我是payload

                resolve('我是返回值')
            },1000)
        })
    }
}