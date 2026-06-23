import React from 'react'

function PrivacyPolicy() {
  return (
    <div className='w-[100%] min-h-[100vh] bg-[#ecfafa] pt-[90px] pb-[100px] px-[20px] md:px-[100px]'>
      <h1 className='text-[28px] md:text-[36px] font-bold text-black mb-[10px]'>Privacy Policy</h1>
      <p className='text-[13px] text-gray-500 mb-[30px]'>Last updated: June 2026</p>

      <section className='mb-[25px]'>
        <h2 className='text-[20px] font-semibold text-black mb-[8px]'>1. Information We Collect</h2>
        <p className='text-[15px] text-[#333] leading-relaxed'>We collect information you provide directly to us, such as your name, email address, shipping address, and payment details when you register or place an order on LotusCart.</p>
      </section>

      <section className='mb-[25px]'>
        <h2 className='text-[20px] font-semibold text-black mb-[8px]'>2. How We Use Your Information</h2>
        <p className='text-[15px] text-[#333] leading-relaxed'>We use the information we collect to process your orders, send order confirmation emails, improve our services, and communicate with you about updates or promotions.</p>
      </section>

      <section className='mb-[25px]'>
        <h2 className='text-[20px] font-semibold text-black mb-[8px]'>3. Sharing of Information</h2>
        <p className='text-[15px] text-[#333] leading-relaxed'>We do not sell or rent your personal information to third parties. We may share your data with trusted service providers (such as payment gateways and delivery partners) solely to fulfill your orders.</p>
      </section>

      <section className='mb-[25px]'>
        <h2 className='text-[20px] font-semibold text-black mb-[8px]'>4. Cookies</h2>
        <p className='text-[15px] text-[#333] leading-relaxed'>LotusCart uses cookies to keep you logged in and improve your browsing experience. You can disable cookies in your browser settings, but some features may not work properly.</p>
      </section>

      <section className='mb-[25px]'>
        <h2 className='text-[20px] font-semibold text-black mb-[8px]'>5. Data Security</h2>
        <p className='text-[15px] text-[#333] leading-relaxed'>We take reasonable measures to protect your personal information. Passwords are hashed and stored securely. Payment transactions are processed through Razorpay, a PCI-compliant payment gateway.</p>
      </section>

      <section className='mb-[25px]'>
        <h2 className='text-[20px] font-semibold text-black mb-[8px]'>6. Your Rights</h2>
        <p className='text-[15px] text-[#333] leading-relaxed'>You may request to access, update, or delete your personal data at any time by contacting us at pnkmaurya9307@gmail.com.</p>
      </section>

      <section className='mb-[25px]'>
        <h2 className='text-[20px] font-semibold text-black mb-[8px]'>7. Changes to This Policy</h2>
        <p className='text-[15px] text-[#333] leading-relaxed'>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.</p>
      </section>
    </div>
  )
}

export default PrivacyPolicy