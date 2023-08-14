"use client";
import { useQuery } from 'react-query'

function getForcast(){
    return fetch('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json')
      .then(res => res.json())
}

export default function Weather() {
  const { isLoading, error, data } = useQuery('forcast', getForcast)
    return (
      <div>
        <h1>Weather</h1>
        <div>Forcast(Tokyo)</div>
        <div>{isLoading ? "loading..." : data.text}</div>
      </div>
    )
  }