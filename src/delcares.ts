//looked good but does not work :(
//https://www.npmjs.com/package/xmlhttprequest-ts
//imports node types that conflict with dcl console???
//https://decentralandteam.slack.com/archives/C0292P4HJ93/p1683749722241919
//import { XMLHttpRequest } from 'xmlhttprequest-ts';

import * as utils from '@dcl-sdk/utils'

console.log("DECLARING!!!")

type Timeout={}

function clearTimeout(timer:string | number | Timeout | undefined){
    console.log("DECLARING","clearTimeout called!!!",timer)
    //simulate
    if(timer !== undefined){
        utils.timers.clearTimeout(timer as any)
    }
}
function setTimeout(fn:()=>void,time:number){
    console.log("DECLARING","setTimeout called!!!",fn,time)
    //simulate
    return utils.timers.setTimeout( fn, time )
}
class FormData{} 

/**
 * This is a workaround to solve a runtime issues
 * 
 */
declare global {
    function clearTimeout(timeoutID:number):void
    function setTimeout(fn:()=>void,time:number):void
    var FormData:FormData
    //var XMLHttpRequest:XMLHttpRequest
}

globalThis.clearTimeout = clearTimeout
//comment out and use
globalThis.setTimeout = setTimeout
//globalThis.NodeJS.clearTimeout = clearTimeout
globalThis.FormData = FormData
//globalThis.XMLHttpRequest = XMLHttpRequest

export {};
   