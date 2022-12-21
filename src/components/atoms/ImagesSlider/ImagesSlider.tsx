import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { FC,useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface FullImgProps {
  img:string[]
  isActive:boolean
  setShowFull:(a:boolean)=>void
  currentFull:number
}



const FullImg:FC<FullImgProps> = ({ img, isActive, setShowFull,currentFull }) => {
 

  return isActive ? (
    <div
      className="w-screen h-screen fixed top-0 left-0 z-50 bg-neutral-900 bg-opacity-[99%] flex flex-col gap-5 justify-center items-center"
      onClick={() => setShowFull(false)}
    >
      <img src={img[currentFull]} alt='Зображення квартири в повний розмір' className="w-[99vw]  object-cover" />
    </div>
  ) : (
    <div />
  );
};



interface ImagesSliderProps{
  images:string[]
}


const ImagesSlider:FC<ImagesSliderProps> = ({ images }) => {
  const [showFull, setShowFull] = useState<boolean>(false);
  const [currentFull,setCurrentFull] = useState<number>(0)


  if (images.length === 0) {
    return null
  }



  return (
    <>
      <Swiper
        className="smallSwiper aspect-square md:w-4/6 lg:w-2/6"
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {images && 
          images.map((image:string,i:number ) => (
            <SwiperSlide key={i}>
              <img src={image} alt='Зображення товару'
              onClick={() => {
            setShowFull(true)
            
            setCurrentFull(i)
              }} 
              className='w-full object-cover '/>
            </SwiperSlide>
          ))}



      </Swiper>

      <FullImg img={images} isActive={showFull} setShowFull={setShowFull} currentFull={currentFull}/>
    </>
  );
};

export default ImagesSlider;