import Service from './request-adapter';

const BASE_URL = 'https://api.mapid.io/blog/get_list_docs_public/blog';
const JSON_QUERY = '.json?print=pretty';
const client = new Service({ baseURL: BASE_URL });
const mapidBlogService = {};

mapidBlogService.getBlogBrackets = () => client.get();

export default mapidBlogService;
