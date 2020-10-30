// 1.导入的{}中定义的变量
import {flag,sum} from "./aaa.js";

if(flag){
    console.log("hello, world!!!");
    console.log(sum(20,30));
}

// 2.直接导入export定义的变量
import {num1,height} from "./aaa.js";
console.log(num1);
console.log(height);

// 3.导入export的function
import {mul,Person} from "./aaa.js";

console.log(mul(30,50));

console.log(Per.Person.run);

// 4.导入export default
import addr from './aaa.js';

addr('你好啊');


// 5.统一全部导入
import * as aaa from './aaa.js';
console.log(aaa.flag)
