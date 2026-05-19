import axios from "axios";

const API_URL =
  "https://api.thecatapi.com/v1/images/search?limit=10";

const API_KEY = "TU_API_KEY";

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