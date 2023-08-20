import {render, screen} from '@testing-library/react'
import GetStarted from '../src/app/getstarted/page';

test('getstarted has header message', async () => {
  render(<GetStarted />)

  expect(screen.getByText('Get Started')).toBeInTheDocument()
})