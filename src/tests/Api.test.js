import obtenerUsuarios from "../App.js"; // getter function is imported from main component
import mockAxios from "axios"; // import mockAxios (Jest helper library, now included with axios)

// axios is mocked and then a sample response
// is created and returned as a solved promise
jest.mock("axios");
const mockData = mockAxios.get.mockImplementation(() =>
  Promise.resolve({
    data: {
      nombre: "Juan Carlo",
      email: "holajuancarlo@comoestas",
      telefono: "123456",
      codigoPostal: "7600",
    },
  })
);

describe("Test suite para APIs", () => {
  // Test case '3':
  // expected recovered data format must match
  // data from the mocked response
  test("recobra datos de forma exitosa de una API", async () => {
    const result = await new obtenerUsuarios(1);
    expect(result.data).toBe(mockData.data);
  });
});
