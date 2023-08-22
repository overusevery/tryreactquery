import {render, screen} from '@testing-library/react'
import Setting from '../src/app/setting/page'

test('setting has header message', async () => {
  render(<Setting />)

  expect(screen.getByText('Setting')).toBeInTheDocument()
})