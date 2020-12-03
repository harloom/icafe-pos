import React from 'react'
import { QRCode } from 'react-qrcode-logo';
// interface IScanMobilePage {

// }



const ScanMobilePage = () => {
  return (
    <div className="flex-none  flex justify-center relative w-full min-h-screen max-h-screen">
      <div className="static w-full h-52 bg-gradient-to-b from-yellow-600 to-yellow-400"></div>
      <div className="absolute w-full px-3 md:px-5 lg:px-10 top-10 z-10  ">
        <div className="bg-white rounded-md flex flex-col justify-center items-center py-5">

          <p className="font-semibold text-md text-gray-700 antialiased sm:subpixel-antialiased md:antialiased ">
            Welcome
                </p>
          <p className="font-semibold text-md text-gray-600 antialiased sm:subpixel-antialiased md:antialiased font-mono">
            Scan to use Mobile App</p>

          <div>
            <QRCode value="https://github.com/gcoro/react-qrcode-logo" 
            logoImage={"/logo512.png"}
            size={200}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScanMobilePage;