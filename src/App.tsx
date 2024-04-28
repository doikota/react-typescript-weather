import Title from './components/Title'
import Form from './components/Form'

// Reactでは画面に入力されたデータはstateと呼ばれる一時保管場所に格納し手利用する
import { useState } from "react"

const App = () => {
  // cityはstate, setCityはstateのデータを操作する仕組み
  // TypeScriptの型指定である<string>を用いてsetCity()の引数を文字列に限定している
  const [city, setCity] = useState<string>()

  // APIを呼び出すための関数
  const getWeather = (e:any) => {
    e.preventDefault()
    // fetchはJavaScriptでAPIを呼び出すためのメソッド　thenで受け取った結果をvoid型の関数に引数resとして渡す
    fetch("https://api.weatherapi.com/v1/current.json?key=60cc6fda7b27421a92e71655242804&q=London&aqi=no")
      .then(res => res.json())
      .then(data => console.log(data))
  }

  // Reactでは重要な設計コンセプトとして、Top-Down Data Flowを採用しており、
  // これはデータの流れは一方通行、または上位から下位に向かうようにすることで、
  // Appで定義したsetCityやgetWeatherをFormタグの属性の様に下位のコンポーネントに渡す
  // 
  return (
    <div> 
      <Title/>
      <Form setCity={setCity} getWeather={getWeather}/>
    </div>
  )
}

export default App
