import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 10rem;
  }

  .projects{
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .projectdiv {
      flex: 0 0 calc(33.33% - 20px);
    }

    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--purple);
      }
      &.light{
        background-color: #ededed;
        color: var(--black);
        &:hover{
          transform: translateY(-5px);
          background-color: var(--purple);
          color: #FFF;
        }
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 2.6rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--orange);
          transition: color 0.25s;
          &:hover{
            color: var(--orange);
          }
          &.light{
            color: var(--black);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
          flex-wrap: wrap;
        }
      }

    }
  }


  @media (max-width: 1100px){
    .projects{
      .projectdiv {
      flex: 0 0 calc(50% - 20px);
      }
    }
   
  }
  @media (max-width: 800px){
    .projects{
      .projectdiv {
      flex: 0 0 calc(100% - 20px);
      }
    }
    
  }
`