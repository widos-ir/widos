import { useState } from 'react'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import Isolation_Mode from './assets/images/Isolation_Mode.png'
import See_all_button from './components/see_all';
import masjed from './assets/images/masjed.png'
import widos_collection from './assets/images/widos_collection.jpg'
import rocket from './assets/icons/rocket-launch.svg'
import arrow_down from './assets/icons/arrow-down.svg'
import arrow_left from './assets/icons/arrow-left.svg'
import Call from './assets/icons/call.svg';
import call_green from './assets/icons/call-green.svg'
import Hand from './assets/images/hand.png'
import LapTop_icon from './assets/images/laptop.png'
import left_button from'./assets/icons/left-button-swiper.svg';
import right_button from'./assets/icons/right-button-swiper.svg';
import left_button_2 from'./assets/icons/left-button-swiper-2.svg';
import right_button_2 from'./assets/icons/right-button-swiper-2.svg';
import portfolio_image from './assets/images/portfolio.png';
import Client_image from './assets/images/client.png';
import member_image from './assets/images/member-image.png';
import hover_icon from "./assets/icons/click-icon.svg";
import article_image from './assets/images/article-image.png';
import calendar from './assets/icons/calendar.svg'
import add_square from "./assets/icons/add-square.svg"
import minus_square from "./assets/icons/minus-square.svg"
import profile from './assets/icons/profile.svg'

// import Portfolio from './components/portfolio';
let alt_for_img = "ویداس widos";


function Portfolio(props) {
console.log(props)
    return(<>
      <div className='flex flex-col p-4 gap-3 w-[250px] bg-white border-1 border-[#E1E1E1] rounded-2xl justify-self-center '>
        <img alt={alt_for_img} className='w-full rounded-xl' src={props.image}/>
        <b className='text-xl'>{props.name}</b>
        <small>{props.member}</small>
        <a className=' bg-[#626262] py-2 cursor-pointer text-center rounded-lg text-white'>مشاهده نمونه کار</a>
      
      </div>
    
    </>)
}

function Clients(props) {
    return(
      <>
      <div className=' justify-self-center w-full bg-(--light-gray-100) py-3 px-4 border-2 border-[#C3C3C3] flex flex-col gap-5 rounded-2xl'>
        <div className='flex items-center gap-4'>
            <img alt={alt_for_img} className='rounded-2xl' src={props.image}/>
            <div>
                <p className=' !font-x-bold text-xl'>{props.name}</p>
                <p>{props.job}</p>
            </div>
        </div>
        <p className='text-(--gray)'>{props.comment}</p>
      </div>
      </>
    );
}

function Member(props) {
  return(
    <>
      <div className='min-w-[210px] h-[300px] relative  '>
        <img alt={alt_for_img} className='w-full h-full object-cover rounded-2xl' src={props.image}/>
        <div className=' absolute top-0 right-0 min-w-[210px] h-[300px] bg-(--green-400) p-3 flex flex-col justify-between opacity-0 active:opacity-80 hover:opacity-80  duration-300 rounded-2xl text-white select-none'>
          <div className=''>
              <b className=' text-2xl !font-x-bold'>{props.name}</b>
              <p className=' !font-light'>{props.duty}</p>
          </div>
          <small className=' !font-light'>{props.explanation}</small>
        </div>
          <img alt={alt_for_img} className='w-8 absolute top-3 left-3 !opacity-60' src={hover_icon}  />

      </div>
    </>
  )
}
function Article(props) {

  return(
    <>

      <div className='md:w-[25vw]  md:max-w-[500px] w-full h-[220px] relative flex bg-(--light-gray-100) rounded-2xl '>
        
          <div className='w-[160px] h-full '>
            <div className='w-[140px] h-[200px] transform -translate-x-[10px] md:-translate-x-[20px] -translate-y-[30px] '>
            <img alt={alt_for_img} className=' rounded-2xl w-full h-full object-cover' src={article_image}  />

            </div>
          </div>
          <div className='flex flex-col justify-between px-4 md:pt-6 pt-2 pb-2 w-full mr-5 '>
            <div className='flex flex-col box-border gap-2  '>
              <b className='!font-bold md:text-xl'>{props.title}</b>
              <small className='!font-light text-(--gray)'>{props.description}</small>
            </div>
            <div className='flex justify-between absolute w-full bottom-0 right-0 px-4 p-3'>
              <div className='flex items-center md:gap-3 gap-1'>
                <img alt={alt_for_img} className='w-3' src={calendar}  />
                <small>{props.date}</small>
              </div>
              <button className='flex md:gap-3 gap-1 cursor-pointer' type='button'>
                <p>ادامه </p>
                <img alt={alt_for_img} src={arrow_left}  />
              </button>

            </div>
          </div>
      </div>
    </>
  )
}

