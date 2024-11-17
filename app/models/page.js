import Model, { attr, hasMany } from '@ember-data/model';

export default class PageModel extends Model {
  @attr() title;
  @attr() content;
  @attr() html;
}
