import { useState, useEffect } from 'react'
import {productItem} from '../data'
import Layout from "./layout";
import Carousel from 'react-bootstrap/Carousel';
import * as Icon from 'react-bootstrap-icons';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import styles from './card.module.scss'


 function Card({products}){

  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setData(productItem)
    /* setLoading(true)
      fetch(process.env.API_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      }) */
  }, [])

  /* if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p> */

    return ( 
      <>
      
    {data.map((item) => (
    <div key={item.id} className="shadow p-3 mb-5 bg-white rounded w-50">

    <Layout>

    <Carousel>
       <Carousel.Item>
        <img
          className="d-block w-100"
          src={item.sliderImage[0].imageUrl}
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={item.sliderImage[1].imageUrl}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={item.sliderImage[2].imageUrl}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={item.sliderImage[3].imageUrl}
        />
      </Carousel.Item> 
    </Carousel>

    <Breadcrumb className='mt-3 mx-3'>
      <Breadcrumb.Item href="#"><Icon.House/></Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Telefon
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">
        Cep Telefonu
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Apple</Breadcrumb.Item>
    </Breadcrumb>

    <div className="content mx-3">
      <h3 className={styles.productTitle}>{item.itemName}</h3>
      <button type="button" className="tag btn btn-secondary mx-1">{item.tag[0].tagName}</button>
      <button type="button" className="tagName btn btn-dark"><Icon.ShieldCheck className="mx-1"/>{item.tag[1].tagName}</button>
      <p className="mt-3">{item.description}</p>
      <button
        type="button"
        className="seller btn btn-light mt-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <div className="d-flex justify-content-left align-item-center">
        <div>
            <Icon.Person /> Satıcı: <b>{item.seller.name} </b> <div className="btn btn-warning"><Icon.Star style={{marginBottom: 3 +'px',marginRight: 3 + 'px'}}  />{item.seller.rating}</div>
        </div>
        
        
        </div>
       
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Satıcı: {item.seller.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className='d-flex flex-column gap-1'>
              <p>{item.seller.description}</p>
              <button type="button" className="btn btn-warning rating">Rating:{item.seller.rating}</button>
              <button type="button" className="btn btn-info sold">Total Sold:{item.seller.totalSold}</button>
            
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="priceArea mt-3">
        <div className={styles.prize}>{item.price} <span>{item.currencyTypeName}</span></div>
        <div className={styles.discountArea}>
            <div className={styles.discountPrizeArea}>
                <div className={styles.discountPrize}>
                    6780 TL
                    </div> 
                    <span>%5 bizden olsun</span>
                </div>
        </div>
        <div className={styles.cargo}>  <Icon.Box className="mx-2" /> <a href="#"> Ücretsiz Kargo</a></div>
        <div className={styles.installment}> <Icon.CreditCard className="mx-2" /><a href="#">{item.instalment}</a></div>
        <div className={styles.moneySafety}><Icon.Arrow90degLeft  className="mx-2" /><a href="#"> Paran Güvende</a></div>
        <div className=""> 
        <div className="shareAndLike d-flex justify-content-between mt-4">
            <>
            <div className={styles.shareAndLikeIconsArea}>
                <div className={styles.shareIcon}><a className="" href="#"><Icon.Upload /></a></div>
                <div className={styles.likeIcon}><a  href="#"><Icon.Heart /></a></div>
                
            </div>
                <button type="button" className="btn btn-dark">Hemen Al</button>
          
            
            </>
            </div>
            
      </div>
    </div>
    </div>
    </Layout>
    </div>
     ))}
     </>
    )
   }


/*    export async function getStaticProps(context) {
    // fetch the blog posts from the mock API
    const res = await fetch(`${process.env.API_URL}`);
    const posts = await res.json();
  
    return {
      props: { posts } // props will be passed to the page
    };
  } */

   export default Card;