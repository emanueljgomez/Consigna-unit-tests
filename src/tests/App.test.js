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

  // Test Case 'h':
  // initial state properties of the wrapped
  // component can be accessed directly
  // in order to evaluate them
  test('el color de fondo debe ser inicialmente "#ccffff"', () => {
    expect(wrapper.state("color")).toEqual("#ccffff");
  });

  // Test Case 'i':
  // you can use Class Names in combination
  // with the 'wrapper.find' method in order
  // to evaluate specific elements of the DOM
  test('el color de fondo debe ser "#ffff99" al hacer click en el div contenedor', () => {
    wrapper.find(".container").simulate("click");
    expect(wrapper.state("color")).toEqual("#ffff99");
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
  // 'find' method is used twice as a concatenation
  // in order to find the required HTML elements and their classes,
  // then the total amount of found matching elements is compared to
  // the desired amount of elements
  test("cada carta debe tener 4 elementos de párrafo con clase 'titulo'", () => {
    expect(wrapper.find("p").find(".titulo").length).toEqual(4);
  });

  // Test Case 'g':
  // 'hasClass' from Enzyme can detect a
  // single-node wrapper with the passed in class name
  test("el elemento div dentro de cada carta debe tener una clase 'celda'", () => {
    expect(wrapper.find("div").hasClass("celda")).toBe(true);
  });
});
