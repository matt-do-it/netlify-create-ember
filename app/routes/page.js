import Route from '@ember/routing/route';
import fetch from 'fetch';
import { service } from '@ember/service';
import { hash, resolve } from 'rsvp';

export default class IndexRoute extends Route {
  @service store;

  async model(params) {
    let pageId = params.page_id;
    if (!pageId) {
      pageId = "index";
    }
    return hash({
      page: this.store.findRecord('page', pageId),
      allPages: this.store.findAll('page'),
    });
  }
}
