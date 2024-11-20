import styled from "styled-components";

export const StyleForAllProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 80px;
    color: #b83f45;
    font-weight: 200;
  }
  .section-input-noactiv {
    border: 1px solid (255, 0, 0, 0.1);
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  .section-input-activ {
    border: 1px solid red;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  .no-activ-form-input {
    height: 60px;
    width: 489px;
  }
  .activ-form-input {
    border: 1px solid red;
    height: 60px;
    width: 489px;
  }
  .activ-icon {
    background: url(https://img.icons8.com/?size=100&id=48464&format=png&color=000000)
      center no-repeat;
    background-size: 30px;
    height: 30px;
    width: 30px;
  }
  .no-activ-icon {
    visibility: hidden;
  }
  .input {
    margin-top: 20px;
    padding: 16px 16px 16px 60px;
    height: 65px;
    width: 498px;
    font-style: oblique;
    font-size: 24px;
    border: 1px solid #ffffff;
  }
`;

export const StylesforFooter = styled.div`
  padding-left: 20px;
  font-size: 15px;
  height: 50px;
  width: 550px;
  border: 0.4px solid #484848;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .buttons-filter {
    display: flex;
    gap: 20px;
  }
  .button-filter-activ {
    border: 1px solid red;
    padding: 5px;
  }
  .button-clear-active {
    border: none;
    padding: 5px;
  }
  .button-clear-hidden {
    border: none;
    padding: 5px;
    visibility: hidden;
  }
`;

export const TodoList = styled.div`
  user-select: none;
  height: 58.8px;
  width: 550px;
  font-size: 24px;
  font-weight: 400;
  color: "#00000";
  display: flex;
  border: 0.1px solid #484848;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
  .strikethrough-text {
    display: flex;
    gap: 20px;
    text-decoration: line-through;
    align-items: center;
    width: 100%;
  }
  .not-strikethrough-text {
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
  }
  .unfulfilled-task {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 0.4px solid #484848;
  }
  .completed-task {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 0.4px solid green;
    background: url(https://img.icons8.com/?size=100&id=115828&format=png&color=000000)
      center no-repeat;
    background-size: 20px;
  }
  .activ-todo {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  .no-activ-cross {
    visibility: hidden;
    display: flex;
    align-items: center;
    width: 30px;
    justify-content: space-between;
  }
  .activ-cross {
    width: 30px;
  }
`;
