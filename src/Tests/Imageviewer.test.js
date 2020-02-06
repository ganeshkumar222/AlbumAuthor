import React from 'react';
import Imageviewer from "../Components/Imageviewer"
import { shallow } from 'enzyme';
describe("Imageviewer", () => {
  it("rendering of component", () => {
    const wrapper = shallow(<Imageviewer />);
  });
  it("checking for state component", () => {
    const wrapper = shallow(<Imageviewer />);
    wrapper.setState({ thumbnail: false });
    expect(wrapper.state().fullimage).toBeDefined();
  });
});