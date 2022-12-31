import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/index';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Posts } from './components/Posts';
import { Post } from './components/Post';
import { Redirect } from './components/Redirect';
import { NotFound } from './components/NotFound';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/posts' element={<Post />} />
      {/* <Route path='/posts/:id' element={<Post />} /> */}
      <Route path='/posts' element={<Posts />}>
        <Route path=':id' element={<Post />} />
      </Route>
      <Route path='/redirect' element={<Redirect />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
