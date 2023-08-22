import Forcast from "./weatherforcast"

async function getForcastDate(){
    const res = await fetch('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json');
    const json = res.json();
  return await json;
}
export default async function WeatherHome() {
    const forcast_src = await getForcastDate()
    return (
      <div>
        <h1>Weather</h1>
          <div>
            <h2>Forcast at </h2>
            <div>{forcast_src.reportDatetime}</div>
            <div>*get in server side</div>
          </div>
          <div>
            <Forcast />
            <div>*get in client</div>
          </div>
      </div>
    )
  }