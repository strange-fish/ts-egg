import BaseController from './baseController'

export default class ArticleController extends BaseController {
  /**
   * index
   */
  async index () {
    await this.paginate('Article')
  }
  async create () {
    const params = this.ctx.request.body
    this.ctx.validate({
      title: 'string',
      content: 'string'
    }, params)
    debugger
    const article = await this.service.articleService.createArticle(
      params.title,
      params.content,
      this.ctx.user.id
    )
    return this.success(article)
  }
}
