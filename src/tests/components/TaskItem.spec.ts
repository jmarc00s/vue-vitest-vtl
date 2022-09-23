import { render, screen } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import TaskItem from "components/TaskItem.vue";

describe("<TaskItem />", () => {
  it("should show the description of the task", () => {
    const testDescription = "testDescription";
    render(TaskItem, {
      props: {
        task: {
          id: 1,
          description: testDescription,
        },
      },
    });

    expect(screen.getByText("testDescription")).toBeDefined();
  });
});
