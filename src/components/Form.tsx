// Reactでは画面に入力されたデータはstateと呼ばれる一時保管場所に格納し手利用する
import { useState } from "react"

const Form = () => {

  // cityはstate, setCityはstateのデータを操作する仕組み
  const [city, setCity] = useState("")
    // onChangeでテキストボックスの値をsetCityを通じてcityに渡す
    return (
    <form>
      <input type="text" 
              name="city" 
              placeholder="都市名" 
              onChange={event => setCity(event.target.value)}>
      </input>
      <button type="submit">天気を取得</button>
      {city}{city}
      {/* return の中でJavaScriptのコードを書くときは{}で囲む */}
    </form>
  )
}

export default Form