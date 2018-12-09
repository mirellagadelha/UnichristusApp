import Api from './Api';

export default {
  listNews: () => Api.get('news'),
}
