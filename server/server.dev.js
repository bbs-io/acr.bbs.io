import Koa from 'koa';
import convert from 'koa-convert';
import mount from 'koa-mount';
import serve from 'koa-static';
import fs from 'fs';

import webpack from 'webpack';
import wpDev from 'koa-webpack-dev-middleware';
import wpHot from 'koa-webpack-hot-middleware';

import wpConfig from '../webpack.config.dev';

const app = new Koa();
const compiler = webpack(wpConfig); 


// /static/ route
app.use(convert(wpDev(compiler, { noInfo: true, publicPath: wpConfig.output.publicPath })));
app.use(convert(wpHot(compiler)));

// /assets/ route
app.use(convert(mount('/assets', serve(__dirname + '/../assets'))));

app.use(async (ctx, next) => {
  try {
    await next();
  } catch(err) {
    ctx.body = { message: err.message }
    ctx.status = err.status || 500;
  }

  if (ctx.status !== 404) {
    console.log(`${ctx.req.method} ${ctx.req.url} ${ctx.status}`);
    return; //handled by other middlware
  } 
  
  //TODO: create store, run redux-router, send pre-wired result
  //for now, just send main index file as-is
  console.log(`${ctx.req.method} ${ctx.req.url} DEFAULT PAGE`);
  ctx.body = fs.readFileSync(__dirname + '/../assets/index.dev.html', 'utf8');
});

app.listen(3001);
console.log('listening on http://localhost:3001/ (development)');