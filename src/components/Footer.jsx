import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
    return (  
    <>
        <footer class="bg-secondaryColor text-left">
            <div class="mx-auto w-3/4 max-w-screen-xl p-4 py-6 lg:py-12">
                <div class="grid grid-cols-2">

                    <div class="mb-6 md:mb-0">
                        <p class="flex mb-6 items-center">
                            <span class="h-3 w-3 bg-primaryColor rounded-full"></span>
                            <span class="ps-3 text-xs font-normal text-gray-300">MENU</span>
                        </p>

                        <ul class="text-white text-2xl font-medium">
                            <li class="mb-4">
                                <Link
                                    to="main" 
                                    spy={false} 
                                    smooth={true} 
                                    offset={0} 
                                    duration={500}
                                    className="hover:text-primaryColor cursor-pointer text-gray-300">Home
                                </Link>
                            </li>
                            <li class="mb-4">
                                <Link
                                    to="about" 
                                    spy={false} 
                                    smooth={true} 
                                    offset={-100} 
                                    duration={500}
                                    className="hover:text-primaryColor cursor-pointer text-gray-300">About
                                </Link>
                            </li>
                            <li class="mb-4">
                                <Link
                                    to="pricing" 
                                    spy={false} 
                                    smooth={true} 
                                    offset={-100} 
                                    duration={500}
                                    className="hover:text-primaryColor cursor-pointer text-gray-300">Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="faq" 
                                    spy={false} 
                                    smooth={true} 
                                    offset={-150} 
                                    duration={500}
                                    className="hover:text-primaryColor cursor-pointer text-gray-300">FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div class="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3 border-t-8 border-primaryColor">
                        <div class="col-span-2 pt-4">
                            <p class="flex mb-6 items-center">
                                <span class="h-3 w-3 bg-primaryColor rounded-full"></span>
                                <span class="ps-3 text-xs font-normal text-gray-300">Contact Us</span>
                            </p>
                            <p class="text-sm text-gray-300">+1 980 971-24-19</p>
                            <p class="text-sm text-gray-300">hello@logoipsum.com</p>
                            <br />
                            <p class="flex mb-6 items-center">
                                <span class="h-3 w-3 bg-primaryColor rounded-full"></span>
                                <span class="ps-3 text-xs font-normal text-gray-300">Location</span>
                            </p>
                            <p class="text-sm text-gray-300">1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                            <p class="text-3xl text-white py-2">10am—6pm</p>
                            <p class="text-sm text-gray-300">/ Everyday</p>
                        </div>
                        
                        <div class="md:text-right lg:text-right pt-4">
                            <ul class="flex flex-column">
                                <li class="mr-4">
                                   <img src="/icons/fb.png" alt="Facebook" class="bg-white cursor-pointer rounded-full p-3"/>
                                </li>
                                <li>
                                    <img src="/icons/vk.png" alt="VK" class="bg-white cursor-pointer rounded-full p-3"/>
                                </li>
                                <li class="ml-4">
                                   <img src="/icons/ig.png" alt="IG" class="bg-white cursor-pointer rounded-full p-3"/>
                                </li>
                            </ul>
                            <ul class="flex flex-column justify-end pt-3">
                                <li class="mr-4 w-12">
                                    <img src="/icons/tg.png" alt="Telegram" class="cursor-pointer"/>
                                </li>
                                <li class="w-12">
                                   <img src="/icons/wa.png" alt="Whatsapp" class="cursor-pointer"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-12" />

                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="#" class="flex items-center">
                        <img src="/images/logo_only.png" class="h-8 me-3" alt="FlowBite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Remimic</span>
                    </a>

                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 — Copyright</span>
                    
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Privacy</span>
                </div>
            </div>
        </footer>
    </>
    );
}
 
export default Footer;