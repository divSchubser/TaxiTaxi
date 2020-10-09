import "./button.css";
import buttonPrimary from "./button.html";
import buttonSecondary from "./button-secondary.html";
import buttonBack from "./button-back.html";

export default {
  title: "Components/Buttons",
  parameters: { layout: "centered" },
};

export const ButtonPrimary = () => buttonPrimary;
export const ButtonSecondary = () => buttonSecondary;
export const ButtonBack = () => buttonBack;
