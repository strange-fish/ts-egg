import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {
  public getName(): string[] {
    return ['zzp', 'yzq'];
  }
  public getThingsDone(name: string): string[] {
    return [name, name];
  }
}
