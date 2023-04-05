class DataSource {
  static searchData(keyword) {
    return fetch(`https://themealdb.com/api/json/v1/1/search.php?f=${keyword}`).then(response => {
      return response.json();
    }).then(responseJson => {
      if (responseJson.teams) {
        return Promise.resolve(responseJson.teams);
      } else {
        return Promise.reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;