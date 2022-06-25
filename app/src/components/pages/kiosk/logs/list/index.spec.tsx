import { Log } from 'lib/types';
import renderer from 'react-test-renderer';
import { RecoilRoot } from 'recoil';
import { List } from ".";

it('renders logs list correctly', () => {
  const logs: Log[] = [
    {
      id: "1",
      action: "Create kiosk",
      description: JSON.stringify({ from: {}, to: {} }),
      kiosk: {
        id: "1",
        description: "Mac",
        isKioskClosed: false,
        serialKey: "1234",
        storeOpensAt: "06:00",
        storeClosesAt: "23:00",
      },
      user: {
        id: "1",
        name: "Some name",
        email: "email@email.com",
      }
    },
    {
      id: "2",
      action: "Update kiosk",
      description: JSON.stringify({
        from: {
          storeClosesAt: "23:00"
        }, to: {
          storeClosesAt: "23:30"
        }
      }),
      kiosk: {
        id: "1",
        description: "Mac",
        isKioskClosed: false,
        serialKey: "1234",
        storeOpensAt: "06:00",
        storeClosesAt: "23:30",
      },
      user: {
        id: "1",
        name: "Some name",
        email: "email@email.com",
      }
    },
  ]

  const tree = renderer
    .create(
      <RecoilRoot>
        <List
          logs={logs}
          isLoading={false}
        />
      </RecoilRoot>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});


it('renders loader correctly', () => {
  const tree = renderer
    .create(
      <RecoilRoot>
        <List
          logs={[]}
          isLoading={true}
        />
      </RecoilRoot>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});