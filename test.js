const {default:axios} = require('axios');

(async() => {
    let res = await axios.get("https://animekizi.org/api/retrieveLatest");
    let data = res.data;
    console.log(data.videos.length);
})();
