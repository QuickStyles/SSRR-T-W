import * as React from 'react';
import { Router } from 'express';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { createStore } from 'redux';

const router = Router();

router.get('/*', (req, res, next) => {
  res.render('site', {
    react_html: renderToString(
        <StaticRouter location={{ pathname: req.url }}>
          <div>hi</div>
        </StaticRouter>),
    react_script: '/javascripts/client.bundle.js',
    title: 'Harmemo Software',
    style: '/stylesheets/styles.css',
  });
});

export default router;
