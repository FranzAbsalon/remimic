import Accordion from "./sub-comps/Accordion";

const FAQs = () => {
    return (  
    <>
        <div id="faq" class="mb-24 mx-auto max-w-screen-xl grid justify-items-center">
            <h1 class="mb-4 text-3xl font-semibold text-secondaryColor md:text-4xl lg:text-5xl">FAQs</h1>
            <span class="bg-gradient-to-r h-0.5 w-60 mb-4 from-transparent via-primaryColor to-transparent"></span>

            <p class="mt-2 mb-10 text-lg font-medium text-gray-500 lg:text-xl">
                Most relevant questions of your minds
            </p>
            
            {/* Accordion */}
            <div class="p-4 bg-white rounded-lg shadow-lg w-full">
                <Accordion
                    title="How does paying work?"
                    subTitle="We're proud to offer professional Ocean Freight services. We've partnered with the biggest ocean carriers in order to provide our customers with the best possible service."
                />
                <hr class="mx-4"/>
                <Accordion
                    title="Do I need to pay in advance?"
                    subTitle="Advance payment is required for our services/products to ensure efficiency. It secures your order, and various payment options, like credit cards and online transfers, are available. Check our payment terms for details."
                />
                <hr class="mx-4"/>
                <Accordion
                    title="Can I get my money back if entered to much?"
                    subTitle="Contact our customer support promptly for assistance with accidental overpayments. While refunds aren't guaranteed, we'll do our best to help resolve the situation and provide guidance. Your satisfaction is important to us."
                />
                <hr class="mx-4"/>
                <Accordion
                    title="What is about Copyright?"
                    subTitle="Copyright protects original creative works. It grants exclusive rights to creators. Ensure compliance with copyright laws when using such material."
                />
                <hr class="mx-4"/>
                <Accordion
                    title="How do I register?"
                    subTitle="o register, click on the 'Register' button on our website and follow the prompts. Provide the required information, and you'll be all set. Welcome aboard!"
                />
            </div>

        </div>
    </>        
    );
}
 
export default FAQs;