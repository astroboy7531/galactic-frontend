import React from 'react'

export default function PrivacyContent() {
    return (
        <div className='w-full flex flex-col border-0 relative py-12 font-Josefin bg-[#F0EBE5] about-shadow'>
            <div className='w-full flex flex-col overflow-y-visible absolute z-10'>
                <div>
                    <img className=' object-center object-cover min-w-[100%] top-[-150px] md:top-[-200px] lg:top-[-270px] relative' alt='cloud' src='/about/cloudTop.png' />
                </div>
            </div>
            <div className='w-full max-w-[1240px] z-20 flex flex-col gap-14 px-10 mx-auto pt-[100px] text-dark-text'>
                <div className='flex flex-col w-full gap-4'>
                    <div className='font-bold text-xl md:text-2xl uppercase'>
                        COPYRIGHT INFRINGEMENT
                    </div>
                    <div className='text-base md:text-lg'>
                        This is a statement affirming that the company has good faith belief that the use of the material in the manner complained of is not authorized by the company, its agent, or the law. A statement that the information in the notification is accurate, and under penalty of perjury, that the complainant is authorized to act on behalf of the owner of the exclusive right that is allegedly infringed.
                    </div>
                </div>
                <div className='flex flex-col w-full gap-4'>
                    <div className='font-bold text-xl md:text-2xl uppercase'>
                        LEGAL NOTICE FOR COPYRIGHT INFRINGEMENT
                    </div>
                    <div className='text-base md:text-lg'>
                        A legal notice for copyright infringement is a formal, written document that will be sent by the company or the company's authorized representative to an individual or entity accused of infringing upon the company's exclusive rights.<br />
                        The purpose of this notice is to inform the alleged infringer of the violation and request the immediate removal of the infringing material or the cessation of the infringing activity.
                        <br /><br />
                        The legal notice may also serve as a precursor to further legal action if the alleged infringement is not resolved.<br />
                        This document focuses on a significant clause that we believe is necessary for the interest of our global investors and interested parties - the “Originality/First Creator of Idea” clause. This clause is aimed at reaffirming that all the concepts, mechanics, and designs used in the gaming project have been developed and crafted by our team without any use of ideas, components, or assets from pre-existing games or projects. This is an assertion of the originality of our project and it serves the following purposes:
                        <br /><br />
                        1. Intellectual Property Protection: This clause ensures our intellectual property rights are protected and safeguarded. The originality of our idea is the lifeblood of our project, wherein our team has invested much time and effort. By agreeing to this clause, both parties recognize and acknowledge the input of our team and the unique value proposition of the project (UAE Federal Law No. 7 of 2002 Concerning Copyrights and Neighboring Rights).
                        <br /><br />
                        2. Prevention of Future Disputes: The clause helps minimize potential disputes related to copyright infringement and origination of ideas. This avoids the protracted and potentially costly process of handling such disputes.
                        <br /><br />
                        3. Market Positioning: By officially validating the originality of our project, we make a strong statement to our potential customers and competitors. It creates a clear differentiating factor in a saturated gaming market, enhancing our competitive positioning and piquing the interest of our target audience. In conclusion, we believe that the incorporation of the Originality/First creator of Idea clause is a crucial step in securing our intellectual rights, preventing possible disagreements, concept and gaming idea theft, and boosting our position in the gaming industry. The affirmance of the originality of our brainstormed gaming idea provided ab initio by our team will assure safer navigation of the gaming market.
                    </div>
                </div>
            </div>
        </div>
    )
}
