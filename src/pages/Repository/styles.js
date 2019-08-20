import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 5px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const IssueFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
`;

export const ButtonFilter = styled.button`
  padding: 10px;
  /* margin: 0 0.25rem; */

  border-radius: 4px;
  outline: 0;
  border: 0;

  & + button {
    margin-left: 10px;
  }

  &:hover {
    background: ${darken(0.3, '#ddd')};
    color: white;
  }

  ${props =>
    props.activeIndex === props.indexButton &&
    css`
      background: #576574;
      color: white;
    `}
`;

export const PageActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin-top: 15px;
  /* border-top: 1px solid #eee; */
  border: 1px solid #eee;
  border-radius: 4px;
`;

export const ButtonPage = styled.button.attrs(props => ({
  disabled: props.page === 1,
}))`
  padding: 10px;
  margin: 10px;

  border-radius: 4px;
  outline: 0;
  border: 0;

  &:first-child[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    background: ${darken(0.3, '#ddd')};
    color: white;
  }
`;
