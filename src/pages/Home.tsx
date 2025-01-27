import { styled } from 'styled-components';
import Search from '../components/Search';
import Header from '../components/common/Header';

export default function Home() {
  return (
    <StyledLayout>
      <Header />
      <Search />
      <div>
        <h3>검색결과 ...</h3>
      </div>
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
`;
