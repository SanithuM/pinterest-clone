import React, { useState, useRef, useEffect } from "react";
import { FiShare2 } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

function ImageCard({ url }) {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);

  // Determine media type
  const isVideoFile = url.match(/\.(mp4|webm|ogg)$/i);
  const isIframe = !isVideoFile && !url.match(/\.(jpg|jpeg|png|gif)$/i);

  // Close popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl group">
      {/* Render media */}
      {isVideoFile ? (
        <video
          src={url}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
        />
      ) : isIframe ? (
        <iframe
          src={url}
          className="w-full h-64 rounded-xl"
          frameBorder="0"
          loop
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <img
          src={url}
          alt="Wallpaper"
          className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-80 transition duration-300 flex flex-col justify-between">
        {/* Center Open Button */}
        <div className="flex justify-center mt-24">
          <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full shadow hover:bg-gray-200 cursor-pointer">
            Open
          </button>
        </div>

        {/* Bottom Right Buttons */}
        <div className="flex justify-end items-end p-3 space-x-2 relative">
          {/* Share Button */}
          <button className="p-2 rounded-full bg-white shadow hover:bg-gray-100 cursor-pointer">
            <FiShare2 className="text-gray-700" size={18} />
          </button>

          {/* More Options */}
          <div className="relative" ref={optionsRef}>
            <button
              onClick={() => setShowOptions(!showOptions)}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
            >
              <BsThreeDots className="text-gray-700" size={18} />
            </button>

            {showOptions && (
              <div className="absolute bottom-10 right-0 w-40 bg-white shadow-lg rounded-lg p-2 text-sm">
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">
                  Download media
                </button>
                <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">
                  Save media
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
