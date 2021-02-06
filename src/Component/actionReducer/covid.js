import axios from "axios";

export  function getCovid(){
    return async function (dispatch){
       let {data} = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases`);
       dispatch({type : "COVID" , payload :data.Egypt.All})
    }
}