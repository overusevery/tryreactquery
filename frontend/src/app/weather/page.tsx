import Forcast from "./weatherforcast"

function getForcastDate(){
    return fetch('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json')
      .then(res => {
        const json = res.json()
        return json
      }
      )
}
export default async function WeatherHome() {
    const forcast_src = await getForcastDate()
    return (
      <div>
        <h1>Weather</h1>
        <div>Forcast Of {forcast_src.reportDatetime} </div>
        <div>*get in server side</div>
        <Forcast></Forcast>
        <div>*get in client</div>
      </div>
    )
  }