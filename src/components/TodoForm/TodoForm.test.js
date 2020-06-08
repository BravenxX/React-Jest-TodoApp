import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TodoForm from "./TodoForm";

configure({ adapter: new Adapter() });

describe("TodoForm", () => {
  it("Lllamar a addTodo cuando el formulario tiene un valor", () => {
    const addTodo = jest.fn();
    const prevent = jest.fn();
    const wrapper = shallow(<TodoForm addTodo={addTodo} />);

    const changeValue = "mi nuevo todo!";

    wrapper.find("input").simulate("change", {
      target: { value: changeValue },
    });

    wrapper.find("form").simulate("submit", { preventDefault: prevent });
    expect(addTodo.mock.calls).toEqual([[changeValue]]);
    expect(prevent.mock.calls).toEqual([[]]);
  });
});
