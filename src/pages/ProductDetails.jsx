import React,{useState,useRef,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import {Container,Row,Col} from 'reactstrap'
import products from '../assets/data/products'
import '../styles/product-detail.css'
import { motion } from 'framer-motion'
import ProductsList from '../components/UI/ProductsList'
import {  toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import {cartActions} from '../redux/slices/cartSlice'

const ProductDetails = () => {
  const [tab,setTab]=useState("desc");
  const reviewUser=useRef('')
  const reviewMsg=useRef('')
  const [rating,setRating]=useState(0);
  const {id}=useParams();
  const dispatch=useDispatch();
  const product=products.find((item)=>item.id===id)
  const {productName,price,imgUrl,avgRating,reviews,shortDesc,description,category}=product
  const relatedProducts=products.filter((item)=> item.category===category)

  const submitHandler=(e)=>{
    e.preventDefault()
    const reviewUserName=reviewUser.current.value
    const reviewUserMsg=reviewMsg.current.value

    const reviewObj={
      Name:reviewUserName,
      text:reviewUserMsg,
      rating
    }
    //console.log(reviewUserName,reviewUserMsg,rating)
    console.log(reviewObj);
    toast.success("Review submitted")
  }
  const addToCart=()=>{
    dispatch(cartActions.addItem({
      id,
      productName,
      imgUrl:imgUrl,
      price,
    }))

    toast.success("Product add successfully")
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[product])
  return (
    <Helmet title={productName}>
      <CommonSection title={productName}/>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt=""/>
            </Col>
            <Col lg='6'>
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-item-center gap-5">
                  <div>
                    <span >
                      <i class="ri-star-fill"></i>
                    </span>
                    <span >
                      <i class="ri-star-fill"></i>
                    </span>
                    <span >
                      <i class="ri-star-fill"></i>
                    </span>
                    <span >
                      <i class="ri-star-fill"></i>
                    </span>
                    <span >
                      <i class="ri-star-half-fill"></i>
                    </span>
                  </div>
                  <p>(<span>{avgRating}</span>)Ratings</p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">${price}</span>
                  <span>Category: {category}</span>
                </div>
                
                <p>{shortDesc}</p>
                <motion.button whileTap={{scale:1.2}} className="buy__btn" onClick={addToCart}>Add TO Cart</motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab==="desc" ? "active__tab" : ""}`} onClick={()=> setTab("desc")}>Description</h6>
                <h6 className={`${tab==="rev" ? "active__tab" : ""}`} onClick={()=> setTab("rev")}>Reviews({reviews.length})</h6>
              </div>
              {
                tab==="desc" ? <div className="tab__content mt-5">
                <p>{description}</p>
              </div> : <div className="product__review mt-5">
                <div className="product__wrapper">
                  <ul>
                    {reviews.map((item,index)=>(
                      <li key={index} className='mb-4'>
                        <h6>Raeyan khan</h6>
                        <span>{item.rating} ( Rating)</span>
                        <p>{item.text}</p>
                      </li>
                   ))}
                  </ul>
                  <div className="review__form">
                    <h6>Leave your experience</h6>
                    <form onClick={submitHandler}>
                      <div className="form__group">
                        <input type="text" placeholder="Enter name" ref={reviewUser} required/>
                      </div>
                      <div className="form__group d-flex align-item-center gap-5 rating__group">
                        <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(1)} >1<i class="ri-star-fill"></i></motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(2)}>2<i class="ri-star-fill"></i></motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(3)}>3<i class="ri-star-fill"></i></motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(4)}>4<i class="ri-star-fill"></i></motion.span>
                        <motion.span whileTap={{scale:1.2}} onClick={()=> setRating(5)}>5<i class="ri-star-fill"></i></motion.span>
                      </div>
                      <div className="form__group">
                        <textarea rows={4} type="text" placeholder="Review Message..." ref={reviewMsg} required/>
                      </div>
                      <motion.button type='submit' className="buy__btn" >Submit</motion.button>
                    </form>
                  </div>
                </div>
              </div>
              }

              
            </Col>
            <Col lg='12' className='mt-5'>
              <h2 className="related__item">you might also like it</h2>
            </Col>
            <ProductsList data={relatedProducts}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails