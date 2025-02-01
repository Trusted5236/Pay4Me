import React from 'react'

const CardComponent = () => {
  return (
    <div className='p-[2rem] w-full flex flex-row items-center justify-center md:justify-between flex-wrap gap-y-[1rem]'>

<div className='w-[80%] md:w-[45%]  bg-[#FFFFFF] p-[16px] md:p-[32px] rounded-[24px] shadow-custom flex flex-col gap-y-[20px]'>
      <div className='flex flex-col items-start gap-y-[20px]'>
        <h1 className='font-bold text-[10px] md:text-[20px]'>{1}</h1>
        <h1 className='font-bold text-[12px] md:text-[24px]'>{"Download the Mobile App"}</h1>
        <p className=' text-[10px] md:text-[16px] text-[#7D7D7D]'>{"Get started by downloading our mobile app, available on iOS and Android."}</p>
      </div>

      <div className='flex flex-col items-center justify-center'>
            <div className='bg-[#242323] rounded-[16px] px-[26.42px] md:px-[52.84px] md:py-[25px] py-[12.5px] w-[50%] md:w-[269.69px]'>
                <img src="pay4me_qrcode_rounded.svg.png" className='w-[164px]'/>
            </div>
      </div>
    </div>

    <div className='w-[80%] md:w-[45%] bg-[#FFFFFF] p-[16px] md:p-[32px] rounded-[24px] shadow-custom flex flex-col gap-y-[20px]'>
      <div className='flex flex-col items-start gap-y-[20px]'>
        <h1 className='font-bold text-[10px] md:text-[20px]'>{2}</h1>
        <h1 className='font-bold text-[12px] md:text-[24px]'>{"Sign up on the app."}</h1>
        <p className=' text-[10px] md:text-[16px] text-[#7D7D7D]'>{"Sign up with your details, verify your identity, and set up your payment preferences."}</p>
      </div>

      <div className='flex flex-col items-center justify-center '>
            <div className='bg-[#E7FBCF] rounded-[16px] pl-[26.42px] md:pl-[52.84px] pr-[26.42px] md:pr-[52.84px] md:pt-[50px] pt-[25px] md:pb-[0] py-[0]  w-[50%] md:w-[269.69px]'>
                <img src="Component 18.png" className='w-[164px]'/>
            </div>
      </div>
    </div>

    <div className='w-[80%] md:w-[45%] bg-[#FFFFFF] p-[16px] md:p-[32px] rounded-[24px] shadow-custom flex flex-col gap-y-[20px]'>
      <div className='flex flex-col items-start gap-y-[20px]'>
        <h1 className='font-bold text-[10px] md:text-[20px]'>{3}</h1>
        <h1 className='font-bold text-[12px] md:text-[24px]'>{"Setup Payment Details"}</h1>
        <p className=' text-[10px] md:text-[16px] text-[#7D7D7D]'>{"Securely link your local bank account or mobile wallet to the Pay4me app."}</p>
      </div>

      <div className='flex flex-col items-center justify-center'>
            <div className='bg-[#242323] rounded-[16px] px-[26.42px] md:px-[52.84px] md:py-[60px] py-[30px] w-[50%] md:w-[269.69px]'>
                <img src="Frame 1707479024.png" className='w-[164px]'/>
            </div>
      </div>
    </div>

    <div className='w-[80%] md:w-[45%] bg-[#FFFFFF] p-[16px] md:p-[32px] rounded-[24px] shadow-custom flex flex-col gap-y-[20px]'>
      <div className='flex flex-col items-start gap-y-[20px]'>
        <h1 className='font-bold text-[10px] md:text-[20px]'>{4}</h1>
        <h1 className='font-bold text-[12px] md:text-[24px]'>{"Complete Your Payment"}</h1>
        <p className=' text-[10px] md:text-[16px] text-[#7D7D7D]'>{"Choose your preferred payment method and finalize the transaction securely."}</p>
      </div>

      <div className='flex flex-col items-center justify-center'>
            <div className='bg-[#FFFFFF] px-[26.42px] md:px-[52.84px] md:py-[25px] py-[12.5px] w-[50%] md:w-[269.69px]'>
                <img src="Frame 1707479023.png" className='w-[164px]'/>
            </div>
      </div>
    </div>

    

    </div>
  )
}

export default CardComponent
