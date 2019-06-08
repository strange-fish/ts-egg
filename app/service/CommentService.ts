
import { Service } from 'egg'
import { HandledError } from '../error'

export default class CommentService extends Service {
  async createComment (authorId: number, articleId: number, content: string) {
    const models = this.app.model

    const article = await models.Article.findByPk(articleId)

    if (!article) {
      throw new HandledError(`Article doesn't exsit!`)
    }

    const comment = new models.Comment()
    comment.articleId = articleId
    comment.authorId = authorId
    comment.content = content

    return await comment.save()
  }
}
