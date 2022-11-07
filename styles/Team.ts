import styled from "styled-components";

export const Profile = styled.li`
  display: inherit;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 450px;
  height: 250px;
  border: 1px rgba(155, 155, 155, 0.23) solid;
  border-radius: 15px;

  box-shadow: 0px 15px 20px -20px #6e6e6e;
  .profile-img {
    background: red;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 4rem;
  }

  p {
    font-size: 2.4rem;
  }

  .gradient-green{
    position: absolute;
    left: 5px;
    z-index: -1;
  }

  .gradient-yellow{
    position: absolute;
    left: 350px;
    z-index: -1;
  }

  .gradient-purple{
    position: absolute;
    right: -50px;
    z-index: -1;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 6rem;
    margin-top: 8rem;
  }
`;

export const ProfileList = styled.ul`
  display: inherit;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
