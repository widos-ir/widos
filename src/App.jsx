import { useState } from 'react'
import masjed from './assets/images/masjed.png'
import widos_collection from './assets/images/widos_collection.jpg'
import rocket from './assets/icons/rocket-launch.svg'
import arrow_down from './assets/icons/arrow-down.svg'
function App() {
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
console.log(services_property.length)

  return (
    <>
      <section className='w-full flex md:flex-row flex-col md:justify-between my-16 relative mt-[150px]'>
        <div className='md:w-[50vw] w-full flex justify-end flex-col gap-14 md:order-1 order-2'>
          <img className='w-min' src={widos_collection}/>

          <p className=' stroke-neutral-700'>گروه ویـداس WiDOS به صورت مستقل توسط دانشجـــــــــویان مهنـــــــدسی کامپیوتر دانشگاه اصفهان تاسیس و اداره می‌شود که تضمــــــــین می‌دهد بالاترین کیــفیت نرم افزار و پشتیبانی را تجربه کنید.</p>
          
          {/* our services for mobile */}
          <div className=' md:hidden gap-[1vw] gap-y-4 grid grid-cols-2'>
            <p className=' text-stone-800 yekan-bold text-4xl'>خدمات ما</p>
                {
                  our_services.map((item)=>{
                    return(
                      <>
                       <div className='flex cursor-pointer transform hover:translate-y-[-2px] hover:shadow-2xl duration-300 gap-[1vw] items-center justify-center w-[15vw] min-w-[160px] max-w-[180px] bg-[#F5F5F5] rounded-xl px-[2vw] py-2 border-2 border-[#E0E0E0]'>
                        <img src={item.icon}/>
                        <p>{item.text}</p>
                      </div>
                      </>
                    );
                  })
                }
                
          {/* our services for desktop */}
          </div>
          <div className='md:flex md:flex-col gap-6 hidden'>
            <p className=' text-stone-800 yekan-bold text-4xl'>خدمات ما</p>
            <div className='flex gap-3'>
                {
                  our_services.map((item)=>{
                    return(
                      <>
                       <div className='flex cursor-pointer transform hover:translate-y-[-2px] hover:shadow-2xl duration-300 gap-2 items-center justify-center w-[15vw] min-w-[180px] max-w-[180px] bg-[#F5F5F5] rounded-xl px-4 py-2 border-2 border-[#E0E0E0]'>
                        <img src={item.icon}/>
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
           <img className=' ' src={masjed}/>
        </div>
          


        {/* absolute item------> */}
        <div className='bg-[#F8F8F8] w-full h-[100px] absolute  bottom-[-150px] flex rounded-b-4xl justify-center items-end'>
          <img className=' bg-[#F8F8F8] border-[18px]  border-white p-4 rounded-full w-[90px] h-[90px] box-border transform translate-y-1/2   ' src={arrow_down}/>
        </div>
        {/* ---------------- */}
      </section>

      <section className='md:flex hidden justify-center bg-[#F5F5F5] border-2 py-4 border-[#E0E0E0] w-full rounded-2xl mt-[220px] '>
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
      <section className='md:hidden flex flex-col gap-4 bg-[#F5F5F5] border-2 py-4 px-3 border-[#E0E0E0] w-full rounded-2xl mt-[200px]'>
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
    </>
  )
}
// F8F8F8
export default App
