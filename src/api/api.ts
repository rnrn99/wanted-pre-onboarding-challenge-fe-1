const baseUrl = process.env.REACT_APP_SERVER_URL;

const get = async <T>(endpoint: string) => {
  const url = baseUrl + endpoint;
  const res = await fetch(url, {
    headers: { Authorization: `${localStorage.getItem("token")}` },
  });
  const result: T = await res.json();
  return result;
};

const post = async <T, U>(endpoint: string, data: U) => {
  const url = baseUrl + endpoint;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
  const result: T = await res.json();
  return result;
};

const put = async <T, U>(endpoint: string, data: U) => {
  const url = baseUrl + endpoint;
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
  const result: T = await res.json();
  return result;
};

const del = async (endpoint: string) => {
  const url = baseUrl + endpoint;
  const res = await fetch(url, {
    method: "DELETE",
    headers: { Authorization: `${localStorage.getItem("token")}` },
  });
  const result = await res.json();
  return result;
};

export { get, post, put, del as delete };
