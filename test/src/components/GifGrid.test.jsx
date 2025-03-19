import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../../src/components";

describe("Test on component <GifGrid />", () => {
  const category = "One Punch";

  test("Should see the initial loading", () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText(category));
    expect(screen.getByText("Cargando.."));
  });

  test("should show the images ", () => {});
});
