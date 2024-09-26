import Test from "./Test";

export default {
  component: Test,
  args: { label: "Test", size: "large" },
  argTypes: {
    onClick: { action: "Click fired" },

    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    backgroundColor: {
      control: { type: "color" },
    },
  },
  tags: ["autodocs"],
};

export const TestComponent = {};
