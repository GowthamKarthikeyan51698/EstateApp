import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

export default function listing() {
  SwiperCore.use( [Navigation] );
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  useEffect(() => {
    const fetchListing = async () => {
      try{
        setLoading(true)
        const response = await fetch(`/api/listing/get/${params.id}`)
        const data = await response.json();
        if(data.success === false){
          setError(true)
          setLoading(false)
          return;
        }
        setListing(data);
        console.log(data)
        setLoading(false)
      } catch(err){
        setError(true);
        setLoading(false);
      }
    }
    fetchListing();
  }, [params.id])
  return (
    <main>
        {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
        {error && <p className='text-center my-7 text-2xl text-red-500'>Something went wrong!</p>}
        {listing && !loading && !error && (
          <>
            <Swiper navigation>
              {listing.imageUrls.map((url) => (
                <SwiperSlide key={url} >
                  <div className='h-[500px]' style={{background: `url(${url}) center no-repeat`, backgroundSize:'cover'}}>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>

        )}
    </main>
  )
}
