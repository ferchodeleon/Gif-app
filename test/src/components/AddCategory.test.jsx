import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../../src/components/AddCategory";

describe("Test of component Add Category", () => {
  const func = () => {};

  test("Must change the value on the box of text", () => {
    render(<AddCategory onNewCategory={func} />);

    const input = screen.getByRole("textbox");

    // fireEvet es un metodo de testing library para disparar un evento
    // input sirve cómo si el usuario ingresa texto
    // Aquí de obtiene el targe y el value como si el usuario escribiera en el input = "Saitama"
    fireEvent.input(input, { target: { value: "Saitama" } });

    expect(input.value).toBe("Saitama");
  });
});
