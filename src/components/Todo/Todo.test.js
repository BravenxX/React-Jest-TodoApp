import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Todo from "./Todo";

configure({ adapter: new Adapter() });

describe("Todo", () => {
  it("Ejecuta completeTodo cuando clickeo en complete", () => {
    const completeTodo = jest.fn();
    const removeTodo = jest.fn();
    const index = 5;
    const todo = {
      isCompleted: true,
      text: "mi todo",
    };

    const wrapper = shallow(
      <Todo
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        index={index}
        todo={todo}
      />
    );

    wrapper.find("button").at(0).simulate("click");

    expect(completeTodo.mock.calls).toEqual([[5]]);
    expect(removeTodo.mock.calls).toEqual([]);
  });

  it("Ejecuta removeTodo cuando clickeo en la X", () => {
    const completeTodo = jest.fn();
    const removeTodo = jest.fn();
    const index = 5;
    const todo = {
      isCompleted: true,
      text: "mi todo",
    };

    const wrapper = shallow(
      <Todo
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        index={index}
        todo={todo}
      />
    );

    wrapper.find("button").at(1).simulate("click");

    expect(removeTodo.mock.calls).toEqual([[5]]);
    expect(completeTodo.mock.calls).toEqual([]);
  });
});
