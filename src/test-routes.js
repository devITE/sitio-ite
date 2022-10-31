import routes from "./assets/data/routes";

test("correct routes are exported", () => {
  expect(routes.map(({ name, path }) => `${name}: ${path}`)).toMatchSnapshot();
});
