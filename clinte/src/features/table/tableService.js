import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getGraphs = async () => {
  const response = await axios.get(`${base_url}table`);

  return response.data;
};


const tablegraphService = {
    getGraphs,
};

export default tablegraphService;