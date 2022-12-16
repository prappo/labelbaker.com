import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [top, setTop] = useState(true)

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && 'bg-white backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                className="w-10"
                enableBackground="new 0 0 406.585 406.585"
                version="1.1"
                viewBox="0 0 406.585 406.585"
                xmlSpace="preserve"
              >
                <path
                  fill="#F7E88B"
                  d="M203.292 406.585L17.588 289.939 203.292 173.292 388.997 289.939z"
                ></path>
                <path
                  fill="#F9A18A"
                  d="M203.292 319.935L17.588 203.289 203.292 86.642 388.997 203.289z"
                ></path>
                <path
                  fill="#88C5FC"
                  d="M388.997 116.64L203.298 233.29 145.077 196.72 77.548 154.3 17.588 116.64 203.298 0 229.537 16.48 297.078 58.9z"
                ></path>
                <path
                  fill="#F2F2F2"
                  d="M86.563 246.614L203.292 319.936 320.023 246.614 203.292 173.292z"
                  enableBackground="new"
                  opacity="0.23"
                ></path>
                <path
                  fill="#F2F2F2"
                  d="M86.559 159.966L203.292 233.291 320.027 159.966 203.292 86.642z"
                  enableBackground="new"
                  opacity="0.23"
                ></path>
              </svg>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li></li>
              <li>
                <a
                  target="_blank"
                  href="https://app.labelbaker.com"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                >
                  <span>Open App</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
