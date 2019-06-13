import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '@/components/Home'
import Product from '@/components/Products/Product'
import NewProduct from '@/components/Products/NewProduct'
import ProductList from '@/components/Products/ProductList.vue'
import Checkout from '@/components/User/Checkout'
import Login from '@/components/Auth/Login'
import Register from '@/components/Auth/Register'





Vue.use(Router);

export default new Router({
  routes: [{
      path: '',
      name: 'home',
      component: Home,
    },
    {
      path: '/product/:id',
      props: true, // для того чтобы id был передан как параметр в компонент
      name: 'product',
      component: Product,
      beforeEnter: AuthGuard
    },
    {
      path: '/list',
      name: 'list',
      component: ProductList,
      beforeEnter: AuthGuard
    },
    {
      path: '/new',
      name: 'new',
      component: NewProduct,
      beforeEnter: AuthGuard
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
      beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
  mode: 'history' //remove # from url
})