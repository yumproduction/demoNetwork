import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
describe("ProfileStatus component", () => {
  test("status is in state", () => {
    const component = create(<ProfileStatus status="status here" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("status here");
  });

  test("span <span>", () => {
    const component = create(<ProfileStatus status="status here" />);
    const root = component.root;
    let input = root.findByType("input");
    expect(input).not.toBeNull();
  });

});