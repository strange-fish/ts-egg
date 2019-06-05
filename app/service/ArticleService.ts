import { Service } from 'egg'

export default class ArticleService extends Service {
  async createArticle (title: string, content: string, userId: number) {
    const newArticle = new this.app.model.Article()
    newArticle.title = title
    newArticle.content = content
    newArticle.authorId = userId

    return newArticle.save()
  }
}