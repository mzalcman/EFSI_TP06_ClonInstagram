import axios from "axios";

const API_URL =
  "https://api.thecatapi.com/v1/images/search?limit=10";

const API_KEY = "live_VVKAwKhXDom5EvLcC0cqfSfSrxtXZ5falPPoMeiV0IdoqKwFDs3YgEte0HzBkCzp";

export const getCats = async () => {
  const response = await axios.get(
    API_URL,
    {
      headers: {
        "x-api-key": API_KEY,
      },
    }
  );

  return response.data;
};