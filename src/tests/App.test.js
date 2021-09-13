import React from "react";
import { shallow } from "enzyme";
import App from "../App.js";

describe("Test suite Cartas obtener usuarios", () => {
  let wrapper;

  // 'App' component is assigned to 'wrapper' variable,
  // using shallow as its rendering method, this is
  // executed before each Test Case is run.
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  // Test Case 'a':
  // 'wrapper' was assigned the 'App' component, so here the
  // 'toMatchSnapshot' method is used to make sure its content matches
  // the content of its snapshot (App.test.js.snap)
  test("App debe coincidir con snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // Test Case 'b':
  // this will test the inner content (text) of the
  // first 'h2' element found, and compare it to the
  // string "Listado de Usuarios" in order to validate it
  test("el título debe ser 'Listado de Usuarios'", () => {
    expect(wrapper.find("h2").text()).toEqual("Listado de Usuarios");
  });
});
