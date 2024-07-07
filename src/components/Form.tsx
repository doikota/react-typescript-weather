import React from "react"

type FormProps = {
  setCity : React.Dispatch<React.SetStateAction<string | undefined>>
  getWeather : (e: React.FormEvent<HTMLFormElement>) => void
}

// Appとのデータの受け渡しはpropsを通じて行う
const Form = (props : FormProps) => {

  // onChangeでテキストボックスの値を文字列としてsetCityを通じてcityに渡す
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" 
              name="city" 
              placeholder="都市名" 
              onChange={e => props.setCity(e.target.value)}>
      </input>
      <button type="submit">天気を取得</button>
      {/* return の中でJavaScriptのコードを書くときは{}で囲む */}
    </form>
  )
}

export default Form
