import styled from 'styled-components';

//App
export const MainContainer = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
`;

//Layout
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

//Aside
export const AsideContent = styled.aside`
  background-color: rgb(221, 221, 221);
  border-right: 2px solid #ddd;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  color: #4c4c4c;
  display: none;
  height: 100%;
  max-width: 380px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 24px 24px 48px;
  position: relative;
  width: 100%;
  z-index: 1;
  ${media.desktop`
    display: block;
  `}
  .chart-area {
    align-items: center;
    background-color: #fff;
    border: 1px solid rgb(204,204,204);
    display: flex;
    justify-content: center;
    margin-top: 24px;
    padding: 8px;
  }
`;

export const AsideContainer = styled.div`
  background-color: #fff;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  padding: 16px;
  > h2 {
    color: #ef3b2c;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  > p {
    font-size: 18px;
    &.active-cases {
      color: #333;
    }
    &.deaths {
      color: #777;
    }
    &.recovered {
      color: #198700
    }
  }
  > p:not(:last-child) {
    margin-bottom: 16px;
  }
  p > small {
    font-size: 14px;
  }
`;

export const AsideChartContainer = styled.div`
  height: 300px;
  width: 100% ;
`;