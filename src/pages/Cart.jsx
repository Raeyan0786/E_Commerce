import React ,{useEffect} from 'react'
import {Container,Row,Col} from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
//import img1 from '../assets/images/arm-chair-01.jpg'
import '../styles/cart.css'
import { useDispatch,useSelector } from 'react-redux'
import {cartActions} from '../redux/slices/cartSlice'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Cart = () => {
  const cartItem=useSelector(state=> state.cart.cartItem)
  const totalAmount=useSelector(state=>state.cart.totalAmount)
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <Helmet title="Shop">
      <CommonSection title="Products"/>
      <section>
      <Container>
        <Row>
          <Col lg='9'>
            {
              cartItem.length ===0 ? ( <h2 className='fs-4 text-center'>No item added to cart</h2>) : (
                <table className="table bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
  
                <tbody>
                  { cartItem.map((item,index)=>(
                    <Tr item={item} index={index}/>
                  ))}
                </tbody>
              </table> 
              )
            }
            
          </Col>
          <Col lg='3'>
            <div>
              <h6 className='d-flex align-items-center justify-content-between'>Sub Total
              <span className='fs-4 fw-bold'>{totalAmount}</span>
              </h6>
              
            </div>
            <p className='fs-6 mt-4'>taxes and shipping will calculate in checkbox</p>
            <div>
              <button className="buy__btn w-100"><Link to='/checkout'>checkout</Link></button>
              <button className="buy__btn w-100 mt-3"><Link to='/shop'>continue shopping</Link></button>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
      
    </Helmet>  
    
  )
}

const Tr=({item,index})=>{
  const dispatch=useDispatch();
  const deleteItem=()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return(
    <tr key={index}>
      <td><img src={item.imgUrl} alt=''/></td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td ><motion.i whileTap={{scale:1.2}}  class="ri-delete-bin-line" onClick={deleteItem}></motion.i></td>
   </tr>
  )
}

export default Cart
