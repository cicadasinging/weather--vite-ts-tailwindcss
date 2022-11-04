const request = axios.create({
  timeout: 10000,
});

request.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (err) => Promise.reject(err)
);

export default request;
