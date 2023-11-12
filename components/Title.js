import { Heading } from "evergreen-ui";
import { TitleWrap } from "../styles/components/title";

const Title = ({ theme, title, id }) => {
  let textColor = theme === "light" ? "#000" : "#F8FAFF";
  let textMuted = theme === "light" ? "#676f89" : "#8B93A8";
  return (
    <TitleWrap id={`${id}`}>
      <Heading
        is="h3"
        lineHeight={1.25}
        fontSize="0.75rem"
        fontWeight={600}
        textTransform="uppercase"
        color={textMuted}
        letterSpacing=".25rem"
        textAlign="center"
        
      >
        {title}
      </Heading>
    </TitleWrap>
  );
};

export default Title;
