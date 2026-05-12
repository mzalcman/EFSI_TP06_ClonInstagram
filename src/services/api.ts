import axios from "axios";

const API_URL =
  "https://api.thecatapi.com/v1/images/search?limit=12";

export const getCats = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

//API KEY = live_VVKAwKhXDom5EvLcC0cqfSfSrxtXZ5falPPoMeiV0IdoqKwFDs3YgEte0HzBkCzp