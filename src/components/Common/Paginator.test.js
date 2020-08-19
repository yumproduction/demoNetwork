import React from "react";
import { create } from "react-test-renderer";
import Paginator from "./Paginator";

describe("ProfileStatus component", () => {
  test("status is in state", () => {
    const component = create(<Paginator totalUserCount={11} pageSize ={1} portionSize ={10} />);
    const root = component.root;
    let spans = root.findAllByType('span');
    expect(spans.length).toBe(10);
  });

  test("status is in state", () => {
    const component = create(<Paginator totalUserCount={11} pageSize ={1} portionSize ={10} />);
    const root = component.root;
    let button = root.findAllByType('button');
    expect(button.length).toBe(1);
  });

})