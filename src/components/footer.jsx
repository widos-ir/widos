
import React, { Component } from 'react'
import bacground_image from './../assets/images/group-footer.svg';
import bacground_image_2 from './../assets/images/groupe-footer-2.svg';
import bacground_image_mobile from './../assets/images/backgroud-footer-mobile-1.svg';
import bacground_image_mobile_2 from './../assets/images/backgroud-footer-mobile-2.svg';
import Logo from './../assets/icons/widos-logo.png'

import Location from './../assets/icons/location.svg';
import Call from './../assets/icons/call-footer.svg';
import Adsine from './../assets/icons/@.svg';
import News_icon from './../assets/icons/directbox-notif.svg'
import Enter_icon from './../assets/icons/enter-icon.svg'


function Footer(params) {
    let info=[
        {title:"خدمات" , descriptions: [
            "طراحی سایت",
            "سئو و بهینه‌سازی سایت",
            "خدمات طراحی گرافیک",
            "طراحی اپلیکیشن",
            "طراحی رابط کاربری",
            "مدیریت پیج اینستاگرام"
        ]},
        {title:"دسترسی سریع", descriptions:[
            "وبلاگ",
            "درباره ویداس",
            "تبلیغات در ویداس",
            "نمونه‌کارها",
            "پشتیبانی",
            "سوالات متداول"
        ]}


    ]
    return(
    <>
        <footer className='md:flex flex-col hidden bg-[#F8F8F8] md:mt-[100px] md:mb-0 pt-20 py-10 px-30 my-[100px] relative'>
            <img className=' md:inline w-[300px] absolute top-0 right-0' src={bacground_image}/>
            <img className=' md:inline w-[300px] absolute bottom-0 left-0 transfom' src={bacground_image_2}/>
            <div className='z-10'>
                <section className='flex gap-[10vw]'>
                    <div className='md:flex md:flex-col'>
                        <p className=' text-[#646161] yekan-bold text-lg'>دیجیتال مارکتینگ ویداس</p>
                        <p className='text-[#666363] mt-6'>درج شعال</p>

                        <div className='mt-8 flex flex-col gap-8'>
                            <div className='text-[#505050] flex gap-3 items-center'>
                                <img src={Location}/>
                                <p>محل درج آدرس</p>
                            </div>
                            <div className='text-[#505050] flex gap-3 items-center'>
                                <img src={Call}/>
                                <p>شماره تماس</p>
                            </div>
                            <div className='text-[#505050] flex gap-3 items-center'>
                                <img src={Adsine}/>
                                <p>exampel@gmail.com</p>
                            </div>
                        </div>


                        <div className='flex gap-3 mt-10'>
                            <button className='bg-[#8B8B8B] text-white px-5 rounded-lg py-3'>درباره ما</button>
                            <button className='bg-[#1ed846] text-[#555555] px-6 rounded-lg py-3'>تماس با ما</button>

                        </div>
                    </div>
                    {
                        info.map((item)=>{
                            return(
                                <>
                                <div className=' flex flex-col gap-5'>
                                <b>{item.title}</b>
                                {item.descriptions.map((descriptions)=>{
                                    return <p className='text-[#666363]'> {descriptions}</p>
                                    
                                })}
                                
                                </div>
                                </>
                            );
                        })
                    }

                    {/* <section className='w-full flex flex-col items-center'>
                        <div className='bg-white  p-4 rounded-2xl'>
                            <div className='flex items-center gap-3 mb-4'>
                                <img src={News_icon}/>
                                <p>خبرنامه ویداس</p>
                            </div>
                            <div className='flex items-center rounded-2xl p-3 bg-[#F6F6F6]'>
                                <input className='w-[300px]  outline-none' />
                                <button className=' cursor-pointer'>
                                    <img src={Enter_icon}/>
                                </button>
                            </div>
                        </div>

                    </section> */}
                </section>
                <p className='text-[#595959] mt-10 pt-10 border-t-2 border-[#D8D8D8]'>
                    تمامی حقوق مادی و معنوی این وبسایت متعلق به ویداس می باشد و هرگونه کپی برداری پیگرد قانونی دارد.
                </p>
                
            </div>



        </footer>



        {/* footer for mobile-----------------> */}

        <footer className='md:hidden flex flex-col bg-[#F8F8F8]  p-5  my-[90px] relative'>

            {/* backgroud images --------------> */}
            <img className=' absolute left-1/2 top-0 transform -translate-x-1/2 ' src={bacground_image_mobile}/>
            <img className=' absolute left-1/2 bottom-0 transform -translate-x-1/2 ' src={bacground_image_mobile_2}/>



            <div className='z-10'>
            <img className='w-[60px]' src={Logo}/>
            <p className=' text-[#454444] yekan-bold text-xl'>دیجیتال مارکتینگ ویداس</p>
            <div className='mt-8 flex flex-wrap gap-8'>
                        <div className='text-[#505050] flex gap-3 items-center'>
                            <img src={Location}/>
                            <p>محل درج آدرس</p>
                        </div>
                        <div className='text-[#505050] flex gap-3 items-center'>
                            <img src={Call}/>
                            <p>شماره تماس</p>
                        </div>
                        <div className='text-[#505050] flex gap-3 items-center'>
                            <img src={Adsine}/>
                            <p>exampel@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className='flex gap-3 mt-10'>
                        <button className='bg-[#8B8B8B] text-white px-5 rounded-lg py-3'>درباره ما</button>
                        <button className='bg-[#1ed846] text-[#555555] px-6 rounded-lg py-3'>تماس با ما</button>

                    </div>
                    
                    <p className='mt-16 text-[#595959] text-center'>
                    تمامی حقوق مادی و معنوی این وبسایت متعلق به ویداس می باشد 
                    و هرگونه کپی برداری پیگرد قانونی دارد.
                    </p>




            </div>

        </footer>
    </>

    )
}

export default Footer