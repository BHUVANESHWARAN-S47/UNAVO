import React, { useEffect, useState } from 'react';

const QRCodeComponent = ({ data, text }) => {
  const [qrImage, setQrImage] = useState(null);

  useEffect(() => {
    // Using QR Code API from qrserver.com
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(data)}`;
    setQrImage(qrUrl);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center">
      {qrImage && (
        <img
          src={qrImage}
          alt="QR Code"
          className="w-64 h-64 border-4 border-gray-300 rounded-lg p-2 bg-white"
        />
      )}
      {text && <p className="mt-4 text-gray-600 font-semibold">{text}</p>}
    </div>
  );
};

export default QRCodeComponent;
