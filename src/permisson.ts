import router from "./router/index";
import { getCookie } from "./utils/auth";
const whiteList: Array<string> = ['/login'];
const routerList = router.options.routes;

router.beforeEach((to, form, next) => {
    
    const isInRouterList = routerList.some(e => e.path == to.path);

    
    // if (!isInRouterList && to.path!=="/home") {
    //     next({path:"/404"});
    // } else {
        if (getCookie("user-token")) {
            if (to.path === "/login") {
                next({ path: "/" })
            } else {
                next()
            }
        } else {
            if (whiteList.indexOf(to.path) !== -1) {
                next()
            } else {
                next(`/login?redirect=${to.path}`)
            }
            // next('/login')    
        }
    // }


})



