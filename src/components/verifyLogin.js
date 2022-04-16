export async function verifyLogin({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === '' && password === '') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
