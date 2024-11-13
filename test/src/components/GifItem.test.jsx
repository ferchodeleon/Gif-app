const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../../src/components");

describe("Test of component GifItem", () => {
  const title = "Title of Card";
  const url =
    "https://media1.giphy.com/media/5dY8E6UrHh5kF6nCBj/giphy-downsized-medium.gif?cid=bfd4d686b205aqvpy9f2ix2ukrl83qifv2vsffj0rk4sfvuh&ep=v1_gifs_search&rid=giphy-downsized-medium.gif&ct=g";

  test("Most by math test with the snapshot of component GifItem", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Most by show the image and url indicate", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByRole("img").src).toBe(url);
  });

  test("Most by show the alt indicate to by image", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByRole("img").alt).toBe(title);
  });

  test("Most by show title of card component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByTestId("testTitleCard").innerHTML).toBe(title);
  });
});
