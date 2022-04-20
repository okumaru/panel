import { Logo } from "./logo";
import { Navigation } from "./navigation";
import "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <>
      {/* Logo */}
      <Logo />

      {/* Navigation */}
      <Navigation />
    </>
  );
};
