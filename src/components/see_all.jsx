import arrow_left from './../assets/icons/arrow-left.svg'

function Main() {
    return(
        <button type='button' className=' hover:shadow-2xl bg-[#F8F8F8] h-min  px-5 py-2 w-[150px] flex justify-between items-center border-1 border-[#9F9F9F] rounded-lg text-[#4A4A4A] duration-300 cursor-pointer '>مشاهده همه <img alt="ویداس widos" src={arrow_left}/></button>
    );
}
export default Main;