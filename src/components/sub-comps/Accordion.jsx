import { useState } from "react";

const Accordion = (props) => {
    const [accordionOpen, setAccordionOpen] = useState(false)
    
    return (  
        <>
        <div class="py-2">
            <button 
                onClick={() => setAccordionOpen(!accordionOpen)} 
                class="flex justify-between bg-white w-full focus:ring-0"
            >
                <span class="text-black text-xl font-semibold">{props.title}</span>
                {accordionOpen ? <span class="text-2xl">-</span> : <span class="text-2xl">+</span>}
            </button>

            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm 
                ${
                accordionOpen 
                    ? "grid-rows-[1fr] opacity-100" 
                    : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div class="text-left text-gray-500 px-5 overflow-hidden">
                    {props.subTitle}
                </div>
            </div>
            
        </div>
        </>
    );
}
 
export default Accordion;