// Reactでは画面に入力されたデータはstateと呼ばれる一時保管場所に格納し手利用する
import React, { useState } from "react"

import { Title } from './components/Title'
import Form from './components/Form'
import Result from './components/Result'


// API呼び出しの結果を格納するオブジェクトの型
export type ResultState = {
  country : string
  cityName : string
  localtime : string
  temperature : string
  conditionText : string
  icon : string
};

const App = () => {
  // API呼び出しの結果を格納するオブジェクト
  const [result, setResult] = useState<ResultState>({
    country : "",
    cityName : "",
    localtime : "",
    temperature : "",
    conditionText : "",
    icon : ""
  })

  // Reactでは重要な設計コンセプトとして、Top-Down Data Flowを採用しており、これはデータの流れは一方通行、
  // または上位から下位に向かうようにすることで、Appで定義したsetCityやgetWeatherをFormタグの属性の様に下位のコンポーネントに渡し、
  // データ処理をAppで集中管理するように仕向けている
  return (
    <div className="wrapper"> 
      <div className="App">
        <Title/>
        <Form setResult={setResult} />
        <Result result={result} />
      </div>
    </div>
  )
}

export default App
