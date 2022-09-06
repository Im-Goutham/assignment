import { render, screen } from "@testing-library/react";
import DateTimeSelect from "./DateTimeSelect";

test("DateTimeSelect tests", () => {
  render(
    <DateTimeSelect
      label={"Select Dropdown"}
      value={new Date()}
      onChange={jest.fn}
    />
  );
  const label = screen.getByText("Select Dropdown");
  expect(label).toBeInTheDocument();
});
