//looked good but does not work :(
//https://www.npmjs.com/package/xmlhttprequest-ts
//imports node types that conflict with dcl console???
//https://decentralandteam.slack.com/archives/C0292P4HJ93/p1683749722241919
//import { XMLHttpRequest } from 'xmlhttprequest-ts';

import * as utils from '@dcl-sdk/utils'
import { XMLHttpRequest } from './xmlhttprequest'

console.log("DECLARING!!!")

type Timeout={}

function clearTimeout(timer:string | number | Timeout | undefined){
    //console.log("DECLARING","clearTimeout called!!!",timer)
    //simulate
    if(timer !== undefined){
        utils.timers.clearTimeout(timer as any)
    }
}
function setTimeout(fn:()=>void,time:number){
    //console.log("DECLARING","setTimeout called!!!",fn,time)
    //simulate
    return utils.timers.setTimeout( fn, time )
}
class FormData{} 

/**
 * This is a workaround to solve a runtime issues
 * 
 */


Object.assign(globalThis, {
    FormData: FormData,
    XMLHttpRequest: XMLHttpRequest,
    clearTimeout: clearTimeout,
    setTimeout: setTimeout
})
