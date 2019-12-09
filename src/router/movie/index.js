export default {
  path: '/movie', // 电影
  component: () => import('@/views/Movie'),
  children: [
    {
      path: 'city', // 城市
      component: () => import('@/components/City')
    },
    {
      path: 'comingSoon', // 即将上映
      component: () => import('@/components/ComingSoon')
    },
    {
      path: 'search', // 搜索
      component: () => import('@/components/Search')
    },
    {
      path:'nowPlaying', // 正在热映
      component: () => import('@/components/NowPlaying')
    },
    {
      path: '/movie',
      redirect: '/movie/nowPlaying'
    }
  ]
}