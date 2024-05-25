
import './Slider.css'

import React, { useState } from 'react';

import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Carousel from 'react-elastic-carousel';
import Typewriter from "react-ts-typewriter";

let coursesData = [
  {
    english: "از ویژگی های به خصوص اینجا متد های به روز آموزشی و پیگیری اساتید هست هر زبان آموزی رو راضی میکنه", price: "Speaking",
    farsi: 'پرنیا طاهریان',
    city: 'تهران',

    src: 'Newfolder/ttt.jpg'
  },

  {
    english: "به نظرم پویان برای همیشه به نیکی در ذهنم خواهد ماند. من با پویان عاشق زبان شدم!",
    city: 'کرج',
    farsi: 'زهرا باقری',


    src: 'Newfolder/mmm.jpg'
  },




  {

    english: 'آموزشگاه پویان بهترین مرکز زبان در شیراز است ! با پویان موفق شدم مدرک تافل خودم رو بگیرم',
    city: 'شیراز',
    farsi: 'سمانه پورخادم',
    src: 'Newfolder/hhh.jpg'


  },
  {

    english: "بعداز شرکت در دوره تربیت مدرس پویان تونستم مدرک ttc خودم رو بگیرم.واقعا درجه یک هستن", price: "Speaking",
    city: 'همدان',
    farsi: "صدف  شیرازیان",

    src: 'Newfolder/ooo.jpg'
  },
  {

    english: 'آموزشگاه پویان بهترین مرکز زبان در شیراز است ! با پویان موفق شدم مدرک تافل خودم رو بگیرم',
    city: 'کرمانشاه',
    farsi: "منصوره  کیانی",

    src: 'Newfolder/uuu.jpg'


  },

]



function Slider() {

  const [show, setShow] = useState(0);

  const [score, setScore] = useState(0);
  const [second, setSecond] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {

    AOS.init({ disable: 'desktop' });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  function decresereState() {
    setShow(show + 1)
    if (
      show > 4
    ) {
      setShow(0)
    }

  }

  function reduceState() {
    setShow(show - 1)

    if (
      show < 0
    ) {
      setShow(0)
    }
  }

  function addsecond() {
    setSecond(second + 1)
  }

  return (

    <div >

      <div className='con'>
        <Carousel onPrevEnd={(currentItem, pageIndex) =>

          reduceState()

        }

          enableAutoPlay autoPlaySpeed={3500}

          onNextEnd={(currentItem, pageIndex) =>
            decresereState()
          }

          className='carusal' itemsToScroll={1} itemsToShow={3} rtl={true} >

          <div className='parent-image-slider' data-aos="zoom-in" data-aos-duration="550">





            <h1 className='hhh v'>
            {coursesData[0].english}

      
              <h className='score' >
                {coursesData[0].farsi}
              </h>


              <h className='score city' >
                {coursesData[0].city}
              </h>

              <img className='image-slider' src={coursesData[0].src}

              >
              </img >
            </h1>




          </div>

          <div className='parent-image-slider' data-aos="zoom-in" data-aos-duration="550">



            <h1 className='hhh v'>
              {coursesData[4].english}
              <h className='score' >
                {coursesData[4].farsi}
              </h>


              <h className='score city' >
                {coursesData[4].city}
              </h>
              <img className='image-slider' src={coursesData[4].src}



              >
              </img >

            </h1>



          </div>



          <div className='parent-image-slider' data-aos="zoom-in" data-aos-duration="550">
            <h1 className='hhh v'>
              {coursesData[2].english}
              <h className='score ' >
                {coursesData[2].farsi}
              </h>


              <h className='score city' >
                {coursesData[2].city}
              </h>

              <img className='image-slider' src={coursesData[2].src}



              >
              </img >
            </h1>





          </div>

          <div className='parent-image-slider' data-aos="zoom-in" data-aos-duration="550">


            <h1 className='hhh v'>
              {coursesData[3].english}
              <h className='score' >
                {coursesData[3].farsi}
              </h>


              <h className='score city' >
                {coursesData[3].city}
              </h>
              <img className='image-slider' src={coursesData[3].src}

              >
              </img >
            </h1>



          </div>
          <div className='parent-image-slider' data-aos="zoom-in" data-aos-duration="550">


            <h1 className='hhh v'>
              {coursesData[0].english}
              <h className='score' >
                {coursesData[0].farsi}
              </h>

              <h className='score city' >
                {coursesData[0].city}
              </h>

              <img className='image-slider' src={coursesData[0].src}

              >
              </img >

            </h1>




          </div>
          <div className='parent-image-slider' data-aos="zoom-in" data-aos-duration="550">



            <h1 className='hhh v'>
              {coursesData[1].english}
              <h className='score' >
                {coursesData[1].farsi}
              </h>


              <h className='score city' >
                {coursesData[1].city}
              </h>
              <img className='image-slider' src={coursesData[1].src}



              >
              </img >

            </h1>



          </div>


          <div className='parent-image-slider' data-aos="zoom-in" data-aos-duration="550">
            <h1 className='hhh v'>
              {coursesData[2].english}
              <h className='score' >
                {coursesData[2].farsi}
              </h>


              <h className='score city' >
                {coursesData[2].city}
              </h>
              <img className='image-slider' src={coursesData[2].src}



              >
              </img >
            </h1>






          </div>

          <div className='parent-image-slider' data-aos="zoom-in" data-aos-duration="550">


            <h1 className='hhh v'>
            {coursesData[3].english}
              <h className='score' >
                {coursesData[3].farsi}
              </h>


              <h className='score city' >
                {coursesData[3].city}
              </h>
              <img className='image-slider' src={coursesData[3].src}

              >
              </img >
            </h1>



          </div>









        </Carousel>
      </div>


    </div>

  );
}


export default Slider;