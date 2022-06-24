import renderer from 'react-test-renderer';
import { fireEvent, screen, render } from '@testing-library/react';
import { Table } from ".";
import { StatusFilter } from 'lib/types';

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
      <Table
        selectedStatusFilter={StatusFilter.all}
        kiosks={kiosks}
        isLoading={false}
        onClickNew={jest.fn()}
        onClickEdit={jest.fn()}
        onClickDelete={jest.fn()}
        setSelectedStatusFilter={jest.fn()}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});


it('renders loader correctly', () => {

  const tree = renderer
    .create(
      <Table
        kiosks={[]}
        isLoading={true}
        selectedStatusFilter={StatusFilter.all}
        onClickNew={jest.fn()}
        onClickEdit={jest.fn()}
        onClickDelete={jest.fn()}
        setSelectedStatusFilter={jest.fn()}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('call the handler on click the "New Kiosk" button', () => {
  const onClickNewMock = jest.fn();

  render(
    <Table
      kiosks={[]}
      isLoading={false}
      selectedStatusFilter={StatusFilter.all}
      onClickNew={onClickNewMock}
      onClickEdit={jest.fn()}
      onClickDelete={jest.fn()}
      setSelectedStatusFilter={jest.fn()}
    />
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
    <Table
      kiosks={kiosks}
      isLoading={false}
      selectedStatusFilter={StatusFilter.all}
      onClickNew={jest.fn()}
      onClickEdit={jest.fn()}
      onClickDelete={onClickDeleteMock}
      setSelectedStatusFilter={jest.fn()}
    />
  );

  const button = screen.getByText(/delete/i);
  fireEvent.click(button);

  expect(onClickDeleteMock).toHaveBeenCalled();
});

it('call the handler on click the "Edit" button', () => {
  const onClickEditMock = jest.fn();

  const kiosk = {
    id: "1",
    serialKey: "NDK-1",
    description: "Burguer King",
    isKioskClosed: false,
    storeOpensAt: "09:00:00",
    storeClosesAt: "22:00:00"
  }

  render(
    <Table
      kiosks={[kiosk]}
      isLoading={false}
      selectedStatusFilter={StatusFilter.all}
      onClickNew={jest.fn()}
      onClickEdit={onClickEditMock}
      onClickDelete={jest.fn()}
      setSelectedStatusFilter={jest.fn()}
    />
  );

  const button = screen.getByText(/edit/i);
  fireEvent.click(button);

  expect(onClickEditMock).toHaveBeenCalledWith(kiosk.id);
});