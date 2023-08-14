"use client";
import { useQuery } from 'react-query'

function getForcast(){
    return fetch('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json')
      .then(res => res.json())
}

export default function Forcast() {
  const { isLoading, error, data } = useQuery('forcast', getForcast)
    return (
      <div>
        <div>Forcast(Tokyo)</div>
        <div>{isLoading ? "loading..." : data.text}</div>
      </div>
    )
  }