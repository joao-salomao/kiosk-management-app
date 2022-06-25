import renderer from 'react-test-renderer';
import { fireEvent, screen, render, waitFor } from '@testing-library/react';
import { Form } from ".";

it('call the onSubmit handler when all fields are valid', async () => {
  const onSubmitMock = jest.fn();

  render(<Form isSubmitting={false} onSubmit={onSubmitMock} />)

  fireEvent.change(
    screen.getByLabelText(/serial key:/i),
    { target: { value: 'Some serial key' } }
  );

  fireEvent.change(
    screen.getByLabelText(/description:/i),
    { target: { value: 'Some description' } }
  );

  fireEvent.change(
    screen.getByLabelText(/store opens at:/i),
    { target: { value: '10:00' } }
  );

  fireEvent.change(
    screen.getByLabelText(/store closes at:/i),
    { target: { value: '22:00' } }
  );

  fireEvent.click(screen.getByRole('button'));

  await waitFor(() => {
    expect(onSubmitMock).toHaveBeenCalled();
  });
});

describe('when is submitting the form', () => {
  it('disable the submit button', () => {
    render(<Form isSubmitting={true} onSubmit={jest.fn()} />)

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Form isSubmitting={true} onSubmit={jest.fn()} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('when is not submitting the form', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Form isSubmitting={false} onSubmit={jest.fn()} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

it('show the required validation text when the fields values are invalid', async () => {
  render(<Form isSubmitting={false} onSubmit={jest.fn()} />)

  const button = screen.getByRole('button');
  fireEvent.click(button);

  await waitFor(() => {
    const elements = screen.queryAllByText(/this field is required/i);
    expect(elements).toHaveLength(3);
  });
});