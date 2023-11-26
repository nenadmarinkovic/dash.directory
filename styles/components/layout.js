import styled from 'styled-components';

export const MainSection = styled.section`
  flex: 1;
`;

export const ThemeLayout = styled.div`
  background: ${({ theme }) => theme.background};
  min-height: 95vh;
  display: flex;
  flex-direction: column;
`;

export const ContainerWrap = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  width: 100%;
  height: 100%;
  padding: 0 15px;

  @media (max-width: 25rem) {
    max-width: 100%;
  }

  @media (max-width: 1560px) {
    max-width: 72.8rem;
  }
`;

export const CenteredSection = styled.div`
  margin: 5.5rem 12.5rem 1.5rem 12.5rem;

  @media (max-width: 960px) {
    margin: 3.5rem 0;
  }
`;

export const CenteredLayout = styled.div`
  text-align: center;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageLayout = styled.div`
  display: flex;
  margin-top: 2.5rem;
  justify-content: space-between;

  .no-margins {
    margin: 0;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 1140px) {
    flex-direction: column;
    align-items: unset;
    gap: 10px;
    width: 100%;
  }
`;

export const InputHeader = styled.div`
  position: relative;

  @media (max-width: 1140px) {
    width: 100%;
  }

  input {
    width: 520px;
    height: 38px;
    font-size: 13px;
    background: ${({ theme }) => theme.clear};
    border: 1px solid rgba(200, 200, 200, 0.4);

    &.full-width {
      width: 718px;
    }

    @media (max-width: 1140px) {
      width: 100%;
    }
  }

  svg {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 10px;
    top: 11px;
    color: ${({ theme }) => theme.textMuted};
  }
`;

export const GroupOptions = styled.div`
  button {
    width: 80px;
  }
`;

export const PageMain = styled.div`
  background: ${({ theme }) => theme.clear};
  margin-top: 1.5rem;
`;
