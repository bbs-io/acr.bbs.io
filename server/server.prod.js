import Koa from 'koa';
import convert from 'koa-convert';
import mount from 'koa-mount';
import serve from 'koa-static';
import fs from 'fs';
import path from 'path';

import webpack from 'webpack';
import wpDev from 'koa-webpack-dev-middleware';
import wpHot from 'koa-webpack-hot-middleware';

import wpConfig from '../webpack.config.dev';

const app = new Koa();
const compiler = webpack(wpConfig); 

app.use(async (ctx, next) => {
  try {
    await next();
  } catch(err) {
    ctx.body = { message: err.message }
    ctx.status = err.status || 500;
  }
  console.log(`${ctx.req.method} ${ctx.req.url} ${ctx.defaultPage? "DEFAULT PAGE" : ctx.status}`);
})
app.use(convert(mount('/static/', serve(path.resolve(__dirname, '../static')))));
app.use(convert(serve(path.resolve(__dirname, '../assets'))));

app.use(async (ctx, next) => {
  try {
    await next();
  } catch(err) {
    ctx.body = { message: err.message }
    ctx.status = err.status || 500;
  }

  if (ctx.status !== 404) {
    return; //handled by other middlware
  } 
  
  //TODO: create store, run redux-router, send pre-wired result
  //for now, just send main index file as-is
  ctx.defaultPage = true;
  ctx.body = fs.readFileSync(__dirname + '/../assets/index.prod.html', 'utf8');
});

app.listen(3001);
console.log('listening on http://localhost:3001/ (production)');