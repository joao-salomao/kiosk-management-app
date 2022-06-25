import renderer from 'react-test-renderer';
import { fireEvent, screen, render } from '@testing-library/react';
import { SearchInput } from '.'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <SearchInput name='' value='' onChange={jest.fn()} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});


it('call the onChange handler with the expected value', () => {
  const onChangeMock = jest.fn();

  render(
    <SearchInput name='' value='' onChange={onChangeMock} />
  );

  const input = screen.getByLabelText(/search/i);
  fireEvent.change(input, { target: { value: 'new value' } });

  expect(onChangeMock).toHaveBeenCalledWith('new value');
});