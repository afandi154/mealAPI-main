class DataSource {
  static searchData(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`).then(response => {
      return response.json();
    }).then(responseJson => {
      if (responseJson.teams) {
        return Promise.resolve(responseJson.teams);
      } else {
        return Promise.reject(`${keyword} tidak ditemukan`);
      }
    });
  }
}

export default DataSource;