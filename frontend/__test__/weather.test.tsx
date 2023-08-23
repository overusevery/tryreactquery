import {screen} from '@testing-library/react'
import WeatherHome from '../src/app/weather/page'
import { renderWithClient } from './utils'

test('weather has header message', async () => {
  renderWithClient(await WeatherHome())
  expect(screen.getByText('Weather')).toBeInTheDocument()
})