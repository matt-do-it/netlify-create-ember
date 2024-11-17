import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {

  urlForFindAll(modelName) {
    let baseUrl = this.buildURL(modelName);
    return baseUrl + ".json";
  }

  urlForFindRecord(id, modelName, snapshot) {
    let baseUrl = this.buildURL(modelName, id, snapshot);
    return baseUrl + ".json";
  }

}
