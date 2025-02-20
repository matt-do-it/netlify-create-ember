import Model, { attr, hasMany } from '@ember-data/model';

export default class PageModel extends Model {
  @attr() title;
  @attr() subline;
  @attr() image;
  @attr() content;
  @attr() html;
}
