/**
 * @description 基本配置
 * @author minfive
 * @date 2017-07-26, 11:36:45 GMTCST
 * @lastModify minfive
 * @lastDate 2017-07-26, 11:36:45 GMTCST
 */

// import ErrorComp from 'Spa@comp/pages/error';
const ErrorComp = () => import(
    /* webpackChunkName: "error-comp" */
    'Spa@comp/pages/error'
);

const TestComp = () => import(
    'Spa@comp/pages/news'
);

export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/news',
        name: 'news',
        component: TestComp
    },
    {
        path: '/error',
        name: 'error',
        component: ErrorComp
    },
    {
        path: '*',
        redirect: '/error'
    }
];
