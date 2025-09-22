import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Welcome to Onifit, where fitness meets fashion in the most stylish and functional way possible! We are not just a brand; we are a lifestyle that embodies the spirit of dedication, passion, and self-improvement.

At Onifit , we believe that your workout gear should be more than just clothing; it should be a reflection of your commitment to health and wellness. That's why we design and curate premium gymwear that not only looks  good but also performs exceptionally well during your toughest workouts.</p>
              <p>Our journey began with a simple vision: to create gymwear that empowers individuals to unleash their full potential in the gym and beyond. Over the years, we've grown from strength to strength, thanks to our loyal community of fitness enthusiasts who trust us to deliver quality, style, and comfort in every stitch.
</p>
              <b className='text-gray-800'>Welcome to the future of gym wear. Welcome to ONIFIT. </b>
              <p>What sets Onifit apart is our relentless pursuit of excellence. From cutting-edge fabric technologies to trend- setting designs, we leave no stone unturned in ensuring that every Onifit product meets the highest standards of performance and style.

Whether you're hitting the weights, mastering yoga poses, or conquering outdoor runs, Onifit  has got you  covered with a range of premium activewear designed to elevate your fitness game.

Join the Onifit movement today and experience fitness fashion like never before. Get ready to sweat in style, you push your limits, and unleash your inner athlete with Onifit.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className=' text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
