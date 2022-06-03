import { C_Box, C_Header } from "../_storybook/Components";
import { Typography } from "./Typography";

export default {
  title: "Components/Typography"
};

export const DisplayText = () => {
  return (
    <main>
      <C_Header
        title="Typography/DisplayText"
        description="This component is used to distinguish major headings such as page titles and section titles."
      />

      <C_Box>
        <Typography.DisplayText>ExtraLarge</Typography.DisplayText>
      </C_Box>

      <C_Box>
        <Typography.DisplayText size="large">Large</Typography.DisplayText>
      </C_Box>

      <C_Box>
        <Typography.DisplayText size="medium">Medium</Typography.DisplayText>
      </C_Box>

      <C_Box>
        <Typography.DisplayText size="small">Small</Typography.DisplayText>
      </C_Box>
    </main>
  );
};

export const Heading = () => {
  return (
    <main>
      <C_Header
        title="Typography/Heading"
        description="This is useful for clarifying subheadings within small components such as cards and modals"
      />

      <C_Box>
        <Typography.Heading>Heading</Typography.Heading>
      </C_Box>
    </main>
  );
};

export const Subheading = () => {
  return (
    <main>
      <C_Header
        title="Typography/Subheading"
        description="This used for the title of any sub-sections in top-level sections."
      />
      <C_Box>
        <Typography.Subheading>My Account</Typography.Subheading>
      </C_Box>
    </main>
  );
};

export const Container = () => {
  return (
    <main>
      <C_Header
        title="Typography/Container"
        description="This used to add a certain amount of whitespace when encapsulating multiple texts."
      />

      <C_Box>
        <Typography.Container>
          <Typography.Heading>Default spacing</Typography.Heading>
          <p>This component uses css to create spacing for the children.</p>
        </Typography.Container>
      </C_Box>

      <C_Box>
        <Typography.Container spacing="loose">
          <Typography.Heading>Loose spacing</Typography.Heading>
          <p>This component uses css to create spacing for the children.</p>
        </Typography.Container>
      </C_Box>

      <C_Box>
        <Typography.Container spacing="tight">
          <Typography.Heading>Tight spacing</Typography.Heading>
          <p>This component uses css to create spacing for the children.</p>
        </Typography.Container>
      </C_Box>
    </main>
  );
};

export const TextStyle = () => {
  return (
    <main>
      <C_Header
        title="Typography/TextStyle"
        description="This component helps to give consistent styling rules to a piece of text."
      />

      <C_Box>
        <Typography.Style variation="negative">negative</Typography.Style>
      </C_Box>

      <C_Box>
        <Typography.Style variation="warning">warning</Typography.Style>
      </C_Box>

      <C_Box>
        <Typography.Style variation="strong">strong</Typography.Style>
      </C_Box>

      <C_Box>
        <Typography.Style variation="muted">muted</Typography.Style>
      </C_Box>

      <C_Box>
        <Typography.Style variation="code">code</Typography.Style>
      </C_Box>
    </main>
  );
};

export const Clamp = () => {
  return (
    <main>
      <C_Header
        title="Typography/Clamp"
        description="Truncates text across multiple lines by a specified number of lines."
      />

      <C_Box>
        <Typography.Clamp>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices cursus ornare. Aliquam erat
          volutpat. Mauris in neque ut diam iaculis vestibulum. Curabitur euismod aliquet odio id rutrum. Vestibulum sed
          metus vitae augue tincidunt egestas. Donec eu lectus commodo, placerat tellus at, tincidunt lacus. Duis ac
          pretium ex. Vivamus sodales, est ut finibus dictum, nibh enim semper nulla, a pretium ex magna nec ex. Morbi
          ac laoreet neque. Integer et arcu sed ante dictum pellentesque ut ac odio. In id consectetur augue. Praesent
          sit amet urna lectus. Phasellus molestie leo vel orci facilisis, nec pharetra metus commodo. Sed sed augue
          quis magna ornare maximus quis in turpis. Aliquam erat volutpat. Phasellus mollis arcu convallis erat maximus
          dapibus.
        </Typography.Clamp>
      </C_Box>
    </main>
  );
};

export const CJK = () => {
  return (
    <main>
      <C_Header
        title="Typography/CJK"
        description="This component is a helper for beautifully styling CJK languages on the web. It uses google/budoux for character parsing."
      />

      <C_Box>
        <Typography.CJK lang="japanese">
          このコンポーネントは、CJK言語をweb上で美しくスタイリングするためのヘルパーです。 文字解析には
          <a href="https://google.github.io/budoux/" target="_blank" rel="noreferrer noopener">
            google/budoux
          </a>
          を使用しております。
        </Typography.CJK>
      </C_Box>
    </main>
  );
};

export const Inline = () => {
  return (
    <main>
      <C_Header title="Typography/Inline" description="Helper for rendering inline elements." />

      <C_Box>
        <Typography.Inline variation="emphasis">emphasis</Typography.Inline>
      </C_Box>

      <C_Box>
        <Typography.Inline variation="italic">italic</Typography.Inline>
      </C_Box>

      <C_Box>
        <Typography.Inline variation="strikethrough">strikethrough</Typography.Inline>
      </C_Box>

      <C_Box>
        <Typography.Inline variation="strong">strong</Typography.Inline>
      </C_Box>

      <C_Box>
        <Typography.Inline variation="underline">underline</Typography.Inline>
      </C_Box>
    </main>
  );
};

export const VisuallyHidden = () => {
  return (
    <main>
      <C_Header
        title="Typography/VisuallyHidden"
        description="This maintains accessibility to assistive technology while visually hiding elements."
      />
      <C_Box>
        <p>default</p>
        <Typography.VisuallyHidden>Visually Hidden Text</Typography.VisuallyHidden>
      </C_Box>

      <C_Box>
        <p>focusable</p>
        <Typography.VisuallyHidden focusable extend>
          <a href="#main">Focusable example</a>
        </Typography.VisuallyHidden>
      </C_Box>
    </main>
  );
};
