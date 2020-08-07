import React from 'react';
import { shallow } from 'enzyme';

import Main from './index';

describe('Main', () => {
  test('should render default page correctly', () => {
    const props = {
      location: {
        pathname: '/',
      },
    };

    const wrapper = shallow(<Main {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
