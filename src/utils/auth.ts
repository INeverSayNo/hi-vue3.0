import Cookies from "ts-cookies";
export function setCookie(token:string):void{
    Cookies.set("user-token",token)
}
export function getCookie(tokenname:string):boolean{
    return Boolean(Cookies.get(tokenname))
}
