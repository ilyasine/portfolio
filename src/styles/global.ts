import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`

  :root{
    --purple: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    --purple: #5e32aa;
    --orange: #ffb943;
    scroll-padding-top: 10rem;

    ::-webkit-scrollbar-track {
      background-color: var(--black);
    }

    &.light{
      ::-webkit-scrollbar-track{       
        background-color: #f5f5f5;
    }
      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        z-index: 1001;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }


  ::-webkit-scrollbar {
    width: 14px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--orange);
    border-radius: 20px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  ::-webkit-scrollbar-track.light {
    background-color: #f5f5f5;
  }
  ::selection {
    background: rgba(255, 217, 0, 0.459);
    background: var(--orange);
    //color: #fff;
  }

  .orangec{
      ::selection {
      background: rgba(255, 217, 0, 0.459);
      background: var(--orange);
      color: #fff;
      }
    }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--orange);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    .dr{
      color: var(--orange);
    }
  }
  

`