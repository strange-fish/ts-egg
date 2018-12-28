import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/api/user/:userId', controller.home.findUserById);
  router.post('/api/v1/user', controller.home.createUser);
};
