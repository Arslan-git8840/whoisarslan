import React from 'react'

const Navigation = () => {
  return (
    <nav className="flex justify-center mt-4">
      <div className="rounded-full shadow-md px-6 py-3 flex items-center gap-6"
      style={{
        background: 'linear-gradient(42deg, #1c1c1c, #626262)',
      }}>
        <img src="https://cdn.prod.website-files.com/6728eb6c23b9f1caa6167f3d/6728f57e0a1967ae74d0a548_behance-01.svg" loading="lazy" alt="" className="nav-linke-image"></img>
        <img
          src="https://cdn.prod.website-files.com/6728eb6c23b9f1caa6167f3d/6728f57dcfd9e2fa899afc82_mail-open-01.svg"
          loading="lazy"
          alt="Mail"
          className="w-6 h-6 nav-linke-image"
        />
         <img
          src="https://cdn.prod.website-files.com/6728eb6c23b9f1caa6167f3d/6728f6b057ba0557966f6509_Vector%208142.svg"
          loading="lazy"
          alt="Home"
          className="w-6 h-6 nav-linke-image"
        />
        <img
          src="https://cdn.prod.website-files.com/6728eb6c23b9f1caa6167f3d/6728f57dcfd9e2fa899afc87_dribbble.svg"
          loading="lazy"
          alt="Dribbble"
          className="w-6 h-6 nav-linke-image"
        />
        <img
          src="https://cdn.prod.website-files.com/6728eb6c23b9f1caa6167f3d/6728f57d1f135dd3563e3a39_f02.svg"
          loading="lazy"
          alt="LinkedIn"
          className="w-6 h-6 nav-linke-image"
        />
        <img src="https://cdn.prod.website-files.com/6728eb6c23b9f1caa6167f3d/6728f57d101cad04e0201a57_Frame%201618873031.svg" loading="lazy" alt="" className="nav-linke-image"></img>
      </div>
    </nav>
  )
}

export default Navigation
