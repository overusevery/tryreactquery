"use client";
import { useQuery } from 'react-query'
import Skeleton from '@mui/material/Skeleton';

async function getForcast(){
    const res = await fetch('https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json');
    if(!res.ok){
      throw new Error(`[${res.status}] error`)
    }
  return await res.json();
}

export default function Forcast() {
  const { isLoading, data, isError } = useQuery('forcast', getForcast)
    return (
      <div>
        <h2>Forcast(Tokyo)</h2>
        <div>{isLoading ? <Skeleton sx={{ bgcolor: 'grey.900' }} animation="wave" />: data?.text}</div>
        <div>{isError && "Sorry Failed to get Forcast..."}</div>
      </div>
    )
  }