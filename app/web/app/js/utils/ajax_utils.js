export default {
  get(url) {
    return new Promise((resolve, reject) => {
      $.get(url)
        .done((response) => {
          resolve(response);
        })
        .fail((err) => {
          reject(err);
        });
    });
  },
  post(url, data) {
    return new Promise((resolve, reject) => {
      $.post(url, data)
        .done((response) => {
          resolve(response);
        })
        .fail((err) => {
          reject(err);
        });
    });
  }
};
