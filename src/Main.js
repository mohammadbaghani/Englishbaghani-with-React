import React from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

import './Main.css';
import { SiYoutubemusic } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import Slider from "./Slider/Slider";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useState } from "react";

import { styled } from '@mui/material/styles';

import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,

} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './Accordian.css';
import Header from './components/Header'

import Type from './typewriter'
import { FaMusic } from "react-icons/fa";
import { useNavigate, } from 'react-router-dom';
import Footer from './Footer';

import Ticket from './components/Ticket/Ticket';
import Navside from './Navside';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { MdKeyboardArrowDown } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';


import P from './Particlecopy';
import Typewriter from "react-ts-typewriter";




const Accordion = styled((props: AccordionProps) => (

  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

}));
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowBackIosNewIcon sx={{ fontSize: '2rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    color: 'red',

    transform: 'rotate(270deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),

}));




function Main() {




  let navigate = useNavigate()
  const [expanded, setExpanded] = React.useState('false');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const [mutedVideo, setMutedVideo] = useState(true);
  const [mo, setMo] = useState('scroll-button');
  const [height, setHeight] = useState('fixed');
  const [fixedchild, setFixedchild] = useState('fixed-child ccc');
  const [fixedchildclick, setFixedchildclick] = useState('fixed-child-click');
  const [fixedchildclickupper, setFixedchildclickupper] = useState('fixed-child-click upper-click');
  const scrollToTop = () => {

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });



  };


  const scrolcontactus = () => {

    window.scrollTo({ top: 5620, right: 0, behavior: 'smooth' });


  };

  const scrolwhyus = () => {

    window.scrollTo({ top: 1645, right: 0, behavior: 'smooth' });



  };

  const scrocourses = () => {

    window.scrollTo({ top: 2700, right: 0, behavior: 'smooth' });



  };
  const scrolupgrade = () => {

    window.scrollTo({ top: 0, right: 0, behavior: 'smooth' });



  };

  const scrolquestions = () => {

    window.scrollTo({ top: 6300, right: 0, behavior: 'smooth' });



  };

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isServer = typeof window === 'undefined'


  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 600) {
        setShow(false);
      }


      else {
        setShow(true);

      }


      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);


    }
  }, [lastScrollY]);



  const [newclasone, setNewclassone,] = useState(false);
  const [newclassthree, setNewclassthree,] = useState(false);
  const [newclasstow, setNewclasstow,] = useState(true);
  const [newclassfour, setNewclassfour] = useState(false);
  const [newstate, setNewstate,] = useState(2);
  const [isActive, setIsActive] = useState(true);
  const changeclassone = () => {



    setNewclasstow(false)
    setNewclassthree(false)
    setNewclassfour(false)
    setNewclassone(!newclasone)


    setNewstate(0)


  }

  const changeclasstow = () => {

    setNewclassone(false)


    setNewclassthree(false)
    setNewclassfour(false)
    setNewclasstow(!newclasstow)


    setNewstate(2)
  }
  const changeclassthree = () => {

    setNewclassone(false)

    setNewclasstow(false)
    setNewclassfour(false)
    setNewclassthree(!newclassthree)
    setNewstate(1)
  }
  const changeclassfour = () => {

    setNewclassone(false)
    setNewclasstow(false)

    setNewclassthree(false)
    setNewclassfour(!newclassfour)
    setNewstate(3)


  }
  const setHeightg = () => {
    if (height === "fixed") {
      setHeight('fixed hh')
      setFixedchild('fixed-child ccc')
      setFixedchildclick('fixed-child-click')
      setFixedchildclickupper('fixed-child-click upper-click')
    }

    else {
      setHeight('fixed')
      setFixedchild('fixed-child')
      setFixedchildclick('fixed-child-click fff')
      setFixedchildclickupper('fixed-child-click upper-click fff')
    }




  }
  let a = {
    products: [
      {
        star: 4,
        title: "استاد منیژه خردمند ",

        price: "Manijeh Keradmand", img: 'Newfolder/13.png',
        benefits: 'مدرس دوره های مکالمه ',

      },

      {
        title: "استاد  بابک نوین بخش ",


        price: "Babak Bakhshi", img: 'Newfolder/12.png',
        benefits: 'مدرس دوره Tofel ',
      },


      {

        title: "استاد نیوشا اسکندریان ",
        price: "Niosha Eskandarian", img: 'Newfolder/11.png',
        benefits: 'مدرس دوره TTC ',
      },

      {

        title: "استاد علی خان زاد", price: "ddd",
        benefits: 'مدرس دوره Ilets ',

        price: "Ali Khan zad",
        img: 'Newfolder/TTC11.png',
      },




    ],
    coursesprice: [700, 550, 650, 900, 750, 850],
  }
  const ha = () => {


    if (isActive === true) {
      setIsActive(false)

    }
    else (
      setIsActive(true)

    )

  }

  useEffect(() => {

    AOS.init({ disable: 'desktop' });
  }, []);

  return (<>
    <div>





      <Container className='container-valed-navbar' >

        <Navbar className='valed-navbar' >




          <Nav className={show ? 'nav' : 'nav navdown'}>

            <img className='logoimage-header logoimage' src="easli.png" href="/" >

            </img>





            <figure className={show ? 'shop-count z-i' : 'shop-count z-i upper-count'}>
              <img class="shop-count-image" src="cart.png" />

              سبد خرید
              <span className='shop-count-count' >


                0
              </span>


            </figure>

            <button className='button-register' onClick={() => {
              navigate('/ثبت نام')
            }}>
              ورود / ثبت نام




              <img class="userimage" />
            </button>



            <ul class="valed-ul">
              <Link className='main-navy navf  tr' to="/">
                <li class=" parentnav ">

                  دوره ها<MdKeyboardArrowDown class="arrow" />
                  <ul class="inside-nav">

                    <div class="left-nav">








                      <Link className=' secondy underline-left tis'>
                        دوره های عمومی


                      </Link>


                      <Link className='secondy left-ch' to={`/e/${4}`}>
                        کودکان
                        <img src="../images/image-courses/how-to-prepare-for-toefl-750x430.webp" className='link-image'>

                        </img>



                      </Link>







                      <Link className=' secondy   left-ch' to={`/e/${6}`}>نوجوانان

                        <img src="../images/image-courses/g.jpg" className='link-image'>

                        </img>
                      </Link>




                      <Link className='secondy  left-ch' to={`/e/${5}`}>بزرگسالان

                        <img src="../images/image-courses/images.jpeg" className='link-image'>

                        </img>
                      </Link>





                    </div>





                    <div class="right-nav">

                      <Link className=' secondy  taf underline' >
                        دوره های تخصصی



                      </Link>

                      <Link className='secondy eng' to={`/e/${2}`}>TTC <img src="../images/image-courses/ttc.jpeg" className='link-image'>

                      </img></Link>


                      <Link className=' secondy eng' to={`/e/${1}`}>Tofel

                        <img src="../images/image-courses/tofel1.png" className='link-image'>

                        </img>


                      </Link>




                      <Link className=' secondy eng ' to={`/e/${3}`}>
                        <img src="../images/image-courses/ss.jpg" className='link-image'>

                        </img>

                        Speeking</Link>




                    </div>



                  </ul>
                </li>

              </Link>

            </ul>





            <Link className='main-navy navf' to="/">خانه
              <Link className='child-navy ' to="/">
              </Link>


            </Link>




            <Link className='main-navy navf online-shop' to="/فروشگاه" >
              <Link className='child-navy navone' to="/">
              </Link>

              فروشگاه آنلاین



            </Link>




            <Link className='main-navy navf ' to="/دوره ها" > دپارتمان ها
              <Link className='child-navy navcourses' to="/">
              </Link></Link>





            <Link className='main-navy navf ' to="/چک لیست" >چک لیست
              <Link className='child-navy navcheck' to="/">
              </Link></Link>


          </Nav>



        </Navbar>



      </Container>









      <div className="col-lg-2 col-sm-2 col-md-10">



        <a href="#" className='brandf'>



        </a>




        <div className="div-button">

        </div>



      </div>








    </div>



    <div className='body-header'>



      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
      </link>




      <body class="mybody">







        <div class="main-banner">




          <div className="tspart">
            <P />
          </div>




          <img src="qu8.png" className='video'
            data-aos="fade-up" data-aos-duration="1700" data-aos-delay="800" >
          </img>






          <p className='head-text-color' data-aos="fade-down" data-aos-duration="1500">
            مرکز تخصصی  آموزش زبان
            پویان




            توانایی هایت را را ارتقا بده !
          </p>


          <div class="second" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500" >





            ما با بهترین آموزش ها  و بهره گیری از اساتید مجرب
            شما را در یادگیری  مهارت مهم امروزه یعنی زبان انگلیسی یاری میکنیم !

            <bottun className="button-one" onClick={() => {
              navigate('/فروشگاه')
            }} >
              خرید
            </bottun>



            <Link className="button-tow" to={`https://mohammadbaghani.github.io/musicplayer/`}> آهنگ




            </Link>


          </div>





        </div>



        <a href="#" className='headlist-first' data-aos="zoom-in" data-aos-duration="700">



          نظرات زبان آموزان ...

          <li href="#" className='headlist-second'>






            نظرات زبان آموزان ما

          </li>

        </a>

        <div className='slider-container'>



          <Slider />






        </div>








        <img className={show ? 'scroll-button' : 'scroll-button gooo'} onClick={scrollToTop}>
        </img>






        <div className='valed-parent-all-texts'>

          <div className='parent-all-texts'>


            <h class="all-texts-title" data-aos="zoom-in" data-aos-duration="600">

              ما

              متفاوت هستیم , زیرا ....
            </h>



            <div className='text-containerlist-one flex-three' data-aos="fade-up" data-aos-duration="600">

              اساتید با تجربه
              <br>
              </br>
              Experienced trainers
              <img className='hat' data-aos="zoom-in" data-aos-duration="550">

              </img>

              <p className='text-detail-one' data-aos="fade-up" data-aos-duration="600">
                با یادگیری زبان از طریق آکادمی پویان شما  برترین اساتید ایران  را  در  کنار خودتان خواهید داشت و از تجربه آن ها بهره مند خواهید شد
              </p>

            </div>







            <div className='text-containerlist-tow flex-tow' data-aos="fade-up" data-aos-duration="600">متدهای  پیشرفته

              <br>



              </br>




              Development methods

              <img className='experience' data-aos="zoom-in" data-aos-duration="550">
              </img>
              <p className='text-detail-one' data-aos="fade-up" data-aos-duration="600">
                با فایل‌های مکمل و تمرین‌های متنوع در هر جلسه، زبان‌آموزان بارها مطالب آموزشی را مرور کرده و یادگیری‌شان ماندگار می‌شود
              </p>
            </div>





            <div className='text-containerlist-three flex-three' data-aos="fade-up" data-aos-duration="600">

              محیط آموزشی دلپذیر

              <br>
              </br>

              pleasant environment





              <img className='book' data-aos="zoom-in" data-aos-duration="550">
              </img>

              <p className='text-detail-one' data-aos="fade-up" data-aos-duration="600">

                یادگیری کاربردی زبان با کارهایی هر روز انجام می‌دهید باعث پیشرفت شما  می‌‌شود و انگیزه بیشتری برای یادگیری خواهید داشت

              </p>

            </div>
          </div>

        </div>













        <div class="parent-valed-containerlis" >







          <p class="list-text-one" data-aos="fade-up" data-aos-duration="1500">
            امروزه زبان انگلیسی از مهم ترین مهارت ها می باشد
            <br>
            </br>
            امروزه زبان انگلیسی از مهم ترین مهارت ها می باشد. ما در آموزشگاه پویان با پانزده سال سابقه
            امروزه زبان انگلیسی از مهم ترین مهارت ها می باشد. ما در آموزشگاه پویان با پانزده سال سابقه
            امروزه زبان انگلیسی از مهم ترین مهارت ها می باشد. ما در آموزشگاه پویان با پانزده سال سابقه
            امروزه زبان انگلیسی از مهم ترین مهارت ها می باشد. ما در آموزشگاه پویان با پانزده سال سابقه


          </p>

          <p class="list-text-tow" data-aos="fade-up" data-aos-duration="1500">
            با پویان زبان را  به راحتی  یاد بگیر !
          </p>




          <h class="slider-details-doreha" >
            <img className='logodoreha ' src="easli.png">

            </img>


            معرفی دوره های پویان
          </h>


          <h class="slider-details-description" >



            دوره های آموزش زبان ما به دو بخش حرفه ای و متوسط تقسیم می شوند

          </h>







          <ul class="list-one list-product" >
            <li className='proffessional'>


              دوره های تخصصی
            </li>


            <Link className='my-li content-four' to={`/e/${1}`}>

              <div className='parent-stars'>
                {new Array(5).fill().map(() => (
                  <FontAwesomeIcon className='star' icon={faStar} />
                ))}

              </div>


              <p className='pro-text'>
                {a.coursesprice[3]}
                هزار
                تومان
              </p>



              <img className='circle' src="/images/image-courses/tof.jpg">
              </img>

              <Link className='link-hover' to={`/e/${1}`} >آمادگی آزمون تافل</Link>


              <Link className='link-hover see' to={`/e/${1}`} >مشاهده دوره


                <img className='see-image' src="lf.png">
                </img>

              </Link>



            </Link>


            <Link className='my-li content-one' to={`/e/${5}`} >

              <div className='parent-stars'>
                {new Array(5 - 1).fill().map(() => (
                  <FontAwesomeIcon className='star' icon={faStar} />
                ))}

              </div>


              <p className='pro-text'>

                {a.coursesprice[1]}

                هزار
                تومان
              </p>



              <img className='circle img-departmans' src="images/image-courses/i.jpg">


              </img>

              <Link className='link-hover ' to={`/e/${5}`} >آمادگی آزمون آیلتس</Link>

              <Link className='link-hover see' to={`/e/${5}`} >مشاهده دوره


                <img className='see-image' src="lf.png">
                </img>

              </Link>


            </Link>



            <Link className='my-li content-six' to={`/e/${2}`} >
              <div className='parent-stars'>
                {new Array(4).fill().map(() => (
                  <FontAwesomeIcon className='star' icon={faStar} />
                ))}

              </div>

              <p className='pro-text'>
                {a.coursesprice[2]}
                هزار
                تومان
              </p>



              <img className='circle' src="/images/image-courses/tt.jpg">




              </img>








              <Link className='link-hover' to={`/e/${2}`} >( TTC ) تربیت مدرس </Link>
              <Link className='link-hover see' to={`/e/${2}`} >مشاهده دوره


                <img className='see-image' src="lf.png">
                </img>

              </Link>



            </Link>







          </ul>






          <ul class="list-tow list-product" >
            <li className='average'>


              دوره های عمومی
            </li>





            <Link className='my-li content-five' to={`/e/${3}`}>
              <div className='parent-stars'>
                {new Array(4).fill().map(() => (
                  <FontAwesomeIcon className='star' icon={faStar} />
                ))}

              </div>



              <p className='pro-text'>
                {a.coursesprice[4]}
                هزار
                تومان
              </p>

              <img className='circle' src="/images/image-courses/m.jpg">


              </img>




              <Link className='link-hover' to={`/e/${3}`} >آموزش مکالمه انگلیسی</Link>






              <Link className='link-hover see' to={`/e/${3}`} >مشاهده دوره


                <img className='see-image' src="lf.png">
                </img>

              </Link>


            </Link>



            <Link className='my-li content-tow' to={`/e/${6}`}>

              <div className='parent-stars'>
                {new Array(3).fill().map(() => (
                  <FontAwesomeIcon className='star' icon={faStar} />
                ))}

              </div>

              <p className='pro-text'>
                {a.coursesprice[5]}
                هزار
                تومان
              </p>


              <img className='circle img-departmans' src="/images/image-courses/teen.jpg">





              </img>
              <Link className='link-hover ' to={`/e/${6}`} >دپارتمان زبان نوجوانان</Link>


              <Link className='link-hover see' to={`/e/${6}`} >مشاهده دوره


                <img className='see-image' src="lf.png">
                </img>

              </Link>

            </Link>



            <Link className='my-li content-three' to={`/e/${4}`}>

              <div className='parent-stars'>
                {new Array(2).fill().map(() => (
                  <FontAwesomeIcon className='star' icon={faStar} />
                ))}

              </div>

              <p className='pro-text'>
                {a.coursesprice[0]}
                هزار
                تومان
              </p>


              <img className='circle img-departmans kids' src="/images/image-courses/kid.jpg">



              </img>
              <Link className='link-hover' to={`/e/${5}`} >دپارتمان زبان کودکان</Link>







              <Link className='link-hover see' to={`/e/${5}`} >مشاهده دوره


                <img className='see-image' src="lf.png">
                </img>

              </Link>





            </Link>





          </ul>





        </div>








        <div className='valed-parent-border' >

          <h class="slider-details-shop" >
            راه های تقویت زبان
            <li class="list-arrow" data-aos="zoom-out" data-aos-duration="1000">


              <li class="list-title" data-aos="zoom-out" data-aos-duration="1000">
                Writing

              </li>
              از مسائل روزمره یادداشت برداری کنید و مقاله بنویسید
            </li>




            <li class="list-arrow listen" data-aos="zoom-out" data-aos-duration="1000">

              <li class="list-title listennig" data-aos="zoom-out" data-aos-duration="1000">
                Listenning

              </li>

              گوش دادن به آهنگ راه کسب مهارت لیسنینگ است

            </li>



            <li class="list-arrow speak" data-aos="zoom-out" data-aos-duration="1000">


              <li class="list-title speaking" data-aos="zoom-out" data-aos-duration="1000">
                Speaking

              </li>


              برای این کار فیلم های انگلیسی زبان را مشاهده نمایید
            </li>




          </h>




          <div className={show ? height : 'fixed hh'}>
            <li className={show ? fixedchildclick : 'fixedchildclick'} onClick={setHeightg} >
              English Menu
            </li>
            <li className={fixedchild} onClick={scrolupgrade}>
              <img className='book-child' src="home.png">

              </img>

              Pooyan
            </li>
            <li className={fixedchild} onClick={scrolwhyus} >

              <img className='book-child' src="eng2.png">

              </img>

              Why us
            </li>
            <li className={fixedchild} onClick={scrocourses}>
              <img className='book-child' src="eng22.png">

              </img>

              Courses
            </li>

            <li className={fixedchild} onClick={scrolcontactus}>


              <img className='book-child' src="email1.png">

              </img>

              Contact us
            </li>

            <li className={fixedchild} onClick={scrolquestions} >
              <img className='book-child ' src="que.png">

              </img>

              Ask us
            </li>

          </div>


          <div className="parent-all-image-button">
            <p className="text-original-header showy">


              ارتباط با ما




            </p>

            <p className="text-original-header">


              آشنایی با اساتید پویان

              <p className="text-original-header-sub">
                <img src="backimage.jpg" className='left-image'>
                </img>

                <li className="up">


                  با حضور برترین و مجرب ترین اساتید ایران
                </li>
                با استفاده از آموزش‌های پویان این اطمینان را دارید که مسیر یادگیری زبان انگلیسی را با همراهی اساتید باتجربه‌ای که با نیاز‌های شما آشنا هستند طی می‌کنید و مطمئن خواهید بود که مدرسین دوره‌ها مسلط به جدیدترین متدهای روز دنیا هستند

              </p>





            </p>


          </div>

          <li class="slider-details-video">
            استاد ممتاز ما کیست ؟

            <br>

            </br>

            <li class="slider-details-videosub">




              استاد نمونه  ما  : سر کار خانم نسیم شیخی


              <br>
              </br>

              با بیش از سی
              سال
              تجربه در تدریس زبان

              <br>
              </br>



              برای شنیدن  صدای ویدیوی استاد گرامی  نشانگر  موس را روی خود باکس  ویدیو  ببرید


            </li>




          </li>





          <div className='parent-border'>

            <div className='parent-border-child' >




              <div className=' parent-video parent-video-one'>
                <div className='i'>

                </div>

                <div className='here here-tow'>
                  مشاهده ویدیو های  آمورزشی بیشتر   <Link className='lin' to="/آموزشی"> اینجا</Link>

                </div>


                <p className='backgroundimage ' height="300" onMouseEnter={() => setMutedVideo(!mutedVideo)}
                  onMouseLeave={() => setMutedVideo(!mutedVideo)} >

                  <video height="300" className='sheikhi'
                    loop muted={mutedVideo} autoPlay>
                  </video>

                </p>

              </div>














              <div class="english-register">

                <div class="cards " onClick={() => { navigate('/ثبت نام') }}>
                  <p className='register-text-tow tow-register'>
                    ثبت نام آنلاین در سایت


                  </p>
                  <p className='store-text-tow threey'>



                    ثبت نام یادت نره
                  </p>


                  <a onClick={() => { navigate('/ثبت نام') }} className='register-text'>
                    <img src="girl.png" className='icon-image register-icon '>
                    </img>
                    ثبت نام</a>



                  با پر کردم فرم ثبت نام,عضو سایت پویان شوید و از مزایای  ویژه ما بهره مند شوید


                  و اما کدام مزایا ؟...
                  <li>
                    اشتراک ویژه فیلم های انگلیسی
                  </li>
                  <li>
                    خرید دوره های آنلاین آموزشی
                  </li>
                  <li>
                    عضویت در گروه اعضای .ویژه
                  </li>

                  <br>
                  </br>




                </div>


              </div>



              <div class="english-store">

                <div class="cards " onClick={() => { navigate('/فروشگاه') }}>
                  <p className='store-text-tow tow-store'>


                    فیلم انگلیسی با زیر نویس




                  </p>
                  <p className='store-text-tow foury'>



                    تقویت اسپیکینگ
                  </p>

                  <a onClick={() => { navigate('/فروشگاه') }} className='store-text' >

                    <img src="f.png" className='icon-image store-icon'>
                    </img>

                    فروشگاه</a>


                  برای اینکه اسپیکینگ شما قوی تر بشه سایت آموزشگاه پویان , مجموعه فیلم های

                  انگلیسی با زیرنویس فارسی  با قیمت مناسب آماده کرده
                  <br>
                  </br>

                  لیست بازیگرانی که ازشون فیلم گذاشتیم :
                  <li>

                    امیلی بلانت
                  </li>

                  <li>
                    اما استون
                  </li>

                  <li>
                    جنیفر لورنس
                  </li>








                </div>


              </div>











              <div class="english-music">

                <a class="cards " href="https://mohammadbaghani.github.io/musicplayer/" >
                  <p className='english-text-tow tow-music'>

                    در یک موزیک پلیر حرفه ای

                  </p>

                  <p className='english-text-tow towy'>



                    تقویت لیسنینگ

                  </p>
                  <a href="https://mohammadbaghani.github.io/musicplayer/" className='english-text '>

                    آهنگ
                    <img src="goo.png" className='icon-image english-icon ' >
                    </img>
                  </a>



                </a>


              </div>











            </div>

          </div>



        </div>


        <Ticket />




        <h class="slider-details-soalha">


          پاسخ به سوالات شما





        </h>

        <h class="slider-details-soalha-sub ">

          هر آنچه که در مورد پویان باید بدانید




        </h>


        <section class="acordian">
          <div >





















            <div class="acordian-items">



              <img class="question-images" src="qu62.png">




              </img>

              <div class="acordian__item">
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} class="acordian__img">
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography class="font">
                      <p className='circle-border'>
                        ?
                      </p> آیا زبان برای همه سنین مناسب است؟</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography class="font subtext">
                      سن یادگیری زبان انگلیسی در کودکان برای شما
                      حال، هراس از آن دارید که خدایی نکرده فرزندتان در جوامع بین‌الملل موقع صحبت کردن به مشکل بر بخورد؟

                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>




              <div class="acordian__item">
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} >
                  <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography class="font s-f">
                      <p className='circle-border'>
                        ?
                      </p> دوره تربیت مدرس پویان چگونه است؟</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography class="font subtext ">
                      در این دوره از جدید ترین متدهای روز تدریس در ددنیا استفاده میشود تا همه دانشجویان ttc بتوانند به نحوی عالی تدریس کنند
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div class="acordian__item">

                <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} class="acordian__img">
                  <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                    <Typography class="font">
                      <p className='circle-border'>
                        ?
                      </p> نقش زبان در کسب در آمد چقدر است؟</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography class="font subtext ">
                      انگلیسی زبان بین المللی و پرکاربردترین زبان گفتاری و نوشتاری در جهان است. در حال حاضر بالغ بریی کافی با این زبان است. بنابراین، اگر هنوز زبان انگلیسی بلد نیستید یا تسلط کافی بر آن ندارید قادر به برقراری ارتباط با میلیون‌ها نفر در سرتاسر جهان نخواهید بود
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div class="acordian__item">

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} class="acordian__img">
                  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography class="font s-f">
                      <p className='circle-border'>
                        ?
                      </p>آزمون تافل ( TOEFL ) چیست؟</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography class="font subtext">
                      آزمون تافل یا TOEFL مخفف عبارت Test of English as a Foreign Language می باشد،  زمره پرطرفدارترین و معتبرترین آزمونهای بین المللی قرار دارد. مرکز این آزمون در کشور آمریکا قرار از طریق شرکت ETS یا “Educationa جهت کسب اطلاعات بیشتر در خصوص TOEFL
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>


              <div class="acordian__item">
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} class="acordian__img">
                  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography class="font">
                      <p className='circle-border'>
                        ?
                      </p>زبان چه نقشی در مهاجرت دارد؟</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography class="font subtext">
                      تافل یک آزمون استاندارد است. بنابراین می توانید مطمئن باشید که در دانشگاههایی که این مدرک اهمیت دارد شما متمایز خواهید شد. این آزمون برای اهدافی چون تحصیل در کشورهای دیگر و گذراندن دورههای کوتاه مدت مفید است                  </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div class="acordian__item">


                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} class="acordian__img">
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography class="font s-f">

                      <p className='circle-border'>
                        ?
                      </p>


                      آیا آکادمی دوره های آنلاین  دارد   ؟              </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography class="font subtext">
                      بله بهترین دوره های آنلاین را می توانیداینجا داشته باشید. در دوران کرونا و غیر از آن هم  ما با بهترین  آموزش های آنلاین  در خدمت زبان آموزان هستیم.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>

            </div>
          </div>
        </section>



        <div className='parent-media'>

          <h class="slider-details-shop-tow">
            در رسانه های اجتماعی ما را  دنبال کنید

            <img class='kid-image' src="kid.png">
            </img>
          </h>

          <div className='parent-media-child'>

            <a class="list-inline-item  third-scale" title=" لینکدین" href="https://www.linkedin.com/in/mohammad-baghani-7065ba242/" >


              <a class="text-decoration-none  insta-text"
              >
                لینکدین  </a>
              <svg xmlns="http://www.w3.org/2000/svg" class="svg linkdin"
                viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>


            </a>



            <a class="list-inline-item first-scale" href="#" title=" توئیتر ">

              <a class="text-decoration-none insta-text"
              > توئیتر</a>
              <svg
                class="svg twiteer"
                xmlns="http://www.w3.org/2000/svg"


                viewBox="0 0 16 16"   >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                ></path></svg
              >
            </a>


            <a class="list-inline-item second-scale" title="اینستاگرام" href="#" >
              <a href="#" class="text-decoration-none insta-text"
              > اینستاگرام</a>



              <svg
                class="svg instagram"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                  آموزشی ></path></svg>
            </a>


          </div>


        </div>
        <div class="cheklist" id="hour" onClick={() => {
          navigate('/چک لیست ')
        }}>

          <img src="qu8.avif"
            class="cheklist-image" >
          </img>
          چک لیست

          (جدید)

        </div>





      </body >


      <Footer />
      <Navside />
    </div >


  </>


  );
}

export default Main;
