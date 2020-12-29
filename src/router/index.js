// eslint-disable-next-line
const routers = [
  {
    name: '首页',
    key: 'shouye',
    path: '/main',
    mate: {
      icon: '',
      hide: false
    },
    component: require('../views/main').default    
  }
];
export default routers;