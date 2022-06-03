import { C_Box, C_Header, C_Main } from "../_storybook/Components";
import { Spinner } from "./Spinner";

export default {
  title: "Components/Spinner"
};

export const Large = () => {
  return (
    <C_Main>
      <C_Header title="Spinner/Large" description="" />

      <C_Box>
        <Spinner />
      </C_Box>
    </C_Main>
  );
};

export const Small = () => {
  return (
    <C_Main>
      <C_Header title="Spinner/Small" description="" />

      <C_Box>
        <Spinner size="small" />
      </C_Box>
    </C_Main>
  );
};
