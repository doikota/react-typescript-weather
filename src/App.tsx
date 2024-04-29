// Reactでは画面に入力されたデータはstateと呼ばれる一時保管場所に格納し手利用する
import { useState } from "react"

import Title from './components/Title'
import Form from './components/Form'
import Result from './components/Result'

// API呼び出しの結果を格納するオブジェクトの型
type ResultState = {
  country : string
  cityName : string
  localtime : string
  temperature : string
  conditionText : string
  icon : string
}

const App = () => {
  // cityはstate, setCityはstateのデータを操作する仕組み
  // TypeScriptの型指定である<string>を用いてsetCity()の引数を文字列に限定している
  const [city, setCity] = useState<string>()

  // API呼び出しの結果を格納するオブジェクト
  const [result, setResult] = useState<ResultState>({
    country : "",
    cityName : "",
    localtime : "",
    temperature : "",
    conditionText : "",
    icon : ""
  })

  // APIを呼び出すための関数
  const getWeather = (e:any) => {
    // form内でボタンを押したときのリロードを防止する
    e.preventDefault()
    // APIに渡すパラメータを組成する
    const param = "https://api.weatherapi.com/v1/current.json?key=60cc6fda7b27421a92e71655242804&q=" + city + "&aqi=no"
    console.log(param)
    // fetchはJavaScriptでAPIを呼び出すためのメソッド　thenで受け取った結果をvoid型の関数に引数resとして渡す
    fetch(param)
      .then(res => res.json())
      .then(data => { setResult ({
          country : data.location.country,
          cityName : data.location.name,
          localtime : data.location.localtime,
          temperature : data.current.temp_c,
          conditionText : data.current.condition.text,
          icon : data.current.condition.icon
        })
      })
      .then(a => console.log(result))
  }

  // Reactでは重要な設計コンセプトとして、Top-Down Data Flowを採用しており、これはデータの流れは一方通行、
  // または上位から下位に向かうようにすることで、Appで定義したsetCityやgetWeatherをFormタグの属性の様に下位のコンポーネントに渡し、
  // データ処理をAppで集中管理するように仕向けている
  return (
    <div> 
      <Title/>
      <Form setCity={setCity} getWeather={getWeather}/>
      <Result result={result}/>
    </div>
  )
}

export default App
