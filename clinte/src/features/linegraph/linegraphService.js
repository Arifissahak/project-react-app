import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getGraphs = async () => {
  const response = await axios.get(`${base_url}graph`);

  return response.data;
};


const linegraphService = {
    getGraphs,
};

export default linegraphService;