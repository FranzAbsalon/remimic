import { motion } from "framer-motion"

const Pricing = () => {
    return (  
    <>
        <div id="pricing" class="py-10 mb-12 mx-auto max-w-screen-xl grid justify-items-center">
            <h1 class="mt-12 mb-4 text-3xl font-semibold text-secondaryColor md:text-4xl lg:text-5xl">Pricing</h1>
            <span class="bg-gradient-to-r h-0.5 w-60 mb-4 from-transparent via-primaryColor to-transparent"></span>

            <p class="my-2 text-lg font-medium text-gray-500 lg:text-xl">
                How much will the service cost you?
            </p>

            <div class="grid justify-items-center grid-cols-2 gap-4 mt-12">
                <motion.div whileHover={{ scale: 1.05, transition: {duration: 0.4} }}>
                    <a href="#" class="block text-left max-w-lg p-12 bg-red-100 border border-gray-200 rounded-lg">
                        <h4 class="mb-2 text-3xl font-bold tracking-tight text-gray-900">Endless Usage</h4>
                        <h1 class="text-primaryColor text-4xl pt-4">$ <span class="text-9xl font-bold">47.-</span><span class="text-black"> /month</span></h1>
                        <p class="text-xl pt-6 font-medium text-gray-500">How much will the service cost you?</p>
                    </a>
                </motion.div>

                <div class="grid p-12">
                    <div class="text-left">
                        <h4 class="text-left mb-6 text-3xl font-bold tracking-tight text-gray-900">Benefits</h4>

                        <div className="flex items-center py-2">
                            <svg className="w-5 h-5 mr-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm13.7-1.3a1 1 0 0 0-1.4-1.4L11 12.6l-1.8-1.8a1 1 0 0 0-1.4 1.4l2.5 2.5c.4.4 1 .4 1.4 0l4-4Z" clip-rule="evenodd"/>
                            </svg>
                            <span className="text-xl font-medium text-gray-500">Generated Unlimited Deepfakes</span>
                        </div>

                        <div className="flex items-center py-2">
                            <svg className="w-5 h-5 mr-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm13.7-1.3a1 1 0 0 0-1.4-1.4L11 12.6l-1.8-1.8a1 1 0 0 0-1.4 1.4l2.5 2.5c.4.4 1 .4 1.4 0l4-4Z" clip-rule="evenodd"/>
                            </svg>
                            <span className="text-xl font-medium text-gray-500">Unlimited automatic Tiktok uploads</span>
                        </div>
                                
                    </div>

                    <span class="bg-gradient-to-r h-0.5 w-96 my-4 from-primaryColor via-primaryColor to-transparent"></span>
                    <div class="text-left pt-6">
                        <a href="#" class="CTAbuttonToHover inline-flex justify-center items-center py-2 px-10 sm:ms-4 text-base font-medium text-center text-white rounded-full bg-primaryColor">
                            Get started
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a> 
                    </div>
                    
                </div>
            </div>

        </div>
    </>
    );
}
 
export default Pricing;