import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class IndexRoute extends Route {
  model() {
    return fetch('/pages/index.json').then(function(response) {
      return response.json();
    });
  }
}
