import { render, screen, fireEvent, cleanup } from "@testing-library/vue";
import { describe, it, expect, beforeEach } from "vitest";
import TaskForm from "components/TaskForm.vue";
import userEvent from "@testing-library/user-event";

describe("<TaskForm />", () => {
  beforeEach(() => cleanup());
  it("should emit onCreateTask with correct value when description is filled", async () => {
    const { emitted } = render(TaskForm);
    const value = "test";
    const user = userEvent.setup();

    const input = screen.getByTestId("task-input");
    const submitButton = screen.getByRole("button");

    await user.type(input, value);
    fireEvent.click(submitButton);

    console.log(emitted());

    expect(emitted()).toHaveProperty("onCreateTask", [[value]]);
  });

  it("should not emit onCreateTask when description is empty", () => {
    const { emitted } = render(TaskForm);
    const submitButton = screen.getByRole("button");

    fireEvent.click(submitButton);

    expect(emitted()).not.toHaveProperty("onCreateTask");
  });
});
