import { Application } from 'egg'
import passport from './passport/index'

export default (app: Application) => {
  const { controller, router } = app
  passport(app)
  const bearer = app.passport.authenticate('bearer', {
    session: false,
    successReturnToOrRedirect: null
  })
  // app.model.sync({ force: true })

  router.get('/', controller.home.index)

  const apiRouter = app.router.namespace('/api')
  // auth
  apiRouter.post('/v1/login', controller.auth.login)
  apiRouter.post('/v1/register', controller.auth.register)
  apiRouter.post('/v1/logout', bearer, controller.auth.logout)

  const guardRouter = app.router.namespace('/api', bearer)
  guardRouter.resources('article', '/v1/article', controller.article)
}