function Acordion(props) {
  const [answer_status, set_answer_status] = useState("opacity-0 -translate-y-[50%] overflow-hidden max-h-0 p-0");
  const [bg_icon, set_bg_icon] = useState("bg-(--green-50)");
  const [icon, set_icon] = useState(add_square);

  function answer_toggle() {
    if (answer_status.includes("opacity-0")) {
      set_answer_status("opacity-100 translate-y-0 overflow-hidden max-h-[500px] p-3 my-2");
    } else {
      set_answer_status("opacity-0 -translate-y-[50%] overflow-hidden max-h-0 p-0");
    }
    icon === add_square ? set_icon(minus_square) : set_icon(add_square);
    bg_icon === "bg-(--green-50)" ? set_bg_icon("bg-[#ACACAC]") : set_bg_icon("bg-(--green-50)");
  }

  return (
    <div className="md:w-[60%] w-full flex flex-col gap-2">
      <div onClick={answer_toggle} className='w-full flex cursor-pointer select-none justify-between items-center border-2 border-(--light-gray-500) p-3 rounded-2xl z-2 bg-white'>
        <p>{props.question}</p>
        <i className={`${bg_icon} p-2 rounded-xl duration-100`}>
          <img src={icon} alt={alt_for_img} />
        </i>
      </div>

      <div className={`w-full border-2 border-dashed border-(--light-gray-500) rounded-2xl transition-all duration-500 ${answer_status}`}>
        <p className='!font-light'>{props.answer}</p>
      </div>
    </div>
  );
}
function App() {
  const swiper_portfolio = useRef(null);
  const swiper_clients = useRef(null);

  let our_services = [
    {text:"طراحی وبسایت" , icon:rocket},
    {text:"اپلیکیشن ویندوز" , icon:rocket},
    {text:"اپلیکیشن اندروید" , icon:rocket},
  ]
  let services_property = [
      {number:"3 سال" , subject:"سابقه فعالیت"},
      {number:"+1000" , subject:"پروژه‌های انجام‌شده"},
      {number:"+500" , subject:"رضایت مشتریان"},
      {number:"+30" , subject:"اعضای ویداس"},
  ];
  let portfolio_data = [
    {image:portfolio_image,member:"کارفرما: آقای سعید صادقی" , name:"وبسایت ساعت خوش"},
    {image:portfolio_image,member:"کارفرما: آقای امیر صادقی" , name:"پروژه ویداس"},
    {image:portfolio_image,member:"کارفرما: آقای سعید صادقی" , name:"وبسایت ساعت خوش"},
    {image:portfolio_image,member:"کارفرما: آقای حمید صادقی" , name:"پروژه ویداس"},
    {image:portfolio_image,member:"کارفرما: آقای سعید صادقی" , name:"وبسایت ساعت خوش"},
  ];

  let clients_data = [
      {image:Client_image,name:"محمد نوری",job:"معاونت تبلیغات",comment:"لورم ایپـــــــسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استــــــــــفاده از طراحان گرافیک است."},
      {image:Client_image,name:"محمد نوری",job:"معاونت تبلیغات",comment:"لورم ایپـــــــسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استــــــــــفاده از طراحان گرافیک است."},
      {image:Client_image,name:"محمد نوری",job:"معاونت تبلیغات",comment:"لورم ایپـــــــسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استــــــــــفاده از طراحان گرافیک است."},
      {image:Client_image,name:"محمد نوری",job:"معاونت تبلیغات",comment:"لورم ایپـــــــسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استــــــــــفاده از طراحان گرافیک است."},
      {image:Client_image,name:"محمد نوری",job:"معاونت تبلیغات",comment:"لورم ایپـــــــسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استــــــــــفاده از طراحان گرافیک است."},
      {image:Client_image,name:"محمد نوری",job:"معاونت تبلیغات",comment:"لورم ایپـــــــسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استــــــــــفاده از طراحان گرافیک است."},
      {image:Client_image,name:"محمد نوری",job:"معاونت تبلیغات",comment:"لورم ایپـــــــسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استــــــــــفاده از طراحان گرافیک است."},
  ];

  let widos_members = [
    {name:"اشکان سرانجام",image:member_image ,duty:"گارسون",explanation:"لـــــــورم ایپســــوم متن ساختگی با تولید ســـــــــادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.. چاپگرها و متــــــون بلکه روزنامه و مجـــله در ستون و سطـــــر آنچنان که لازم است."},
    {name:"اشکان سرانجام",image:member_image ,duty:"گارسون",explanation:"لـــــــورم ایپســــوم متن ساختگی با تولید ســـــــــادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.. چاپگرها و متــــــون بلکه روزنامه و مجـــله در ستون و سطـــــر آنچنان که لازم است."},
    {name:"اشکان سرانجام",image:member_image ,duty:"گارسون",explanation:"لـــــــورم ایپســــوم متن ساختگی با تولید ســـــــــادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.. چاپگرها و متــــــون بلکه روزنامه و مجـــله در ستون و سطـــــر آنچنان که لازم است."},
    {name:"اشکان سرانجام",image:member_image ,duty:"گارسون",explanation:"لـــــــورم ایپســــوم متن ساختگی با تولید ســـــــــادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.. چاپگرها و متــــــون بلکه روزنامه و مجـــله در ستون و سطـــــر آنچنان که لازم است."},
  ];
  let articles_data=[
    {title:"لورم ایپسوم متن نمایشی",date:"1403/02/10",image:{article_image},description:"لورم ایپســـــــوم متن ساختگی با تولید سادگی نامفهـــــوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،"},
    {title:"لورم ایپسوم متن نمایشی",date:"1403/02/10",image:{article_image},description:"لورم ایپســـــــوم متن ساختگی با تولید سادگی نامفهـــــوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،"},
    {title:"لورم ایپسوم متن نمایشی",date:"1403/02/10",image:{article_image},description:"لورم ایپســـــــوم متن ساختگی با تولید سادگی نامفهـــــوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،"},
  ]

  let questions= [
    {question:" چه  خدماتی را ارائه می‌دهیم؟" , answer:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استــــفاده از طــــراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شـرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد." },
    {question:" چه  خدماتی را ارائه می‌دهیم؟" , answer:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استــــفاده از طــــراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شـرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد." },
    {question:" چه  خدماتی را ارائه می‌دهیم؟" , answer:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استــــفاده از طــــراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شـرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد." },
    {question:" چه  خدماتی را ارائه می‌دهیم؟" , answer:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استــــفاده از طــــراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شـرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد." },
    {question:" چه  خدماتی را ارائه می‌دهیم؟" , answer:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استــــفاده از طــــراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شـرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد." },
    {question:" چه  خدماتی را ارائه می‌دهیم؟" , answer:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استــــفاده از طــــراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شـرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد." },
  ]
  return (
    <>
       <section className=' my-16 flex-col w-full mt-[150px] gap-4 relative '>
      <img className=' absolute right-0 ' src={Isolation_Mode} alt={alt_for_img} />
        <div className='w-full flex md:flex-row flex-col md:justify-between bg-linear-to-t from-(--light-gray-100) to-white md:p-4' >
        <div className='z-10 md:w-[50vw] w-full flex justify-end flex-col gap-14 md:order-1 order-2'>
          <img alt={alt_for_img} className='w-min' src={widos_collection}/>

          <p className=' stroke-neutral-700'>گروه ویـداس WiDOS به صورت مستقل توسط دانشجـــــــــویان مهنـــــــدسی کامپیوتر دانشگاه اصفهان تاسیس و اداره می‌شود که تضمــــــــین می‌دهد بالاترین کیــفیت نرم افزار و پشتیبانی را تجربه کنید.</p>
          
          {/* our services for mobile */}
          <div className=' md:hidden gap-[1vw] gap-y-4 grid grid-cols-2'>
            <p className=' text-stone-800 text-4xl'>خدمات ما</p>
                {
                  our_services.map((item)=>{
                    return(
                      <>
                       <div className='flex cursor-pointer transform hover:translate-y-[-2px] hover:shadow-2xl duration-300 gap-[1vw] items-center justify-center w-[15vw] min-w-[160px] max-w-[180px] bg-(--light-gray-200) rounded-xl px-[2vw] py-2 border-2 border-[#E0E0E0]'>
                        <img alt={alt_for_img} src={item.icon}/>
                        <p>{item.text}</p>
                      </div>
                      </>
                    );
                  })
                }
                
          {/* our services for desktop */}
          </div>
          <div className='md:flex md:flex-col gap-6 hidden'>
            <p className=' text-stone-800 !font-bold text-4xl'>خدمات ما</p>
            <div className='flex gap-3'>
                {
                  our_services.map((item)=>{
                    return(
                      <>
                       <div className='flex cursor-pointer transform hover:translate-y-[-2px] hover:shadow-2xl duration-300 gap-2 items-center justify-center w-[15vw] min-w-[180px] max-w-[180px] bg-(--light-gray-200) rounded-xl px-4 py-2 border-2 border-[#E0E0E0]'>
                        <img alt={alt_for_img} src={item.icon}/>
                        <p>{item.text}</p>
                      </div>
                      </>
                    );
                  })
                }
                
                </div>
          </div>
        </div>  
        <div className='md:w-[30vw] w-full flex justify-center md:order-2 order-1'>
           <img alt={alt_for_img} className=' ' src={masjed}/>
        </div>
        </div> 


        {/* absolute item------> */}
        <div className='bg-(--light-gray-100) w-full h-[100px] flex  rounded-b-4xl justify-center items-end'>
          <img alt={alt_for_img} className=' bg-(--light-gray-100) border-[18px]  border-white p-4 rounded-full w-[90px] h-[90px] box-border transform translate-y-1/2   ' src={arrow_down}/>
        </div>
        {/* ---------------- */}
      </section>



      {/* Part of service statistics Widos --------------------> */}
        <section className='md:flex hidden justify-center bg-(--light-gray-200) border-2 py-4 border-[#E0E0E0] w-full rounded-2xl mt-[220px] '>
            <div className='flex flex-col gap-4 px-[4vw] border-l-2 border-[#CECECE] py-1'>
              <p className='text-[#23b34e] yekan-bold text-xl'>بخشی از آمار خدمات ویداس</p>
              <p>تعداد خدمت ارائه شده</p>
            </div>

          {
            services_property.map((item,index)=>{
            
              return(
                <>
                  <div className={`flex flex-col gap-4 px-[4vw] ${index!=3?`border-l-2`:` `} text-center border-[#CECECE] py-1`}>
                      <p className='text-stone-900 yekan-bold text-xl '>{item.number}</p>
                      <p className=' text-stone-600 text-[14px]'>{item.subject}</p>
                  </div>
                    </>
              );
            })
          }

         </section>

      {/* for mobile */}
      <section className='md:hidden flex flex-col gap-4 bg-(--light-gray-200) border-2 py-4 px-3 border-[#E0E0E0] w-full rounded-2xl mt-[200px]'>
          {/* top */}
          <div className='grid grid-cols-2  p-4 '>
            <div className='text-center flex flex-col gap-3 pl-2 border-[#CECECE] border-l-2'>
                <p className='text-[#23b34e] yekan-bold text-3xl '>آمار ویداس</p>
                <p className=' text-stone-600 text-[18px]'>تعداد خدمات ارائه شده</p>
            </div>
            <div className='text-center flex flex-col gap-3'>
                <p className='text-stone-900 yekan-bold text-3xl '>3 سال</p>
                <p className=' text-stone-600 text-[18px]'>سابقه فعالیت</p>
            </div>
          </div>

          <hr className='bg-[#CECECE] border-none h-[2px]'/>

          {/* bottom */}
          <div className='grid grid-cols-2 p-4'>
            <div className='text-center flex flex-col gap-3 border-[#CECECE] border-l-2'>
                <p className='text-stone-900 yekan-bold text-3xl '>+500</p>
                <p className=' text-stone-600 text-[18px]'>رضایت مشتریان</p>
            </div>
            <div className='text-center flex flex-col gap-3'>
                <p className='text-stone-900 yekan-bold text-3xl '>+1000</p>
                <p className=' text-stone-600 text-[18px]'>پروژه های انجام شده</p>
            </div>
          </div>

      </section>
      {/* ------------------------------> */}


      {/* چرا ویداس؟ ---------------> */}
      <section className='flex md:flex-row md:justify-between flex-col justify-end items-center w-full  mt-16  '>

        <div className='flex flex-col gap-4 md:w-[40vw] md:order-1 order-2'>
          <b className='text-3xl text-stone-900 '>چرا ویداس؟!</b>
          <small className='text-stone-800'>دلیل انتخاب ویداس را بدانید..</small>
          <p className='text-justify leading-relaxed text-stone-900'>لورم ایپسوم متن ساختگی با تولیــــد سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنـــــان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود می‌باشد.</p>
         
           <div className=' flex flex-col gap-5'>

              <div className='flex md:flex-row flex-col w-full items-center justify-between gap-10'>
                <button className=' cursor-pointer border-2 border-[#35a055] bg-(--green-300) flex md:gap-5 gap-8 text-stone-800 md:w-[50%] w-full py-2 rounded-lg items-center justify-center' type="button">
                  <p>درباره ما</p>
                  <img alt={alt_for_img} className=' bg-[#ffffff70] p-2 rounded-md' src={arrow_left}/>
                </button>
                <div className='flex gap-4 items-center justify-between w-full h-min text-stone-700'>
                  <a className='flex gap-4 items-center justify-between cursor-pointer' href='tel:+989038862794'>
                    <img alt={alt_for_img} src={call_green}/>
                    <p>مشاوره رایگان</p>
                  </a>

                  <a className='bg-[#F5F5E3] p-3 rounded-lg text-center text-stone-700 cursor-pointer' href='tel:+989038862794'>
                  021_44509325 داخلی 3
                  </a>
                </div>
              </div>


              <p className='text-[#5C5C5C] bg-(--light-gray-100) border-2 border-[#EDEDED] w-full text-center p-2 rounded-lg'>
              جایی که خلاقیت تمام می‌شود، ویداس شروع می‌کند!
              </p>

          </div>


        </div>


          <img alt={alt_for_img} className=' md:w-[30vw] md:order-2 order-1' src={Hand}/>

      </section>

      {/*نمونه کار ها --------------------------> */}

      <section className='flex md:flex-row flex-col w-full gap-5 justify-between items-center bg-[#F3F3F3] border-2 border-[#A3A3A3] p-5 rounded-2xl mt-20 '>
        <div className='flex flex-col gap-3 w-full md:items-start items-center'>
          <b className='text-[#393939] text-3xl yekan-bold'>نمونه‌کارهای ما</b>
          <small className='text-[#262626]'>خلاقیت ویداس</small>
          <div className='md:flex hidden gap-2 mb-10'>
            <button onClick={()=>swiper_portfolio.current.swiper.slidePrev()} type='button' className='swiper-protfolio-next w-8 h-8 flex justify-center items-center cursor-pointer duration-100 hover:border-[#35a055] rounded-full border-1 border-[#3F3F3F]'><img alt={alt_for_img} src={right_button}/></button>
            <button onClick={()=>swiper_portfolio.current.swiper.slideNext()} type='button' className='swiper-protfolio-prev w-8 h-8 flex justify-center items-center cursor-pointer duration-100 hover:border-[#35a055] rounded-full border-1 border-[#3F3F3F]'><img alt={alt_for_img} src={left_button}/></button>
          </div>
          <div className='flex md:flex-col w-full justify-center items-center md:gap-3 gap-2'>
            <button type='button' className='hover:bg-(--green-300) hover:shadow-2xl w-full bg-white border-2 border-[#9F9F9F] py-2 rounded-lg text-[#4A4A4A] duration-300 cursor-pointer '>وبسایت</button>
            <button type='button' className='hover:bg-(--green-300) hover:shadow-2xl w-full bg-white border-2 border-[#9F9F9F] py-2 rounded-lg text-[#4A4A4A] duration-300 cursor-pointer '>اپلیکیشن</button>
            <button type='button' className='hover:bg-(--green-300) hover:shadow-2xl w-full bg-white border-2 border-[#9F9F9F] py-2 rounded-lg text-[#4A4A4A] duration-300 cursor-pointer md:flex hidden justify-center gap-3 '>مشاهده همه <img alt={alt_for_img} src={arrow_left}/></button>
          </div>
        </div>
        <div className='md:w-[65vw] w-full'>
        <div>
      <Swiper
        ref={swiper_portfolio}
        modules={[Navigation ,Autoplay]}
        autoplay={{
          
          delay:4000,
          
        }}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          1100:{slidesPerView:3},
          768:{slidesPerView:2},
          // 768:{slidesPerView:1},
        }}
      >
        {
          portfolio_data.map((item)=>{
            return<SwiperSlide className='w-full flex'><Portfolio image={item.image} name={item.name} member={item.member}/></SwiperSlide>
          })
        }
      </Swiper>


      </div>
      <button type='button' className='hover:bg-(--green-300) hover:shadow-2xl w-full bg-white border-2 border-[#9F9F9F] py-2 rounded-lg text-[#4A4A4A] duration-300 cursor-pointer md:hidden flex mt-3 justify-center gap-3 '>مشاهده همه <img alt={alt_for_img} src={arrow_left}/></button>

        </div>
      </section>
      {/* مشتریان ویداس  ----------------------------->*/}
      <nav className='flex justify-between items-center my-15 '>
        <div className='flex flex-col gap-4'>
          <b className=' font-x-bold text-3xl'>مشتریان ویداس</b>
          <p className=' !font-light'>بعداز سفارش چه حسی داشتند...</p>
        </div>
        <See_all_button/>
      </nav>
      
      <div className='relative '>
        <button id='prev_client' onClick={()=>swiper_clients.current.swiper.slidePrev()} type='button' className='sm:inline hidden cursor-pointer bg-[#797979] absolute right-0 top-1/2 z-5 p-3 rounded-full transform -translate-y-1/2 translate-x-1/2 '>
            <img alt={alt_for_img} className='w-4 h-4' src={right_button_2}/>
        </button>
        <button onClick={()=>swiper_clients.current.swiper.slideNext()} id='next-client' type='button' className='sm:inline hidden cursor-pointer bg-[#797979] absolute left-0 top-1/2 z-5 p-3 rounded-full transform -translate-y-1/2 -translate-x-1/2 '>
            <img alt={alt_for_img} className='w-4 h-4' src={left_button_2}/>
        </button>
        <div className='w-full'>
        <Swiper
          ref={swiper_clients}
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation,Autoplay]}
          breakpoints={{
            2000:{slidesPerView:3},
            1100:{slidesPerView:2.5},
          }}
          autoplay={{
            delay:3000
          }}

        >
          {
            clients_data.map((item)=>{
              return<SwiperSlide className='sm:w-[400px] max-w-[400px] w-full flex '><Clients image={item.image} name={item.name} job={item.job} comment={item.comment}/></SwiperSlide>
            })
          }
        </Swiper>
        </div>
        
      </div>

      {/* اعضای ویداس ------------------------>*/}
      <nav className='flex justify-between items-center my-15 '>
        <div className='flex flex-col gap-4'>
          <b className=' font-x-bold text-3xl'>اعضای ویداس</b>
          <p className=' !font-light'>با تیم ویداس بیشتر آشنا شوید!</p>
        </div>
        <See_all_button/>
      </nav>
      <div className='w-full flex gap-5 justify-between overflow-x-auto'>
        {
          widos_members.map((item)=>{
            return <Member name={item.name} image={item.image} explanation={item.explanation} duty={item.duty}/>
          })
        }
      </div>




      
      {/* جزئیات شما را خاص می‌کند-------------->*/}

      <nav className='relative w-full md:h-[250px] h-[500px] md:my-40 my-10 mb-30'>
        <section className='w-[100vw] md:h-[250px] bg-[#494949] absolute md:-right-26 -right-4 flex md:flex-row flex-col justify-between '>
          <div className='md:w-[50%] flex flex-col gap-5 p-10'>
            <b className='text-(--green-300) text-3xl'>جزئیات شما را خاص می‌کند!</b>
            <p className='text-white'>ما بر این باوریم که توجه به جزئیـــــــــــــات یک روش برای نشان دادن شما به دیگران نیست بلکه نگرشی است که بسیاری از مشتریان شما در انتخاب خود به دنبال آن هستند</p>
            <button className=' w-[200px] cursor-pointer bg-white flex md:gap-5 gap-8 text-stone-800 py-3 rounded-lg items-center justify-center self-end' type="button">
                  <p>ثبت سفارش</p>
                  <img alt={alt_for_img} className='' src={arrow_left}/>
            </button>
          </div>
          <img alt={alt_for_img} className='md:absolute bottom-0 left-30 md:px-0 px-10 md:w-auto w-min self-center' src={LapTop_icon}/>
        </section>

      </nav>

      {/* اخرین مقالات -------------------------->*/}
      <nav className='flex justify-center items-center text-center w-full md:mb-20 '>
        <div className='flex flex-col gap-4'>
          <b className=' font-x-bold text-3xl'>آخرین مقالات</b>
          <p className=' !font-light'>به وبلاگ ویداس حتما سر بزنید..</p>
        </div>
      </nav>

      <div className='w-full md:hidden flex'>
        <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        autoplay={{
          delay:5000
        }}
        className=' h-[400px] '
        >
        {
          articles_data.map((item)=>{
            return(
              <SwiperSlide className='w-full !flex items-center justify-self-center'>
              <Article title={item.title} image={item.image} date={item.date} description={item.description}/>
          </SwiperSlide>
            )
          })
        }
        </Swiper>
      </div>

      <section className='md:flex justify-between hidden gap-5 flex-wrap'>
        {
          articles_data.map((item)=>{
             return(<div className='mt-10'>
              <Article title={item.title} image={item.image} date={item.date} description={item.description}/>
             </div>)
               
          })

        }
      </section>
      <div className='w-full md:my-5 flex justify-center items-center p-14 '>
        <See_all_button/>

      </div>

      {/*سوالات متداول  ---------------> */}

      <div className=' w-ful flex flex-col gap-3 text-center my-10'>
        <h1 className='!font-bold text-2xl'>سوالات متداول </h1>
        <p>پاسخگـــوی سوالات پرتکــــــــــــرار شـــــــما هستیم.</p>
        <p>پاسخ سوال خود را پیدا نکردید؟ <span><a className='text-(--green-400)' href='tel:+989038862794'>ارتباط با پشتیبانی </a></span></p>
      </div>
        
      <section className='w-full flex flex-col items-center'>

          {
            questions.map((item)=>{
              return (
                <Acordion answer={item.answer} question={item.question}/>
              )
            })
          }

      </section>

      {/* درخواست مشاوره ------------------> */}

      <section className='w-full md:max-w-[70%] border-2 relative bg-white border-(--light-gray-500) rounded-2xl px-6 py-6 m-auto flex md:flex-row flex-col justify-between items-center gap-4 my-20'>

          <div className=' md:inline hidden absolute -z-10 -right-[20px] w-[50px] h-[70px] bg-(--green-400) rounded-lg'></div>


        <div className='flex flex-col gap-2 md:text-start text-center'>
          <b className=' text-xl !font-bold'>درخواست <span className=' text-[#656565]'>مشاوره</span></b>
          <small className=' text-gray-800'>در کمتر از 30 دقیقه با شما تماس می‌گیریم.</small>
        </div>
        <div className=' md:w-auto w-full flex md:flex-row flex-col gap-3'>
          <div className='flex justify-between items-center p-3 md:w-[200px] w-full border-2 rounded-xl gap-3  border-(--light-gray-500) '>
            <img src={profile} alt={alt_for_img} />
            <input className=' outline-none w-full h-full' type="text" placeholder='نام و نام خانوادگی' />
          </div>
          <div className='flex justify-between items-center p-3 md:w-[200px] w-full border-2 rounded-xl gap-3  border-(--light-gray-500) '>
            <img src={Call} alt={alt_for_img} />
            <input className=' outline-none w-full h-full' type='tel' placeholder='شماره تماس' />
          </div>
        </div>
        <button className=' bg-[#717171] md:w-auto w-full text-white p-3 rounded-lg text-center cursor-pointer' type="button">درخواست مشاوره </button>
      </section>
    </>
  )


}
export default App
