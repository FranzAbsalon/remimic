import { motion } from "framer-motion";

const About = () => {

    return (  
    <>
        <section id="about" class="w-screen h-fit bg-secondaryColor overflow-y-hidden">
            <div class="py-24 mx-auto max-w-screen-xl grid justify-items-center">
                <h1 class="text-3xl font-semibold text-white md:text-4xl lg:text-5xl mb-4">How It Works</h1>
                <span class="bg-gradient-to-r h-0.5 w-56 from-transparent via-primaryColor to-transparent"></span>

                <p class="my-6 text-lg font-medium text-gray-300 lg:text-xl sm:px-16 lg:px-72">
                  Just change the face on already existing Videos!
                </p>

                <div class="grid justify-items-center grid-cols-3 md:grid-cols-5 gap-4 mt-4">
                    
                    <div class="relative">
                        <motion.div whileHover={{ scale: 1.05, transition: {duration: 0.4} }}>
                            <img class="h-96 max-w-full rounded-lg cursor-pointer" src="/images/image_1.png" alt="Tiktok Vid"/>
                        </motion.div>
                        <p class="text-white text-2xl mt-5 font-semibold">TikTok Videos</p>
                    </div>

                    <div class="grid place-items-center">
                        <div class="bg-white p-4 rounded-full">
                            <svg className="w-10 h-10 p-2 text-black outline outline-2 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                            </svg>
                        </div>
                    </div>

                    <div>
                        <motion.div whileHover={{ scale: 1.05, transition: {duration: 0.4} }}>
                            <img class="h-96 max-w-full rounded-lg cursor-pointer" src="/images/image_2.png" alt="Face Image"/>
                        </motion.div>
                        <p class="text-white text-2xl mt-5 font-semibold">Face Image</p>
                    </div>

                    <div class="grid place-items-center">
                        <div class="bg-white p-4 rounded-full">
                            <svg className="w-10 h-10 p-2 text-black outline outline-2 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                            </svg>
                        </div>
                    </div>

                    <div>
                        <motion.div whileHover={{ scale: 1.05, transition: {duration: 0.4} }}>
                            <img class="h-96 max-w-full rounded-lg cursor-pointer" src="/images/image_3.png" alt="Deepfake"/>
                        </motion.div>
                        <p class="text-white text-2xl mt-5 font-semibold">Deepfake</p>
                    </div>
                    
                </div>

            </div>
        </section>
    </> 
    );
}
 
export default About;