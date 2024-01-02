// This function makes a GET request to the specified URL and returns a promise
export const fetchApi = (url) => {
  return fetch(url)
    .then((res) => {
      // which resolves with the JSON response if successful, or with an error object
      if (res.status === 200 || res.status === 201) {
        return res.json()
      } else {
        return {
          // containing the response status and an error message if unsuccessful.
          status: res.status,
          error: new Error('Invalid Response')
        };
      }
    })
    .catch((err) => {
      // It also logs the response or error to the console.
      return err;
    })
    .finally(() => {
      // console.log('It is over!');
    });
};
