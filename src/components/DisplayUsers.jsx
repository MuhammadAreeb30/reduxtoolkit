import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";
import { MdDeleteForever } from "react-icons/md";

const DisplayUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <>
      <Wrapper>
        {data.map((curUser, id) => {
          return (
            <li key={id}>
              {curUser}
              <button className="btn-delete" onClick={() => deleteUser(id)}>
                <MdDeleteForever className="delete-icon" />
              </button>
            </li>
          );
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  li {
    width: 96%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }

  .btn-delete {
    background-color: transparent;
    border: 0;
    color: #fff;
  }
`;

export default DisplayUsers;
