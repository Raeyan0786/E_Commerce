import React, {useRef, useEffect  } from 'react'
import {useSelector} from 'react-redux'
import './header.css'
import {Container, Row} from 'reactstrap'
import { NavLink,useNavigate } from 'react-router-dom'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { motion } from 'framer-motion'

const nav__link=[
  {
    path:"home",
    display:"Home"
  },
  {
    path:"shop",
    display:"Shop"
  },
  {
    path:"cart",
    display:"Cart"
  },
]

//const [isActive , setActive]=useState(false);
const Header = () => {
  const navigate=useNavigate()
  const totalQuantity=useSelector(state=>state.cart.totalQuantity);
  const headRef=  useRef(null)
  const menuRef=  useRef(null)
  const stickyHeaderFunc = () =>
  {
    window.addEventListener('scroll',() =>
    {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 )
      {
        headRef.current.classList.add("sticky__header");
      }
      else
      {
        headRef.current.classList.remove("sticky__header");
      }
    })
  }
  const navigateToCart=()=>
  {
    navigate("/cart");
  }
  useEffect(()=>
  {
    stickyHeaderFunc();

    return window.removeEventListener("scroll",stickyHeaderFunc)
  })

  const menutoggle = () => menuRef.current.classList.toggle('active__menu')
  return (
    <header className='header' ref={headRef}>
      <Container>
        <Row>
          <div className='nav-wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo'></img>
              <div>
                <h1>Multimart</h1>
              </div>
            </div>
          

          <div className='Navigation' ref={menuRef} onClick={menutoggle}>
            <ul className='menu'>
              {nav__link.map((item,index)=>
              (
                <li className='nav__item' key={index}>
                <NavLink to={item.path} className={(navClass)=>
                navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
            </li>
              ))}
            </ul>
          </div>

          <div className='nav__icons'>
            <span className='fav__icon'>
              <i class="ri-heart-line"></i>
              <span className="badge">1</span>
            </span>
            <span className='cart__icon' onClick={navigateToCart}>
              <i class="ri-shopping-bag-line" ></i>
              <span className="badge">{totalQuantity}</span>
            </span>
            <span>
              <motion.img whileTap={{scale:1.2}} src={userIcon} alt='user icon'/>
            </span>
            <div className="mobile-menu">
              <span onClick={menutoggle}><i class="ri-menu-line"></i></span>
            </div>
        </div>
            
          </div>

          
        </Row>
      </Container>
    </header>
  )
}

export default Header