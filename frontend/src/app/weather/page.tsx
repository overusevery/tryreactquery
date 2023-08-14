"use client";
import { useQuery } from 'react-query'

export default function Weather() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json').then(res =>
      res.json()
    )
  )
    return (
      <div>
        <h1>Weather</h1>
        <div>Forcast(Tokyo)</div>
        <div>{isLoading ? "loading..." : data.text}</div>
      </div>
    )
  }