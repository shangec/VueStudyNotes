import axios from 'axios'
// 方式一
// export function request(config, success, failure){
//     // 1.创建axios的实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config)
//     .then(res=>{
//         // console.log(res);
//         success(res);
//     })
//     .catch(err=>{
//         // console.log(err);
//         failure(err);
//     })
// }

// 方式二
// export function request(config){
//     // 1.创建axios的实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config.baseConfig)
//     .then(res=>{
//         // console.log(res);
//         config.success(res);
//     })
//     .catch(err=>{
//         // console.log(err);
//         config.failure(err);
//     })
// }

// 方式三
// export function request(config){
//     return new Promise((resolve, reject) => {
//         // 1.创建axios的实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })

//         // 发送真正的网络请求
//         instance(config)
//         .then(res=>{
//             resolve(res)
//         })
//         .catch(err=>{
//             reject(err)
//         })
//     })
// }

// 方式四
export function request(config){
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 2.axios的拦截器
    // 2.1请求拦截的作用
    // instance.interceptors.request.use(config=>{
    //     console.log(config);
    //     // 1.比如config中的一些信息不符合服务器的要求
    //     // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    //     // 3.某些网络请求（比如登录（token）），必须携带一些特殊信息
    //     return config;
    // },err=>{
    //     config.log(err)
    // })

    // 2.2响应拦截
    instance.interceptors.response.use(res=>{
        // console.log(res);
        // console.log(res.data);
        return res.data
    },err=>{
        console.log(err);
    })

    // 3.发送真正的网络请求
    return instance(config)
}