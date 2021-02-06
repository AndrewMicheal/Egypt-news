import axios from "axios";

function getNews(news){
    return async function(dispatch){
        let {data} = await axios.get(`http://newsapi.org/v2/top-headlines?country=eg&category=${news}&apiKey=449c80bba22b4c5591142572047fdb37`)
        dispatch({type : "GETNEWS" , payload :data.articles })
    }
}

export default getNews