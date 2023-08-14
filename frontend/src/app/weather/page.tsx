import Forcast from "./weatherforcast"
import Stack from '@mui/material/Stack';

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
        <Stack spacing={2}>
          <div>
            <h2>Forcast at </h2>
            <div>{forcast_src.reportDatetime}</div>
            <div>*get in server side</div>
          </div>
          <div>
            <Forcast />
            <div>*get in client</div>
          </div>
        </Stack>
      </div>
    )
  }