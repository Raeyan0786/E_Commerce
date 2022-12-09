import React, {useState,useEffect}from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import {Container,Row,Col} from 'reactstrap'
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList'

const Shop = () => {
  const [filter,setFilter]=useState(products);
  const handleChange=(e)=>
  {
    const filtervalue=e.target.value
    if(filtervalue==="")
    {
      //const FilterProduct=products.filter((item)=> item.category==="sofa")
      setFilter(products);
    }
    if(filtervalue==="sofa")
    {
      const FilterProduct=products.filter((item)=> item.category==="sofa")
      setFilter(FilterProduct);
    }
    if(filtervalue==="chair")
    {
      const FilterProduct=products.filter((item)=> item.category==="chair")
      setFilter(FilterProduct);
    }
    if(filtervalue==="mobile")
    {
      const FilterProduct=products.filter((item)=> item.category==="mobile")
      setFilter(FilterProduct);
    }
    if(filtervalue==="watch")
    {
      const FilterProduct=products.filter((item)=> item.category==="watch")
      setFilter(FilterProduct);
    }
    if(filtervalue==="wireless")
    {
      const FilterProduct=products.filter((item)=> item.category==="wireless")
      setFilter(FilterProduct);
    }
  }

  const handleSearch=(e)=>{
    const searchValue=e.target.value
    const SearchFilter=products.filter((item)=> item.productName.toLowerCase().includes(searchValue.toLowerCase()))
    setFilter(SearchFilter);
  }
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <Helmet title="Shop">
      <CommonSection title="Products"/>

      <section>
        <Container>
          <Row className='d-flex align-items-center justify-content-between'>
            <Col lg='3' md='6'>
              <div className="filter__widget">
                <select onChange={handleChange}>
                  <option value="" >Filter By Category</option>
                  <option value="chair">Chair</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            
            <Col lg='6' md='6'>
              <div className="search__box">
                <input type="search" placeholder='Search.......' onChange={handleSearch}/>
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>

            </Col>
          </Row>
          
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {
              filter.length===0 ? <h1 className="text-center fs-4">No products are found!</h1> : 
                <ProductsList data={filter}/>
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop
