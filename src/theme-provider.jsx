/* eslint-disable react/jsx-no-useless-fragment */
import { Theme } from "@radix-ui/themes";
import { useEffect } from "react";

export const ThemeProvider = ({ children, ...props }) => {
  useEffect(() => {
    switch (props.appearance) {
      case "light": {
        if (document?.body) {
          document.body.classList.remove("light", "dark");
          document.body.classList.add("light");
        }

        break;
      }
      case "dark": {
        if (document?.body) {
          document.body.classList.remove("light", "dark");
          document.body.classList.add("dark");
        }

        break;
      }
      default: {
        //
      }
    }
  }, [props.appearance]);

  return (
    <Theme {...props}>
      <>{children}</>
    </Theme>
  );
};
