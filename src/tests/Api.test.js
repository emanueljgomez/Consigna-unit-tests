/*import React from "react";
import { shallow } from "enzyme";
import axios from "axios";
import App from "../App";
import Perfil from "../Perfil";

jest.mock("axios");

describe("Test suite para APIs", () => {
  test("Perfil debe coincidir con snapshot", () => {
    const wrapper = shallow(<Perfil />);
    expect(wrapper).toMatchSnapshot();

    const usuario = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    axios.get.mockImplementation(() => Promise.resolve(usuario));

    return App.obtenerUsuarios().then((data) =>
      expect(data).toEqual(usuario.data)
    );
  });
});*/
