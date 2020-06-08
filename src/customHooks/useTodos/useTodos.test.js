import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import useTodos from "./useTodos";

configure({ adapter: new Adapter() });

describe("Custom hook: useTodos", () => {
  it("addTodo", () => {
    const Test = (props) => {
      const hook = props.hook();
      return <div {...hook}></div>;
    };

    const wrapper = shallow(<Test hook={useTodos} />);

    let props = wrapper.find("div").props();
    props.addTodo("Texto de prueba");
    props = wrapper.find("div").props();

    expect(props.todos[0]).toEqual({ text: "Texto de prueba" });
  });

  it("completeTodo", () => {
    const Test = (props) => {
      const hook = props.hook();
      return <div {...hook}></div>;
    };

    const wrapper = shallow(<Test hook={useTodos} />);

    let props = wrapper.find("div").props();
    props.completeTodo(0);
    props = wrapper.find("div").props();

    expect(props.todos[0]).toEqual({ text: "Todo 1", isCompleted: true });
  });

  it("removeTodo", () => {
    const Test = (props) => {
      const hook = props.hook();
      return <div {...hook}></div>;
    };

    const wrapper = shallow(<Test hook={useTodos} />);

    let props = wrapper.find("div").props();
    props.removeTodo(0);
    props = wrapper.find("div").props();

    expect(props.todos).toEqual([
      {
        text: "Todo 2",
        isCompleted: false,
      },
      {
        text: "Todo 3",
        isCompleted: false,
      },
    ]);
  });
});
