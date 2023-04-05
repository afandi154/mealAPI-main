import '../component/meal-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchMeal = document.querySelector('search-bar');
  const dataListElement = document.querySelector('meal-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchData(searchMeal.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    dataListElement.data = results;
  };

  const fallbackResult = message => {
    dataListElement.renderError(message);
  };

  searchMeal.clickEvent = onButtonSearchClicked;
};

export default main;
