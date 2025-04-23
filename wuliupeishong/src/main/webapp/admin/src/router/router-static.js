import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import cheliang from '@/views/modules/cheliang/list'
    import dictionary from '@/views/modules/dictionary/list'
    import goods from '@/views/modules/goods/list'
    import goodsChuruInout from '@/views/modules/goodsChuruInout/list'
    import goodsChuruInoutList from '@/views/modules/goodsChuruInoutList/list'
    import goodsOrder from '@/views/modules/goodsOrder/list'
    import kehu from '@/views/modules/kehu/list'
    import news from '@/views/modules/news/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dictionaryBumen from '@/views/modules/dictionaryBumen/list'
    import dictionaryCheliang from '@/views/modules/dictionaryCheliang/list'
    import dictionaryGoods from '@/views/modules/dictionaryGoods/list'
    import dictionaryGoodsChuruInout from '@/views/modules/dictionaryGoodsChuruInout/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryBumen',
        name: '部门',
        component: dictionaryBumen
    }
    ,{
        path: '/dictionaryCheliang',
        name: '订单状态',
        component: dictionaryCheliang
    }
    ,{
        path: '/dictionaryGoods',
        name: '货物类型',
        component: dictionaryGoods
    }
    ,{
        path: '/dictionaryGoodsChuruInout',
        name: '出入库类型',
        component: dictionaryGoodsChuruInout
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }


    ,{
        path: '/cheliang',
        name: '车辆信息',
        component: cheliang
      }
    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/goods',
        name: '货物信息',
        component: goods
      }
    ,{
        path: '/goodsChuruInout',
        name: '出入库',
        component: goodsChuruInout
      }
    ,{
        path: '/goodsChuruInoutList',
        name: '出入库详情',
        component: goodsChuruInoutList
      }
    ,{
        path: '/goodsOrder',
        name: '货物订单',
        component: goodsOrder
      }
    ,{
        path: '/kehu',
        name: '客户',
        component: kehu
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/yonghu',
        name: '员工',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
