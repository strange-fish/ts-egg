import ResourceController from '../baseClass/resourceController'

export default class ArticleController extends ResourceController {
  constructor (ctx) {
    super(ctx, 'Article')
  }

  async index () {
    const models = this.app.model
    await this.paginate('Article', {
      include: [models.User]
    })
  }

  async create () {
    const params = this.ctx.request.body
    this.ctx.validate({
      title: 'string',
      content: 'string'
    }, params)

    const article = await this.service.articleService.createArticle(
      params.title,
      params.content,
      this.ctx.user.id
    )
    return this.success(article)
  }
}
