import renderer from 'react-test-renderer';
import { RecoilRoot } from 'recoil';
import { StatusFilter } from ".";


it('renders correctly', () => {
  const tree = renderer
    .create(
      <RecoilRoot>
        <StatusFilter />
      </RecoilRoot>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});