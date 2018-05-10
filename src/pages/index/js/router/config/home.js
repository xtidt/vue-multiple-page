/**
 * @description home模块路由配置
 * @author minfive
 * @date 2017-07-26, 11:41:23 GMTCST
 * @lastModify minfive
 * @lastDate 2017-07-26, 11:41:23 GMTCST
 */

import Home from 'Spa@comp/pages/home';

export default {
    path: '/home',
    component: Home.Layout,
    children: [
        {
            path: '/home/index',
            name: 'home/index',
            meta: {
                title: 'homeindex'
            },
            component: () => import(
                'Spa@comp/pages/home/index.vue'
            )
        },

        {
            path: '/home/detail',
            name: 'home/detail',
            meta: {
                title: 'spa单页首页'
            },
            component: () => import(
                /* webpackChunkName: "home-index-component" */
                'Spa@comp/pages/home/detail.vue'
            )
        },

        {
            path: '',
            name: 'home',
            meta: {
                title: 'spa单页首页'
            },
            component: () => import(
                /* webpackChunkName: "home-index-component" */
                'Spa@comp/pages/home/index.vue'
            )
        },

    ]
}
