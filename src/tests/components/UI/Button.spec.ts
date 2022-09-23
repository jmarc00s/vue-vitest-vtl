import { cleanup, fireEvent, render, screen } from "@testing-library/vue";
import Button from "components/UI/Button.vue";
import { describe, it, expect, afterEach } from "vitest";

describe("<Button />", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render button component", () => {
    render(Button, {
      slots: {
        default: "Teste",
      },
    });
    expect(screen.getByRole("button")).toBeDefined();
  });

  it("should emit onClick", () => {
    const { emitted, getByRole } = render(Button);
    const button = getByRole("button");
    fireEvent.click(button);
    expect(emitted()).toHaveProperty("onClick");
  });
});
