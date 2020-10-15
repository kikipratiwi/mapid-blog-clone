import RequestAdapter from './request-adapter';

export default class MapidService extends RequestAdapter {
  async getBlogData() {
    try {
      const { data } = await super.sendGetRequest(
        `${this.baseUrl}`,
        {}
      );

      const groupBy = 'sub_bracket';
      const map = new Map(Array.from(data, obj => [obj[groupBy], []]));
      data.forEach(obj => map.get(obj[groupBy]).push(obj));

      return Array.from(map.values());
      
    } catch (error) {
      throw new Error(`Get blog data: ${error.response.data.message}`);
    }
  }
}
