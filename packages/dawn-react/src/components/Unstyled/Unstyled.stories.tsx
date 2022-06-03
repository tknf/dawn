import { C_Header, C_Box } from "../_storybook/Components";
import { Unstyled } from "./Unstyled";

export default {
  title: "Components/Unstyled"
};

export const Link = () => {
  return (
    <main>
      <C_Header title="Unstyled/Link" description="Link component with no style." />

      <C_Box>
        <Unstyled.Link url="/">Link</Unstyled.Link>
      </C_Box>
    </main>
  );
};

export const DefaultButton = () => {
  return (
    <main>
      <C_Header title="Unstyled/Button" description="Button component with no style." />

      <C_Box>
        <Unstyled.Button>Default Button</Unstyled.Button>
      </C_Box>

      <C_Box>
        <Unstyled.Button submit>Submit Button</Unstyled.Button>
      </C_Box>

      <C_Box>
        <Unstyled.Button url="/">Link Button</Unstyled.Button>
      </C_Box>
    </main>
  );
};
