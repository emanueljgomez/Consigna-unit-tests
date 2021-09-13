import React from "react";
import { shallow } from "enzyme";
import App from "../App.js";

describe("Test suite Cartas obtener usuarios", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  // Test Case 'a'
  test("debe coincidir con snapshot", () => {
    //const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
