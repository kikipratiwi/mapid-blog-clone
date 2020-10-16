import RequestAdapter from './request-adapter';

export default class MapidService extends RequestAdapter {
  async getBlogData() {
    try {
      const { data } = await super.sendGetRequest(
        `${this.baseUrl}`,
        {}
      );

      //Group blog data by sub_bracket
      const convertedData = {}
      data.forEach((data) => {
        if (!convertedData[data.sub_bracket]) {
          convertedData[data.sub_bracket] = {};
        }

        if (!convertedData[data.sub_bracket][data._id] && data.isPublish) {
          convertedData[data.sub_bracket][data._id] = data;
        }
      });

      return convertedData;
      
    } catch (error) {
      throw new Error(`Get blog data: ${error.response.data.message}`);
    }
  }
}
