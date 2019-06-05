import { Application } from 'egg'
import { Strategy as BearerStrategy } from 'passport-http-bearer'

export default (app: Application) => {
  // @ts-ignore
  app.passport.use(new BearerStrategy(async (token, done) => {
    try {
      const auth = await app.model.Authorization.findById(token)
      if (auth) {
        const user = await app.model.User.findById(auth.userId)
        if (user) {
          return done(null, user, { scope: 'all', message: 'auth' })
        }
      }
      return done(null, false)
    } catch (err) {
      return done(err)
    }
  }))
}
