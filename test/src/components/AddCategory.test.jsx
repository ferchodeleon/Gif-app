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

  test("Should call onNewCategory, if the input contain a value", () => {
    const inputValue = "Saitama";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe("");

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith("Saitama");
  });

  test("Not should call onNewCategory if the input is empty", () => {
    const inputValue = "a";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
