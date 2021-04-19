import { useGlobalIconFont } from './components/iconfont/helper';

export default {
  usingComponents: Object.assign(useGlobalIconFont()),
  pages: [
    'pages/home/index',
    'pages/achievement/index',
    'pages/requirement/curd',
    'pages/requirement/success'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#0c00bf',
    navigationBarTitleText: '人才服务平台',
    navigationBarTextStyle: 'white'
  }
}
