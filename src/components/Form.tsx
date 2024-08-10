import React, { useState, JSX } from 'react';
import type { ResultState } from '../App';
import callWeatherApi from './Weather.tsx';

/**
 * Formコンポーネントのpropsの型を定義
 */
interface FormProps {
  setResult: React.Dispatch<React.SetStateAction<ResultState>>;
}

/**
 * APIを呼び出すためのラッパー関数、formリロード抑止とresultステートの設定も行う
 * @param e - React.FormEvent<HTMLFormElement>型のイベントオブジェクト
 * @param city - 都市名の文字列またはundefined
 * @param setResult - React.Dispatch<React.SetStateAction<ResultState>>型のステート更新関数
 * @returns Promise<ResultState>型のAPIの結果
 */
async function getWeather(
  e: React.FormEvent<HTMLFormElement>,
  city: string | undefined,
  setResult: React.Dispatch<React.SetStateAction<ResultState>>,
): Promise<ResultState> {
  // form内でボタンを押したときのリロードを防止する
  e.preventDefault();
  // cityパラメータを渡し、APIの結果を得る
  const res: ResultState = await callWeatherApi(city);
  console.info(`Weather returned: ${JSON.stringify(res)}`);
  setResult(res);
  return res;
}

/**
 * Appとのデータの受け渡しはpropsを通じて行う
 * @param props - FormProps型のpropsオブジェクト
 * @returns JSX.Element型のフォームコンポーネント
 */
function Form(props: Readonly<FormProps>): JSX.Element {
  // cityはstate, setCityはstateのデータを操作する仕組み
  const [city, setCity] = useState<string>();
  // 予めsetResultを分割代入（airbnb推奨）
  const { setResult } = props;

  /**
   * テキストボックスの値をcityに設定する
   * @param e - React.ChangeEvent<HTMLInputElement>型のイベントオブジェクト
   */
  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(e.target.value);
  };

  return (
    <form className="Form" onSubmit={(e) => getWeather(e, city, setResult)}>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={handleCityChange}
      />
      <button type="submit">天気を取得</button>
    </form>
  );
}

export default Form;
