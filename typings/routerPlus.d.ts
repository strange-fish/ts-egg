import { Context, Router } from 'egg';

interface RouterPlus extends Router {
  namespace(prefix: string, ...middlewares: Array<(ctx: Context, next: () => Promise<any>) => any>): Router;
}

declare module 'egg' {
  interface Application {
    router: RouterPlus;
  }
}
