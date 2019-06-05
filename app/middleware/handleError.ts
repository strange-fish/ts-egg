import { Context } from 'egg';

async function handleError (ctx: Context, next: () => void) {
  try {
    await next();
  } catch (err) {
    ctx.app.emit('error', err, ctx);
    const status = err.status || 500;
    // 生产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
    const error = status === 500 && ctx.app.config.env === 'prod'
      ? { message: 'Internal Server Error' } : err;

    ctx.body = {
      success: 0,
      msg: error.message,
      errors: error.errors,
    };
    ctx.status = status;
  }
}

export default () => handleError;
