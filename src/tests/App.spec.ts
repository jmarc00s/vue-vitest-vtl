import { render, screen } from "@testing-library/vue";
import App from "../App.vue";

it("should render app component properly", () => {
  render(App);

  expect(screen.getByText(/Task App vue3/)).toBeInTheDocument();
});
