import {  createRouter, createWebHistory  } from 'vue-router';
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Shops from '../views/Shops.vue'
import Stores from '../views/Stores.vue'

import Home from '../components/dashboard/Home.vue'
import Products from '../views/dashboard/Products.vue'
import Categories from '../views/dashboard/Categories.vue'
import CompletedOrders from '../views/dashboard/CompletedOrders.vue'
import PendingOrders from '../views/dashboard/PendingOrders.vue'
import Sellers from '../views/dashboard/Sellers.vue'
import Vendors from '../views/dashboard/Vendors.vue'
import Customers from '../views/dashboard/Customers.vue'
import Reviews from '../views/dashboard/Reviews.vue'
import Blogs from '../views/dashboard/Blogs.vue'
import FeaturedBlogs from '../views/dashboard/FeaturedBlogs.vue'
import ArchivedBlogs from '../views/dashboard/ArchivedBlogs.vue'

import AccountOrders from '../views/account/Orders.vue'
import AccountSettings from '../views/account/Settings.vue'
import AccountAddress from '../views/account/Address.vue'
import AccountPayment from '../views/account/Payment.vue'
import AccountNotification from '../views/account/Notification.vue'

const routes = [
    {
        path:'/',
        name: 'welcome',
        component: Index
    },

    {
        path:'/register',
        name: 'register',
        component: Register
    },

    {
        path:'/login',
        name: 'login',
        component: Login
    },
    {
        path:'/shops',
        name: 'shops',
        component: Shops
    },
    {
        path:'/stores',
        name: 'stores',
        component: Stores
    },

    //authenticated routes
    {
        path:'/home',
        name: 'home',
        component: Home
    },
    {
        path:'/stores',
        name: 'stores',
        component: Stores
    },
    {
        path:'/products',
        name: 'products',
        component: Products
    },
    {
        path:'/categories',
        name: 'categories',
        component: Categories
    },
    {
        path:'/pendingorders',
        name: 'pendingorders',
        component: PendingOrders
    },
    {
        path:'/completedorders',
        name: 'completedorders',
        component: CompletedOrders
    },
    {
        path:'/sellers',
        name: 'sellers',
        component: Sellers
    },
    {
        path:'/vendors',
        name: 'vendors',
        component: Vendors
    },
    {
        path:'/customers',
        name: 'customers',
        component: Customers
    },
    {
        path:'/reviews',
        name: 'reviews',
        component: Reviews
    },
    {
        path:'/blogs',
        name: 'blogs',
        component: Blogs
    },
    {
        path:'/featuredblogs',
        name: 'featuredblogs',
        component: FeaturedBlogs
    },
    {
        path:'/archivedblogs',
        name: 'archivedblogs',
        component: ArchivedBlogs
    },

    {
        path:'/accountorders',
        name: 'accountorders',
        component: AccountOrders
    },
    {
        path:'/accountsettings',
        name: 'accountsettings',
        component: AccountSettings
    },
    {
        path:'/accountaddress',
        name: 'accountaddress',
        component: AccountAddress
    },
    {
        path:'/accountpayment',
        name: 'accountpayment',
        component: AccountPayment
    },
    {
        path:'/accountnotification',
        name: 'accountnotification',
        component: AccountNotification
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;    