import { Heading } from "evergreen-ui";
import { TitleWrap } from "../styles/components/title";

const Title = ({ title, id }) => {
  return (
    <TitleWrap id={`${id}`}>
      <Heading
        is="h3"
        lineHeight={1.25}
        fontSize="0.75rem"
        fontWeight={600}
        textTransform="uppercase"
        color="#666"
        letterSpacing=".2rem"
        textAlign="center"
      >
        {title}
      </Heading>
    </TitleWrap>
  );
};

export default Title;
