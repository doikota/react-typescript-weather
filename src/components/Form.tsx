// Reactでは画面に入力されたデータはstateと呼ばれる一時保管場所に格納し手利用する
import { useState } from "react"

const Form = () => {

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

  // onChangeでテキストボックスの値を文字列としてsetCityを通じてcityに渡す
  return (
    <form>
      <input type="text" 
              name="city" 
              placeholder="都市名" 
              onChange={e => setCity(e.target.value)}>
      </input>
      <button type="submit" onClick={getWeather}>天気を取得</button>
      {/* return の中でJavaScriptのコードを書くときは{}で囲む */}
    </form>
  )
}

export default Form
