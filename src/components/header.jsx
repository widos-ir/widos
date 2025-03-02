import React, { Component } from 'react'
import Logo from './../assets/icons/widos-logo.png'
import Home from './../assets/icons/home-2.svg'
import Edit from './../assets/icons/edit.svg'
import Note from './../assets/icons/note.svg'
import About_us from './../assets/icons/about-us.svg'
import Call from './../assets/icons/call-calling.svg'
import Book from './../assets/icons/book.svg'
import Services from './../assets/icons/services-2.svg'
import Simple_works from './../assets/icons/document-copy.svg'



let alt_for_img = "ویداس widos";


function Header(params) {
    let header_items=[
        {text:"صفحه اصلی" , icon:Home},
        {text:"خدمات" , icon:Edit},
        {text:"نمونه کار ها" , icon:Note},
        {text:"درباره ما" , icon:About_us},
        {text:"تماس با ما" , icon:Call},
        {text:"وبلاگ" , icon:Book},
    ]
    let header_items_for_mobile=[
        {text:"خانه" , icon:Home},
        {text:"خدمات" , icon:Services},
        {text:"نمونه کار ها" , icon:Simple_works},
        {text:"تماس با ما" , icon:Call},
    ]
    return(
    <>
        <header className='flex items-center sm:justify-between justify-end p-2 sm:px-12 px-4 border-[#CDCDCD] border-b-[0.01px] fixed w-full top-0 bg-white z-100'>
            <ul className='sm:flex hidden gap-2 items-center'>
                {
                    header_items.map((item)=>{
                        return(                     
                           <li className=' hover:bg-[#44c96c] transition  transform hover:shadow-lg cursor-pointer duration-300 flex items-center justify-between gap-1 h-min hover:text-white text-gray-700 p-2 py-1 rounded-3xl text-center'>
                                <img alt={alt_for_img} src={item.icon}/>
                                <p className=''>{item.text}</p>
                            </li>

                        )
                        
                    })
                }

            </ul>
            <div>
                <img alt={alt_for_img} className='sm:w-[80px] w-[60px]' src={Logo}/>
            </div>

        </header>

        {/* for mobile */}
        <header className='w-full fixed bottom-0  p-4 sm:hidden inline glass rounded-t-4xl z-20'>

                <ul className='flex px-4 justify-between'>
                    {
                        header_items_for_mobile.map((item)=>{
                            return(
                                <>
                                    <li className='flex  flex-col justify-between items-center text-center gap-2  '>
                                        <img alt={alt_for_img} className='w-6' src={item.icon}/>
                                        <p className='text-md'>{item.text}</p>
                                    </li>
                                </>
                            );
                        })
                    }
                </ul>

        </header>
    </>

    )
}

export default Header