import { Hamburger } from "@tknf/dawn-icons";
import { C_Box, C_Header, C_Main } from "../_storybook/Components";
import { Icon } from "./Icon";

export default {
  title: "Components/Icon"
};

export const Default = () => {
  return (
    <C_Main>
      <C_Header title="Icon/Default" description="" />

      <C_Box>
        <Icon source={Hamburger} />
      </C_Box>
    </C_Main>
  );
};

export const Placeholder = () => {
  return (
    <C_Main>
      <C_Header title="Icon/Placeholder" description="" />

      <C_Box>
        <Icon source="placeholder" />
      </C_Box>
    </C_Main>
  );
};

export const External = () => {
  return (
    <C_Main>
      <C_Header title="Icon/External" description="" />

      <C_Box>
        <Icon
          source={encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m11.414 10 6.293-6.293a1 1 0 1 0-1.414-1.414l-6.293 6.293-6.293-6.293a1 1 0 0 0-1.414 1.414l6.293 6.293-6.293 6.293a1 1 0 1 0 1.414 1.414l6.293-6.293 6.293 6.293a.998.998 0 0 0 1.707-.707.999.999 0 0 0-.293-.707l-6.293-6.293z"/></svg>`
          )}
        />
      </C_Box>
    </C_Main>
  );
};
