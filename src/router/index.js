import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Xiaoxi from '../components/xiaoxi/xiaoxi'
import Xiangmu from '../components/xiangmu/xiangmu'
import Rili from '../components/rili/rili'
import Wangpan from '../components/wangpan/wangpan'
import Tongxunlu from '../components/tongxunlu/tongxunlu'
import Xx from './xx'

export default new Router({
    routes: [
        {
            path: '/xiaoxi',
            component: Xiaoxi,
            name: '消息',
          children:Xx.xx
        }, {
            path: '/xiangmu',
            component: Xiangmu,
            name: '项目',
            
        },
        {
            path: '/rili',
            component: Rili,
            name: '日历'
        }, 
        {
            path: '/wangpan',
            component: Wangpan,
            name: '网盘'
        },
        {
            path: '/tongxunlu',
            component: Tongxunlu,
            name:'通讯录'
        },
        {
        //如果用户随便输入地址,转到首页
            path: '*',
            redirect: '/xiangmu'
        }
    ]
})
