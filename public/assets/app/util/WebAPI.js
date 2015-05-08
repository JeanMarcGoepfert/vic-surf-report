import request from 'superagent';

export default {
  getReport(location) {
    return new Promise((resolve) => {
      request('/reports/' + location)
      .end((err, res) => {
        resolve(res.body);
        return res.body;
      })
    });
  }
};
