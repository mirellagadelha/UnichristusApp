import { AsyncStorage } from 'react-native';

export default {

  async storeNews(data) {
    await AsyncStorage.setItem('news', JSON.stringify(data))
    .then(() => {
      console.log('News saved successfully');
    })
    .catch(() => {
      console.log('There was an error saving the news.');
    })
  },

  getNews() {
    return AsyncStorage.getItem('news');
  }

}
