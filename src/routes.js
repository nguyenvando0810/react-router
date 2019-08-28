import React from 'react'
import Home from './components/home'
import Contact from './components/contact'
import About from './components/about'
import NotFound from './components/notFound'
import Products from './components/products'

const routes = [{
    path: '/',
    exact: true,
    main: () => < Home />
  },
  {
    path: '/contact',
    exact: false,
    main: () => < Contact />
  },
  {
    path: '/about',
    exact: false,
    main: () => < About />
  },
  {
    path: '/products',
    exact: false,
    main: ({ match }) => < Products match={ match }/> //Truyền vào 1 props là match, là tham số đầu vào của main, là 1 object.
    //Dùng để lấy thông tin trên URL ,
  },
  {
    path: '',
    exact: false,
    main: () => < NotFound />
  }
]

export default routes