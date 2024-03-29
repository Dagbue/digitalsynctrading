import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/whyUs',
    name: 'whyUs',
    component: () => import(/* webpackChunkName: "about" */ '../views/WhyUsView.vue')
  },
  {
    path: '/safety',
    name: 'safety',
    component: () => import(/* webpackChunkName: "about" */ '../views/SafetyView.vue')
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import(/* webpackChunkName: "about" */ '../views/PricingView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import(/* webpackChunkName: "about" */ '../views/FaqView.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import(/* webpackChunkName: "about" */ '../views/TestimonialsView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Auth/Login/Login.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: () => import(/* webpackChunkName: "forgotPassword" */ '../views/Auth/Login/ForgotPassword.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/forgot-password-otp',
    name: 'forgotPasswordOtp',
    component: () => import(/* webpackChunkName: "forgotPasswordOtp" */ '../views/Auth/Login/ForgotPasswordOtp.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/new-password',
    name: 'newPassword',
    component: () => import(/* webpackChunkName: "newPassword" */ '../views/Auth/Login/NewPassword.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Auth/Register/Register.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/email-auth',
    name: 'emailAuth',
    component: () => import(/* webpackChunkName: "emailAuth" */ '../views/Auth/Register/EmailAuth.vue'),
    meta: { hideNavigation: true }
  },

  {
    path: '/dashboard-side-bar',
    name: 'dashboardSideBar',
    component: () => import(/* webpackChunkName: "dashboardSideBar" */ '../views/DashBoard/DashBoardSideBar.vue'),
    meta: { hideNavigation: true },
    redirect: { name: 'overView' },
    children: [
      {
        path: '/over-view',
        name: 'overView',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/OverView.vue'),
        meta: { hideNavigation: true }
      },
      {
        path: '/transactions',
        name: 'transactions',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/Transactions.vue'),
        meta: { hideNavigation: true }
      },
      {
        path: '/wallets-management',
        name: 'walletsManagement',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/WalletsManagement.vue'),
        meta: { hideNavigation: true }
      },
      {
        path: '/fund-wallet',
        name: 'fundWallet',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/FundWallet.vue'),
        meta: { hideNavigation: true },
      },
      {
        path: '/withdrawal',
        name: 'withdrawal',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/Withdrawal.vue'),
        meta: { hideNavigation: true },
      },
      {
        path: '/subscription-trade',
        name: 'subscriptionTrade',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/SubscriptionTrade.vue'),
        meta: { hideNavigation: true },
      },
      {
        path: '/refer-users',
        name: 'referUsers',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/ReferUsers.vue'),
        meta: { hideNavigation: true },
      },

      {
        path: '/loan',
        name: 'loan',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/Loan.vue'),
        meta: { hideNavigation: true },
      },

      {
        path: '/loan-dashboard',
        name: 'LoanDashBoard',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/LoanDashBoard.vue'),
        meta: { hideNavigation: true },
      },

      {
        path: '/packages',
        name: 'Packages',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/Packages.vue'),
        meta: { hideNavigation: true },
      },

      {
        path: '/settings',
        name: 'settings',
        component: () => import(/* webpackChunkName: "overView" */ '../views/DashBoard/Settings.vue'),
        meta: { hideNavigation: true },
        redirect: { name: 'changePassword' },
        children: [
          {
            path: "/change-password",
            name: "changePassword",
            component: () =>
                import(/* webpackChunkName: "ChangePassword" */ "../views/DashBoard/ChangePassword.vue"),
            meta: { hideNavigation: true },
          },
          {
            path: "/update-account",
            name: "updateAccount",
            component: () =>
                import(/* webpackChunkName: "UpdateAccount" */ "../views/DashBoard/UpdateAccount.vue"),
            meta: { hideNavigation: true },
          },
        ]
      },
    ]
  },

  {
    path: '/admin',
    name: 'dashBoardAdminLogin',
    component: () => import(/* webpackChunkName: "dashBoardAdminLogin" */ '../views/Admin/DashBoardAdminLogin.vue'),
    meta: { hideNavigation: true }
  },
  {
    path: '/dashBoard-side-bar-admin',
    name: 'dashBoardSideBarAdmin',
    component: () => import(/* webpackChunkName: "dashBoardSideBarAdmin" */ '../views/Admin/DashBoardSideBarAdmin.vue'),
    meta: { hideNavigation: true },
    redirect: { name: 'listOfUsers' },
    children: [
      {
        path: "/list-of-users",
        name: "listOfUsers",
        component: () =>
            import(/* webpackChunkName: "listOfUsers" */ "../views/Admin/ListOfUsers.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/investments-list",
        name: "investmentsList",
        component: () =>
            import(/* webpackChunkName: "investmentsList" */ "../views/Admin/InvestmentsList.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/deposit-requests",
        name: "depositRequests",
        component: () =>
            import(/* webpackChunkName: "depositRequests" */ "../views/Admin/DepositRequests.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/withdrawal-requests",
        name: "withdrawalRequests",
        component: () =>
            import(/* webpackChunkName: "withdrawalRequests" */ "../views/Admin/WithdrawalRequests.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/loan-requests",
        name: "loanRequest",
        component: () =>
            import(/* webpackChunkName: "loanRequest" */ "../views/Admin/LoanRequest.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/edit-loan",
        name: "editLoan",
        component: () =>
            import(/* webpackChunkName: "withdrawalRequests" */ "../views/Admin/EditLoan.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/edit-investments",
        name: "EditInvestments",
        component: () =>
            import(/* webpackChunkName: "withdrawalRequests" */ "../views/Admin/EditInvestments.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/user-information",
        name: "userInformation",
        component: () =>
            import(/* webpackChunkName: "userInformation" */ "../views/Admin/UserInformation.vue"),
        meta: { hideNavigation: true }
      },
      {
        path: "/user-dashBoard-view",
        name: "userDashBoardView",
        component: () =>
            import(/* webpackChunkName: "UserDashBoardView" */ "../views/Admin/UserDashBoardView.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/change-password-admin",
        name: "changePasswordAdmin",
        component: () =>
            import(/* webpackChunkName: "ChangePasswordAdmin" */ "../views/Admin/ChangePasswordAdmin.vue"),
        meta: { hideNavigation: true }
      },

      {
        path: "/add-new-user",
        name: "addNewUser",
        component: () =>
            import(/* webpackChunkName: "ChangePasswordAdmin" */ "../views/Admin/AddNewUser.vue"),
        meta: { hideNavigation: true }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
