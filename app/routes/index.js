import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service router;

  beforeModel(/* transition */) {
    this.router.transitionTo('page', 'index'); // Implicitly aborts the on-going transition.
  }
}
