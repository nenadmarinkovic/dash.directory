import { Text } from 'evergreen-ui';
import { TitleWrap } from '../styles/components/title';
import { useThemeColors } from '../styles/theme';

const Title = ({ theme, title, id }) => {
  const { textMuted } = useThemeColors(theme);
  return (
    <TitleWrap id={`${id}`}>
      <Text
        lineHeight={1.25}
        fontSize='0.75rem'
        fontWeight={600}
        textTransform='uppercase'
        color={textMuted}
        letterSpacing='.25rem'
      >
        {title}
      </Text>
    </TitleWrap>
  );
};

export default Title;
