import {render, screen, waitFor} from '@testing-library/react'
import WeatherHome from '../src/app/weather/page'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

test('weather has header message', async () => {
  const wh = await WeatherHome()
  render(<div>{wh}</div>)
  expect(screen.getByText('Weather')).toBeInTheDocument()
})