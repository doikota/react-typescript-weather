/**
 * ResultPropsはResultコンポーネントに渡されるプロパティの型を定義します。
 * @property {string} country - 国名
 * @property {string} cityName - 都市名
 * @property {string} localtime - 現地時間
 * @property {string} temperature - 気温
 * @property {string} conditionText - 天気の状態
 * @property {string} icon - 天気のアイコンURL
 */
interface ResultProps {
  result: {
    country : string
    cityName : string
    localtime : string
    temperature : string
    conditionText : string
    icon : string
  }
}

/**
 * Resultコンポーネントは天気情報を表示します。
 * @param {Readonly<ResultProps>} props - コンポーネントに渡されるプロパティ
 * @returns {JSX.Element} 天気情報を表示するJSX要素
 */
function Result(props : Readonly<ResultProps>) {
  const { result } = props;
  return (
    <div className="Result">
      <h1>
        <div>
          {result.country && (
          <div>
            {' '}
            <p>現在の天気</p>
            <div className="results-country">{result.country}</div>
            <div className="results-city">{result.cityName}</div>
            <div>{result.localtime}</div>
            <div className="results-temp">
              {result.temperature}
              ℃
            </div>
            <div className="results-condition">
              <div>{result.conditionText}</div>
              <img src={result.icon} alt="icon" />
            </div>
          </div>
          )}
        </div>
      </h1>
    </div>
  );
}

export default Result;
