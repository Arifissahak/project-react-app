import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getGraphs = async () => {
  const response = await axios.get(`${base_url}pie-chart`);

  return response.data;
};


const piegraphService = {
    getGraphs,
};

export default piegraphService;