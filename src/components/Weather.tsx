import type { ResultState } from '../App'

// APIを呼び出すための非同期関数
async function Weather (city : string | undefined) {
  // APIに渡すパラメータを組成する
  const param = "https://api.weatherapi.com/v1/current.json?key=60cc6fda7b27421a92e71655242804&q=" + city + "&aqi=no"
  console.log(param)

  // fetchはJavaScriptでAPIを呼び出すための非同期メソッドで、結果の受け取りをawaitしてからJSONの形で入手する
  const res = await fetch(param)
  console.log(typeof res)
  const json = await res.json()
  console.log("Awaited JSON is " + JSON.stringify(json))
  const result : ResultState = {
    country : json.location.country,
    cityName : json.location.name,
    localtime : json.location.localtime,
    temperature : json.current.temp_c,
    conditionText : json.current.condition.text,
    icon : json.current.condition.icon
  }
  console.log(result)
  return result
}

export default Weather
