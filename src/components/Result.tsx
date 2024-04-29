// propsで渡されるResultの型props.result.の形で渡される
type ResultProps = {
  result: {
    country : string
    cityName : string
    localtime : string
    temperature : string
    conditionText : string
    icon : string
  }
}

const Result = (props : ResultProps) => {
  return (
    <h1><div>
      {props.result.country && 
        <div>
          <div>{props.result.country}</div>
          <div>{props.result.cityName}</div>
          <div>{props.result.localtime}</div>
          <div>{props.result.temperature}℃</div>
          <div>
            <div>{props.result.conditionText}</div>
            <img src={props.result.icon} alt="icon"/>
          </div>
        </div>
      }
    </div></h1>
  )
}

export default Result