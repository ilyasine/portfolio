import styled from "styled-components"
import TopscrollIcon from '../../assets/topscrol-icon.svg';

export const Scrolltop =  styled.div`

    position: fixed;
    bottom:800px;
    right: 18px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    opacity: 0;
    z-index: 1000;
    background: url(${TopscrollIcon}) no-repeat center center / cover;
    transition: all .4s ease-in-out , bottom 1s ease-in ;
    -webkit-transition: all .4s ease-in-out , bottom 1s ease-in ;

  &.activescrol {
    opacity: 1;
    visibility: visible;
    bottom: 4vh;
    transition: all .4s ease-in-out , bottom 1s ease-out ; 
    -webkit-transition: all .4s ease-in-out , bottom 1s ease-out ; 
  }
  &:hover {
    filter: brightness(0.8);
    transform: scale(1.02);
    -webkit-transform: scale(1.02);
    transition: all .4s ease-in-out ;
    -webkit-transition: all .4s ease-in-out ;
  }
  `