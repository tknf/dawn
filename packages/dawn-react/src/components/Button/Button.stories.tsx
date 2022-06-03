import { Hamburger } from "@tknf/dawn-icons";
import { C_Header, C_Box, C_Main } from "../_storybook/Components";
import { Button } from "./Button";

export default {
  title: "Components/Button"
};

export const Default = () => {
  return (
    <main>
      <C_Header title="Button/Default" description="" />

      <C_Box>
        <Button text="Default" />
      </C_Box>

      <C_Box>
        <Button loading text="Loading" />
      </C_Box>

      <C_Box>
        <Button disabled text="Disabled" />
      </C_Box>

      <C_Box>
        <Button fullWidth text="Full width" />
      </C_Box>

      <C_Box>
        <Button pressed text="Pressed" />
      </C_Box>

      <C_Box>
        <Button size="small" text="Small" />
      </C_Box>

      <C_Box>
        <Button size="large" text="Large" />
      </C_Box>

      <C_Box>
        <Button destructive text="Destructive" />
      </C_Box>
    </main>
  );
};

export const Plain = () => {
  return (
    <main>
      <C_Header title="Button/Plain" description="" />

      <C_Box>
        <Button plain text="Default" />
      </C_Box>

      <C_Box>
        <Button plain removeUnderline text="Remove underline" />
      </C_Box>

      <C_Box>
        <Button plain monochrome text="Monochrome" />
      </C_Box>

      <C_Box>
        <Button plain loading text="Loading" />
      </C_Box>

      <C_Box>
        <Button plain disabled text="Disabled" />
      </C_Box>

      <C_Box>
        <Button plain fullWidth text="Full width" />
      </C_Box>

      <C_Box>
        <Button plain size="small" text="Small" />
      </C_Box>

      <C_Box>
        <Button plain size="large" text="Large" />
      </C_Box>

      <C_Box>
        <Button plain destructive text="Destructive" />
      </C_Box>
    </main>
  );
};

export const Primary = () => {
  return (
    <main>
      <C_Header title="Button/Plain" description="" />

      <C_Box>
        <Button primary text="Default" />
      </C_Box>

      <C_Box>
        <Button primary loading text="Loading" />
      </C_Box>

      <C_Box>
        <Button primary disabled text="Disabled" />
      </C_Box>

      <C_Box>
        <Button primary fullWidth text="Full width" />
      </C_Box>

      <C_Box>
        <Button primary pressed text="Pressed" />
      </C_Box>

      <C_Box>
        <Button primary size="small" text="Small" />
      </C_Box>

      <C_Box>
        <Button primary size="large" text="Large" />
      </C_Box>

      <C_Box>
        <Button primary destructive text="Destructive" />
      </C_Box>
    </main>
  );
};

export const Outline = () => {
  return (
    <main>
      <C_Header title="Button/Outline" description="" />

      <C_Box>
        <Button outline text="Default" />
      </C_Box>

      <C_Box>
        <Button outline loading text="Loading" />
      </C_Box>

      <C_Box>
        <Button outline disabled text="Disabled" />
      </C_Box>

      <C_Box>
        <Button outline fullWidth text="Full width" />
      </C_Box>

      <C_Box>
        <Button outline pressed text="Pressed" />
      </C_Box>

      <C_Box>
        <Button outline size="small" text="Small" />
      </C_Box>

      <C_Box>
        <Button outline size="large" text="Large" />
      </C_Box>

      <C_Box>
        <Button outline destructive text="Destructive" />
      </C_Box>
    </main>
  );
};

export const Managed = () => {
  return (
    <C_Main>
      <C_Header title="Button/Outline" description="" />

      <C_Box>
        <Button primary>
          <Button.Text>TEST</Button.Text>
          <Button.Icon source={Hamburger} />
          <Button.Spinner />
        </Button>
      </C_Box>

      <C_Box>
        <Button iconOnly plain>
          <Button.Icon source={Hamburger} aria-label="Icon Only" />
        </Button>
      </C_Box>
    </C_Main>
  );
};
