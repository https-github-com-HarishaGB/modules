//named export
/*
export let x = 1000;
export let y = 2000;
export let z = 3000;
*/


// export default x // default export
/*
import {sayHi, sayBye} from "./c.js" 
or
import {sayHi} from "./c.js"
import {sayBye} from "./c.js"

both giving same output 
its wont give 2times output


sayHi()
sayBye()
 */

//or 

import {sayHi as H} from "./c.js"
import {sayBye as B} from "./c.js"

H()
B() 

// let x = sayHi

// export default x
