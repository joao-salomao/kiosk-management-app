import renderer from 'react-test-renderer';
import { Table, TableProps } from ".";

it('renders the kiosk list correctly', () => {
  const kiosks: TableProps['kiosks'] = [
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
      <Table kiosks={kiosks} isLoading={false} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});


it('renders loader correctly', () => {

  const tree = renderer
    .create(
      <Table kiosks={[]} isLoading={true} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});