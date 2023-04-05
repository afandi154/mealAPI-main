import '../component/data-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const dataListElement = document.querySelector('data-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchData(searchElement.value);
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

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
