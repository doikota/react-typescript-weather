// Reactでは画面に入力されたデータはstateと呼ばれる一時保管場所に格納し手利用する
import { useState } from "react"

import Title from './components/Title'
import Form from './components/Form'
import Result from './components/Result'
import Weather from './components/Weather'

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

  // APIを呼び出すためのラッパー関数、formリロード抑止とresultステートの設定も行う
  async function getWeather (e : React.FormEvent<HTMLFormElement>) {
    // form内でボタンを押したときのリロードを防止する
    e.preventDefault()
    // cityパラメータを渡し、APIの結果を得る
    const res = await Weather(city)
    console.log("Weather returned: " + JSON.stringify(res))
    setResult(res)
  }

  // Reactでは重要な設計コンセプトとして、Top-Down Data Flowを採用しており、これはデータの流れは一方通行、
  // または上位から下位に向かうようにすることで、Appで定義したsetCityやgetWeatherをFormタグの属性の様に下位のコンポーネントに渡し、
  // データ処理をAppで集中管理するように仕向けている
  return (
    <div className="wrapper"> 
      <div className="container">
        <Title/>
        <Form setCity={setCity} getWeather={getWeather}/>
        <Result result={result}/>
      </div>
    </div>
  )
}

export default App
