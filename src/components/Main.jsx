const Main = ({activeSection}) => {
    return (  
    <>
        <div id="main" className={activeSection === "main" ? "text-primaryColor" : "text-secondaryColor"}>
            <img src="/images/Ellipse 1.png" class="absolute h-full top-24 left-0"/>
            <img src="/images/Ellipse 1.png" class="absolute h-full top-0 rotate-180 right-0"/>
            <section class="mb-12">
                <div class="py-8 px-4 mx-auto max-w-screen-xl grid justify-items-center lg:pt-40">
                    <img src="/images/Frame.png" class="grid h-96" alt="Remimic Logo"/>

                    <h1 class="mt-10 mb-4 text-3xl font-semibold text-secondaryColor md:text-4xl lg:text-5xl">Skip The Filming!</h1>

                    <span class="bg-gradient-to-r h-0.5 w-60 mb-4 from-transparent via-primaryColor to-transparent"></span>

                    <p class="mb-8 text-lg font-medium text-gray-500 lg:text-xl sm:px-16 lg:px-72">
                    Repurpose unlimited TikTok Videos and make them to yours using the new Deepfake AI Technology!
                    </p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" class="secondaryButton inline-flex justify-center items-center py-2 px-10 text-base font-medium text-center text-secondaryColor rounded-full outline outline-secondaryColor outline-1" >
                            Learn More
                        </a>
                        <a href="#" class="CTAbuttonToHover inline-flex justify-center items-center py-2 px-10 sm:ms-4 text-base font-medium text-center text-white rounded-full bg-primaryColor">
                            Get started
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>  
                    </div>
                </div>
            </section>
        </div> 
    </>
    );
}
 
export default Main;