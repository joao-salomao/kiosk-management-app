import renderer from 'react-test-renderer';
import { fireEvent, screen, render } from '@testing-library/react';
import { Table } from ".";

it('renders the kiosk list correctly', () => {
  const kiosks = [
    {
      id: "1",
      serialKey: "NDK-1",
      description: "Burguer King",
      isKioskClosed: false,
      storeOpensAt: "09:00:00",
      storeClosesAt: "22:00:00"
    },
    {
      id: "2",
      serialKey: "NDK-2",
      description: "Mac",
      isKioskClosed: false,
      storeOpensAt: "09:00:00",
      storeClosesAt: "22:00:00"
    }
  ]

  const tree = renderer
    .create(
      <Table kiosks={kiosks} isLoading={false} onClickNew={jest.fn()} onClickDelete={jest.fn()} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});


it('renders loader correctly', () => {

  const tree = renderer
    .create(
      <Table kiosks={[]} isLoading={true} onClickNew={jest.fn()} onClickDelete={jest.fn()} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('call the handler on click the "New Kiosk" button', () => {
  const onClickNewMock = jest.fn();

  render(
    <Table kiosks={[]} isLoading={false} onClickNew={onClickNewMock} onClickDelete={jest.fn()} />
  );

  const button = screen.getByText(/new kiosk/i);
  fireEvent.click(button);

  expect(onClickNewMock).toHaveBeenCalled();
});

it('call the handler on click the "Delete" button', () => {
  const onClickDeleteMock = jest.fn();

  const kiosks = [
    {
      id: "1",
      serialKey: "NDK-1",
      description: "Burguer King",
      isKioskClosed: false,
      storeOpensAt: "09:00:00",
      storeClosesAt: "22:00:00"
    }
  ]

  render(
    <Table kiosks={kiosks} isLoading={false} onClickNew={jest.fn()} onClickDelete={onClickDeleteMock} />
  );

  const button = screen.getByText(/delete/i);
  fireEvent.click(button);

  expect(onClickDeleteMock).toHaveBeenCalled();
});