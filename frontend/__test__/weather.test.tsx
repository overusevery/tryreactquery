import { screen, waitFor } from "@testing-library/react";
import WeatherHome from "../src/app/weather/page";
import { renderWithClient } from "./utils";

test("weather has header message", async () => {
  renderWithClient(await WeatherHome());
  expect(screen.getByText("Weather")).toBeInTheDocument();
  await waitFor(() => expect(screen.getByText("[mock]関東甲信地方は、高気圧に覆われています。", {exact: false})).toBeInTheDocument());
});
