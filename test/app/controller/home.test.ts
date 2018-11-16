import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/home.test.ts', () => {
  it('should GET /', async () => {
    const result = await app.httpRequest().get('/').expect(404);
    assert(result.text === '123');
  });

  it('测试案例是否通过测试', () => {
    it('应该返回401', async () => {
      const result = await app.httpRequest().get('/test').expect(401);
      assert(result.json === ['name', 'name']);
    });
  });
});
