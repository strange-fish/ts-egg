import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.post('/api/v1/user', controller.home.createUser);

  // auth
  router.post('/api/v1/login', controller.auth.login);
  router.post('/api/v1/register', controller.auth.register);
};
