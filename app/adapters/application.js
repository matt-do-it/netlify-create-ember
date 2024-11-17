import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { pluralize } from 'ember-inflector';

export default class ApplicationAdapter extends JSONAPIAdapter {
  urlForFindAll(modelName) {
    let baseUrl = this.buildURL(modelName);
    return baseUrl + '/' + pluralize(modelName) + '.json';
  }

  urlForFindRecord(id, modelName, snapshot) {
    let baseUrl = this.buildURL(modelName, id, snapshot);
    return baseUrl + '.json';
  }
}
