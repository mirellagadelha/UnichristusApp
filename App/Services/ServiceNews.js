import ApiNews from './ApiNews';
import StorageNews from './StorageNews';

export default {

  getDataFromAPIAndSave() {
    ApiNews.listNews().then((response) => {
      StorageNews.storeNews(response.data);
    });
  },

  getDataFromDB() {
    return StorageNews.getNews();
  }

}
