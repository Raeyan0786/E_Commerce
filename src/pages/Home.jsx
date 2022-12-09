import React from 'react'
import '../styles/home.css'
import Helmet from '../components/Helmet/Helmet'
import {Container , Row, Col} from 'reactstrap'
import hero from '../assets/images/hero-img.png'
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion'
import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'
import { useState, useEffect } from 'react'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock'

const Home = () => {
  const year=new Date().getFullYear();
  const [trendingProducts,setTrendingProducts]=useState([]);
  const [bestSalesProducts,setBestSalesProducts]=useState([]);
  const [mobileProducts,setMobileProducts]=useState([]);
  const [wirelessProducts,setWirelessProducts]=useState([]);
  const [watchProducts,setWatchProducts]=useState([]);
  useEffect(()=>
  {
    const filterTrendingProducts= products.filter((item)=> item.category==='chair')
    setTrendingProducts(filterTrendingProducts);

    const filterBestSalesProducts= products.filter((item)=> item.category==='sofa')
    setBestSalesProducts(filterBestSalesProducts);

    const filterMobileProducts= products.filter((item)=> item.category==='mobile')
    setMobileProducts(filterMobileProducts);

    const filterWirelessProducts= products.filter((item)=> item.category==='wireless')
    setWirelessProducts(filterWirelessProducts);

    const filterWatchProducts= products.filter((item)=> item.category==='watch')
    setWatchProducts(filterWatchProducts);
  },[]);
  return (
    <Helmet title={"Home"}>
        <section className="hero__section">
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className='hero__content'>
                  <p className="hero__subtitle">rainding product in {year}</p>
                  <h2>Make Your Interior More Minimalistic & Modern</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta aspernatur obcaecati fuga sunt nesciunt unde eum enim officia illum voluptatem!</p>
                  <motion.button whileTap={{scale: 1.2}} className="buy__btn"><Link to="/shop">Shop Know</Link></motion.button>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="hero__img">
                  <img src={hero} alt=""/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Services/>
        <section className='trending__products'>
          <Container>
            <Row>
              <Col lg='12'>
                <div className='text-center'>
                  <h2 className='section__title'>Trending Products</h2>
                </div>
              </Col>
              <ProductsList data={trendingProducts}/>
            </Row>
          </Container>

        </section>
        <section className='best__sales'>
          <Container>
            <Row>
              <Col lg='12'>
                <div className='text-center'>
                  <h2 className='section__title'>Best Sales</h2>
                </div>
              </Col>
              <ProductsList data={bestSalesProducts}/>
            </Row>
          </Container>

        </section>
        <section className="timer__count">
          <Container>
            <Row>
              <Col lg='6' md='12' className="count__down-col">
                
                <div className="clock__top-content">
                  <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                  <h3 className="text-white fs-5 mb-3">Quality Armchairs</h3>
                </div>
                <Clock/>
                <motion.button whileTap={{scale:1.2}} className="store__btn"><Link to="stop">Visited Store</Link></motion.button>
              </Col>
              <Col lg='6' md='12' className="text-end counter__img">
                <img src={counterImg} alt='check'/>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='new__arrivals'>
          <Container>
            <Row>
              <Col lg='12'>
                <div className='text-center'>
                  <h2 className='section__title'>New Arrivals</h2>
                </div>
              </Col>
              <ProductsList data={mobileProducts}/>
              <ProductsList data={wirelessProducts}/>
            </Row>
          </Container>

        </section>
        <section className='popular__category'>
          <Container>
            <Row>
              <Col lg='12'>
                <div className='text-center'>
                  <h2 className='section__title'>Popular Category</h2>
                </div>
              </Col>
              <ProductsList data={watchProducts}/>
            </Row>
          </Container>

        </section>
    </Helmet>
  )
}

export default Home
