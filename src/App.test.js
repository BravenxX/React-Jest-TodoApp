import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("App", () => {
    const wrapper = mount(<App />);
    const prevent = jest.fn();

    wrapper.find("input").simulate("change", { target: { value: "mi todo" } });
    wrapper.find("form").simulate("submit", { preventDefault: prevent });

    const respuesta = wrapper.find(".todo").at(0).text().includes("mi todo");

    expect(respuesta).toEqual(true);
    expect(prevent.mock.calls).toEqual([[]]);
  });
});
