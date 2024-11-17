import Controller from '@ember/controller';
import { service } from '@ember/service';
import { hash, resolve } from 'rsvp';

export default class PageController extends Controller {
  @service store;
}
