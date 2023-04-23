import axios from "axios";
axios
  .get(
    "https://api.seniverse.com/v3/weather/daily.json",
    {
        params:{
            key:'S47LCPoMB9XYpDGwi',
            location:'shuozhou',
            language:'zh-Hans',
            unit:'c',
            start: 0,
            days: 1
        }
    }
  )
  .then((response) => {
    const data = response.data.results[0];
    const { location, daily } = data;
    const { name } = location;
    const { text_day, high, low } = daily[0];
    console.log(`城市：${name}，天气：${text_day}，最高温度：${high}，最低温度：${low}`);
  })
  .catch((error) => {
    console.error(error);
  });