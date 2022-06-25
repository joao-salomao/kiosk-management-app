import { Log } from 'lib/types';
import renderer from 'react-test-renderer';
import { DiffChanges } from ".";

const log = {
  description: JSON.stringify({
    from: {
      name: "Old name",
      age: 30,
      likesBeer: false,
    },
    to: {
      name: "New name",
      age: 31,
      likesBeer: true,
    }
  })
}

it('renders correctly', () => {
  const tree = renderer
    .create(
      <DiffChanges log={log as Log} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});