const service = axios.create({
  timeout: 10000,
});

service.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (err) => Promise.reject(err)
);

export default service;
