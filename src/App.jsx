import './App.css'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Main from './components/Main'
import About from './components/About'
import Pricing from './components/Pricing'
import FAQs from './components/FAQs'
import Footer from './components/Footer'
import { Link, animateScroll as scroll } from 'react-scroll'

function App() {
  const lenis = useLenis(({ scroll }) => {})

  return (
    <>
      <ReactLenis root>
      <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 md:h-24">
                
                <div class="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li>
                        <Link 
                            to="main" 
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={500}
                            class="block py-2 px-3 cursor-pointer text-primaryColor font-semibold md:bg-transparent md:p-0" aria-current="page"
                            >Home
                          </Link>
                        </li>
                        <li>
                        <Link 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={500}
                            class="block py-2 px-3 cursor-pointer text-secondaryColor font-semibold md:hover:bg-transparent md:hover:text-primaryColor md:p-0"
                            >About
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="pricing" 
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={500}
                            class="block py-2 px-3 cursor-pointer text-secondaryColor font-semibold md:hover:bg-transparent md:hover:text-primaryColor md:p-0"
                            >Pricing
                          </Link>
                        </li>
                        <li>
                        <Link 
                            to="faq" 
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={500}
                            class="block py-2 px-3 cursor-pointer  text-secondaryColor font-semibold md:hover:bg-transparent md:hover:text-primaryColor md:p-0"
                            >FAQs
                          </Link>
                        </li>
                    </ul>
                </div>

                <a href="#" class="flex items-center space-x-3">
                    <img src="/images/logo.png" class="h-10" alt="Remimic Logo"/>
                </a>

                <div class="flex space-x-3 md:space-x-0">
                    <ul class="flex flex-col md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <button type="button" className="buttonToHover" class="text-secondaryColor bg-white outline outline-secondaryColor outline-1 font-medium rounded-full text-sm px-10 py-3 text-center">Register</button>
                        </li>
                        <li>
                            <button type="button" className="buttonToHover" class="text-white bg-primaryColor font-medium rounded-full text-sm px-10 py-3 text-center">Login</button>
                        </li>
                    </ul>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>

            </div>
        </nav>
        <Main />
        <About/>
        <Pricing />
        <FAQs />
        <Footer />
      </ReactLenis>
    </>
  )
}

export default App
