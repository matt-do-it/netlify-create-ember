import Route from '@ember/routing/route';
import fetch from 'fetch';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    let record = await this.store.findRecord('page', 'index');
    return record;
  }
}
