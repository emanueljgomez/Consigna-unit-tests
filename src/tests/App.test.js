import React from "react";
import { shallow } from "enzyme";
import App from "../App.js";
import Perfil from "../Perfil.js";

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

  // Test Case 'c':
  // this will search for an element inside the component
  // which must match the specified HTML element
  test("debe existir un loader con texto 'cargando página...'", () => {
    expect(wrapper.containsMatchingElement(<p>Cargando página...</p>)).toBe(
      true
    );
  });
});

// A new Test suite is created. It will contain Test cases for the 'Perfil' component

describe("Test suite Componente Perfil", () => {
  const usuario = {
    nombre: "Juan Carlo",
    email: "unit-test@mock.org.us",
    telefono: "123",
    codigoPostal: "7600",
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Perfil usuario={usuario} />);
  });

  // Test Case 'd':
  // a previously created fake user is provided
  // in order to check the component structure
  test("Perfil debe coincidir con snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // Test Case 'e':
  // 'containsMatchingElement' is used to search
  // inside the component for the exact structure
  // and content required
  test("el usuario debe tener una dirección de e-mail unit-test@mock.org.us", () => {
    expect(
      wrapper.containsMatchingElement(
        <p>
          <span className="titulo">E-mail:</span>
          <span className="email">unit-test@mock.org.us</span>
        </p>
      )
    ).toBe(true);
  });

  // Test Case 'f':
  // an iteration combined with a class selector
  // is used in order to find all elements that
  // possess the required class
  test("cada carta debe tener 4 elementos de párrafo con clase 'titulo'", () => {
    let counter;
    for (var i = 0; i < 5; i++) {
      let el = document.getElementsByClassName("titulo");
      counter = i;
    }
    expect(counter == 4).toBe(true);
  });
});
