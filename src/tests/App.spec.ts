import { render, screen } from "@testing-library/vue";
import App from "../App.vue";
import { describe, it, expect } from "vitest";

describe("App", () => {
  it("should render app component properly", () => {
    render(App);

    expect(screen.getByText(/Task App vue3/)).toBeDefined();
  });
});
