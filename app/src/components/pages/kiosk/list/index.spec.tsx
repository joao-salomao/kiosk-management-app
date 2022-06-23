import { render, waitFor } from '@testing-library/react';
import { List } from ".";
import * as hook from 'lib/hooks/useKioskListManagerHook'


const fetchAllMock = jest.fn()

jest.spyOn(hook, 'useKioskListManagerHook').mockImplementation({
  list: [],
  fetchAll: fetchAllMock,
  isLoading: false,
} as any)

// jest.mock(hook, () => ({
//   useKioskListManagerHook: () => ({
//     fetchAll: fetchAllMock
//   })
// }))

it('call the fetchAll method from the hook', async () => {
  render(<List />);

  await waitFor(() => {
    expect(fetchAllMock).toHaveBeenCalled()
  })
})