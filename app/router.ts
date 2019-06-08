import { Application } from 'egg'
import passport from './passport/index'

export default (app: Application) => {
  const { controller, router } = app
  passport(app)
  const bearer = app.passport.authenticate('bearer', {
    session: false,
    // @ts-ignore
    successReturnToOrRedirect: null
  })
  // @ts-ignore
  // app.model.sync({ force: true })

  router.get('/', controller.home.index)

  const apiRouter = app.router.namespace('/api')
  const guardRouter = app.router.namespace('/api', bearer)
  // auth
  apiRouter.post('/v1/login', controller.auth.login)
  apiRouter.post('/v1/register', controller.auth.register)
  guardRouter.post('/v1/logout', controller.auth.logout)
  // article
  guardRouter.resources('article', '/v1/article', controller.article)
  guardRouter.resources('comment', '/v1/comment', controller.comment)
}
