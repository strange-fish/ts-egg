import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.testIndex);
  router.post('/api/v1/user', controller.home.createUser);
};
