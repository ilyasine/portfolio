import {useState} from 'react';
import {Scrolltop} from './srollstyle'


export default function Topscroll() {

  const [scroll, setScroll] = useState(false);

  window.addEventListener('scroll', () => {
    window.scrollY > 100 ? setScroll(true) : setScroll(false) ;
  })

  return (
    <Scrolltop className={scroll ? "activescrol" : "" }
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}> 
    </Scrolltop>
  );
}