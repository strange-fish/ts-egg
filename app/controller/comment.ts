import ResourceController from '../baseClass/resourceController'

export default class CommentController extends ResourceController {
  constructor (ctx) {
    super(ctx, 'Comment')
  }
  /**
   * @param authorId
   * @param page
   * @param size
   */
  async index () {
    const params = this.ctx.query

    this.ctx.validate({
      authorId: 'int?'
    }, params)

    this.paginate('Comment', { where: {
      authorId: params.authorId
    }})
  }

  async create () {
    const params = this.ctx.request.body

    this.ctx.validate({
      articleId: 'int',
      content: 'string'
    }, params)

    const comment = await this.service.commentService.createComment(
      this.ctx.user.id,
      params.articleId,
      params.content
    )
    this.success(comment)
  }
}