import Axios from "axios";


export const covidApi = () => {
  return Axios.get("https://covid19.th-stat.com/api/open/today").then((res) => {
    return res.data;
  });
};

export const fromthecase = () => {
  return Axios.get("https://covid19.th-stat.com/api/open/cases/sum").then(
    (res) => {
      return res.data;
    }
  );
};

export const getValueProvince = () => {
  return Axios.get("https://covid19.th-stat.com/api/open/cases/sum").then(
    (res) => {
      return res.data;
    }
  );
};






