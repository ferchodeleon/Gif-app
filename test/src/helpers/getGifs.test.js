import { getGifs } from "../../../src/helpers/getGifs";

describe("Test of helper getGifs", () => {
  test("Most return an array of gifs", async () => {
    const gifs = await getGifs("One Punch");
    //Con esto valido que voy a obtener un arreglo mayor a 0
    expect(gifs.length).toBeGreaterThan(0);
    // De esta forma podemos validar si se recibe un objeto con los key y el tipo de valor
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
