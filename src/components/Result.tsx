// propsで渡されるResultの型props.result.の形で渡される
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

// Resultコンポーネントの定義
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
