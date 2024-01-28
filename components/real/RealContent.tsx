import React from 'react'

export default function RealContent() {
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
                        1. PERSONAL INFORMATION WE COLLECT
                    </div>
                    <div className='text-base md:text-lg pl-2'>
                        We will process and use the following Information about you:
                    </div>
                    <div className='text-base md:text-lg pl-2 gap-4'>
                        <p>- Information you provide to us</p>
                        <ul className=' list-disc ml-2 pl-4'>
                            <li>Registration information</li>
                            <li>Mobile Games: if you use the Galactic kingdom mobile game application, you provided us with your email address, password, date of birth, avatar and username when you opened your account. This registration option is no longer available to new players.</li>
                            <li>Information collected via our customer support channels: when you interact with us through our customer support provider, we ask you to provide (a) your full name, username and email, and (b) any information you choose to provide to allow us to assist you like Game ID, device brand and model, transaction records or device language.</li>
                            <li>Information you provide when using the Games: when you play the Games, we may ask you to choose a username.</li>
                            <li>In-Game Communication: in some Games you can interact with other players via chat, In this case we would process Information regarding such interactions, including timestamps or chat content. In some cases, these functionalities may be provided by third parties, in which case we may not have access to the content of such communications.</li>
                            <li>Information collected through surveys: we may ask you to complete surveys about your experience. The Information we collect from you varies depending on the survey, but we typically ask you questions about your interests and habits, your opinion about different products and services and what you&apos;d like to be offered in the future. We also collect your ratings, opinions, preferences, questions, pictures, and responses associated with that survey.</li>
                        </ul>
                    </div>
                    <div className='text-base md:text-lg pl-2 gap-4'>
                        <p>- Information we automatically collect or is generated about you when you play the Games</p>
                        <ul className=' list-disc ml-2 pl-4'>
                            <li>Identifiers: your IP address, advertising ID, device ID, country and city level location data and device information (such as model, brand, language, and operating system)</li>
                            <li>Information regarding your use of the Games: game ID, install and uninstall timestamps. date and time stamps of game events, game time, achieved scores, interactions with our teams, advertising and promotions engagement, transaction records, evidence of you using cheating software or using modified versions of the Games.</li>
                        </ul>
                    </div>
                    <div className='text-base md:text-lg pl-2 gap-4'>
                        <p>- Information received from third parties</p>
                        <ul className=' list-disc ml-2 pl-4'>
                            <li>Registration via third parties: when you register using a third-party account (e.g. X formerly known as “Twitter”, Google or Apple) we receive your name, profile picture, third party ID, email address and friends list (optional).</li>
                            <li>Analytics Information: we integrate analytics software from third party analytics providers in some of our Games. We then receive reports that help us optimize our in-game features and events to each user of our Games which include your user ID and information on your in-game activity.</li>
                            <li>Advertising partners: we receive Information from third-party advertising providers, including user ID and Information on your interactions with advertising shown in on our Mobile Games.</li>
                            <li>Mobile measurement partners: we receive information from third parties to allow us to track performance of our marketing campaigns and to detect fraud in such campaigns. This includes advertising ID, IP address, location, and transaction information.</li>
                            <li>Communication providers: in some Games you may have functionalities like chat, audio, or video calls. When these are provided by third parties, we will receive Information about you from them, including third-party IDs, usernames, or content in some cases.</li>
                        </ul>
                    </div>
                    <div className='text-lg md:text-xl pl-2 uppercase'>
                        Children
                    </div>
                    <div className='text-base md:text-lg pl-4'>
                        Our Games are not targeted at people who are under the age of 13 (“Child” or “Children”). If you are a Child, we recommend that you obtain permission from your parents or legal guardian (“Parents”) to play our Game. You should also read this Policy with your Parents so they can help you understand anything you may not understand. If you are a Parent and are concerned about your Child&apos;s use of our Game or have any questions, you can contact us appropriately.
                    </div>
                </div>

                <div className='flex flex-col w-full gap-4'>
                    <div className='font-bold text-xl md:text-2xl uppercase'>
                        2. HOW WE USE YOUR PERSONAL INFORMATION
                    </div>
                    <div className='text-base md:text-lg pl-2'>
                        We use your Information to:
                    </div>
                    <ul className='text-base md:text-lg pl-2 gap-4 list-disc'>
                        <li> Provide you with the Games. We will use your Information to perform our contractual obligation towards you to allow you to create an account, play the Game (including as a guest), remember your progress, allow you to play Games with your friends and communicate with them via in-Game chat, audio, or video calls (if applicable).</li>
                        <li> Improve and monitor Game use. It is in our legitimate interests to improve our Games for our customers. When doing so, we may automatically collect information or generate Information about you when you play the Games, as well as Information about your device such as battery, Wi-Fi strength, device manufacturer, model and operating system, and the amount of free space on your device.</li>
                        <li> Provide you with support and to respond to your requests or complaints. If you reach out to us for support, we will use your Information to create a support account for you, respond and resolve your queries and complaints, facilitate support (e.g., retrieval of a forgotten password). When doing so, we perform our contractual obligation towards you. The Information we process when doing so includes your registration Information, your identifiers, information about your device such as your Wi-Fi strength and the amount of free space on your device, and any other Information about you collected via our customer support channels.</li>
                        <li> Conduct analytics. It is in our legitimate interests to analyze the use of and inform, our Games, newsletters and advertising campaigns, and any other interaction or interest in the same. When doing so we will process Information we automatically collect or is generated about you when you play the Games or interact with our newsletters and advertising campaigns to (a) create anonymised and aggregated data; (b) create segments of users who show particular characteristics or interests; and (c) conduct predictive analytics about your interests</li>
                        <li> Send you updates about in-Game offers. We will show you promotional offers and information about virtual items that can be purchased in-game, which will be tailored to you based on gameplay, geography, device data and in-game interactions. We do this based on our legitimate interest.</li>
                        <li> Provide you with advertising. We will present you with ads and suggestions in our Games and elsewhere. These may be ads relating to our own Games or other services you may be interested in. These ads and suggestions may be tailored specifically to you. Where it is required, we will only do so where we have your consent. In situations where your consent is not required, or where we provide contextual advertising, we do so based on our legitimate interests. If you no longer want to receive targeted advertising you can withdraw your consent in the Games settings, or if that option is not available, please see our Cookie Policy which explains how you can opt out and change your browser and device settings. To tailor ads and to allow our advertising partners to tailor ads, we process Information we automatically collect or is generated about you when you play the Games and Information received from third parties.</li>
                        <li> Prevent fraud, defend Galactic kingdom against legal claims or disputes, enforce our terms and to comply with our legal obligations. It is in our legitimate interests to protect our users against online abuse and other anti-social or illegal activity (e.g., when moderating conversation in our Games). Furthermore, it is also in our legitimate interest to protect our interests by (1) monitoring Game use to detect fraud or any other user behavior which prejudices the integrity of our Games, (2) taking steps to remedy fraud and concerning behavior, (3) defending ourselves against legal claims or disputes, and (4) enforcing our terms and policies. When doing so, we will process the Information relevant in such a case, including Information you provide us, Information we automatically collect about you, and Information which is provided to us by third parties.</li>
                        <li> Conduct surveys. From time to time, we may ask you to participate in surveys we conduct which are in our legitimate interest because they help us understand our user base and improve the Games. If you choose to participate, we process your registration Information and any other Information collected through the survey questions.</li>
                    </ul>
                </div>

                <div className='flex flex-col w-full gap-4'>
                    <div className='font-bold text-xl md:text-2xl uppercase'>
                        3. WHO WE SHARE YOUR PERSONAL INFORMATION WITH
                    </div>
                    <div className='text-base md:text-lg pl-2'>
                        We share your Information with selected third parties, including:
                    </div>
                    <div className='text-base md:text-lg pl-2 gap-4'>
                        <p>- Other players and users will see your profile Information and in-game activities, as well as any other Information you choose to share with them, such as chat data:</p>
                        <ul className=' list-disc ml-2 pl-4'>
                            <li>Customer support solution providers, who help us manage and respond to our customer questions and complaints.</li>
                            <li>Social media. We integrate certain discord, X and Google software to enhance social media features in the game such as accessing your friends list and displaying your profile picture</li>
                        </ul>
                    </div>
                    <div className='text-base md:text-lg pl-2 gap-4'>
                        <p>- Advertising partners. We are an ad-supported service. Subject to your settings, we provide certain Information to advertisers who will use them to serve you with ads in our Games, and we measure who sees and clicks on their ads.</p>
                    </div>
                    <div className='text-base md:text-lg pl-2 gap-4'>
                        <p>- Law enforcement agencies, public authorities or other judicial bodies and organizations. We disclose Information if we are legally required to do so, or if we have a good faith belief that such use is reasonably necessary to comply with a legal obligation, process or request; enforce our terms of service and other agreements, policies, and standards, including investigation of any potential violation thereof; detect, prevent or otherwise address security, fraud or technical issues; or protect the rights, property or safety of us, our users, a third party or the public as required or permitted by law (including exchanging information with other companies and organizations for the purposes of fraud protection).</p>
                    </div>
                    <div className='text-base md:text-lg pl-2 gap-4'>
                        <p>- Change of corporate ownership. If we are involved in a merger, acquisition, bankruptcy, reorganization, partnership, asset sale or other transaction, we may disclose your Information as part of that transaction.</p>
                    </div>
                </div>

                <div className='flex flex-col w-full gap-4'>
                    <div className='font-bold text-xl md:text-2xl uppercase'>
                        4. THIRD PARTY PRIVACY PRACTICES
                    </div>
                    <div className='text-base md:text-lg pl-2'>
                        If you access any Games through a third-party platform such as twitter or Google (“Third-Party Services”), you must understand that those Third-Party Services may collect other Information about you (including Information you share with them directly or about your use of the Games) in accordance with their own terms and privacy policies. The privacy practices described in this Policy do not apply to Third Party Services. Any links in the Games to Third Party Services do not imply that we endorse or have reviewed the Third-Party Services.
                    </div>
                </div>
                <div className='flex flex-col w-full gap-4'>
                    <div className='font-bold text-xl md:text-2xl uppercase'>
                        5. HOW LONG WE STORE YOUR INFORMATION
                    </div>
                    <div className='text-base md:text-lg pl-2'>
                        Your Information is kept for as long as you are registered or using our games, and then for up to three years from the date you stop interacting with the games. When deleting Information, we will take measures to make the Information irrecoverable or irreproducible, and electronic files which contain Information will be deleted permanently.
                    </div>
                </div>

                <div className='flex flex-col w-full gap-4'>
                    <div className='font-bold text-xl md:text-2xl uppercase'>
                    6. YOUR RIGHTS
                    </div>
                    <div className='text-base md:text-lg pl-2'>
                    To exercise your rights, email us at business@galactickingdom.io
                    </div>
                    <div className='text-base md:text-lg pl-2 gap-4'>
                        <p>- Access. You have the right to access Information, and to receive an explanation of how we use it and who we share it with. This right is not absolute. For example, we cannot reveal trade secrets, or give you Information about other individuals.</p>
                    </div>
                    <div className='text-base md:text-lg pl-2 gap-4'>
                        <p>- Erasure. You have the right to request deletion of your Information. We may need to retain some of your Information where there are valid grounds for us to do so under data protection laws. For example, for the defense of legal claims, respect freedom of expression, or where we have an overriding legitimate interest to do so, but we will let you know when this is the case. Note that where the Information is held by a third-party data controller, such as an advertising partner or a payment processor, we will use reasonable steps to inform them of your request, but we recommend you contact them directly in accordance with their own privacy policies to ensure your personal data is erased.</p>
                    </div>
                    <div className='text-base md:text-lg pl-2 gap-4'>
                        <p>- Objection and withdrawal of consent: You have the right to (i) withdraw your consent where you previously provided such consent; or (ii) object to our processing of your Information where we process such Information on the basis of our legitimate interests (see above under How we use your personal information). You may exercise this right as follows:</p>
                        <ul className=' list-disc ml-2 pl-4'>
                            <li>To stop receiving personalized advertising: (a) on the Website please opt-out in Privacy Settings; (b) for Mobile Games, please withdraw your consent in the in-app Settings. You can also find more information in our Cookie Policy.</li>
                            <li>To stop receiving marketing emails: please follow the unsubscribe mechanism at the bottom of each email communication.</li>
                            <li>To stop our cookies being placed: please refer to our Cookie Policy.</li>
                            <li>To stop receiving push notifications: please change your device or browser settings.</li>
                        </ul>
                    </div>
                    <div className='text-base md:text-lg pl-2 gap-4'>
                        <p>- Portability. You have the right to receive a copy of Information we process on the basis of consent or contract in a structured, commonly used and machine-readable format, or to request that such Information is transferred to a third party.</p>
                    </div>
                    <div className='text-base md:text-lg pl-2 gap-4'>
                        <p>- Correction. You have the right to correct any Information held about you that is inaccurate.</p>
                    </div>
                    <div className='text-base md:text-lg pl-2 gap-4'>
                        <p>- Restriction. You have a right in certain circumstances to stop us processing Information other than for storage purposes.</p>
                    </div>
                </div>

                <div className='flex flex-col w-full gap-4'>
                    <div className='font-bold text-xl md:text-2xl uppercase'>
                    7. CONTACT & COMPLAINTS
                    </div>
                    <div className='text-base md:text-lg pl-2'>
                    We welcome questions, comments, and requests regarding this Policy. These should be addressed to business@galactickingdom.io You can also send a letter to Data Protection at Free Zone area of Ras Al Khaimah Economic Zone Authority in the Emirate of Ras Al Khaimah, United Arab Emirates. Alternatively, please contact us at business@galactickingdom.io and we will endeavour to deal with your complaint as soon as possible. This is without prejudice to your right to start a complaint with a data protection authority.
                    </div>
                </div>
                <div className='flex flex-col w-full gap-4'>
                    <div className='font-bold text-xl md:text-2xl uppercase'>
                    8. CHANGES
                    </div>
                    <div className='text-base md:text-lg pl-2'>
                    Any updates or changes to this Policy will be published here. If there are any significant changes, we will notify you through the website and in-Game.
                    </div>
                </div>
                <div className=' pt-10 text-sm md:text-base'>
                Last updated: Monday 11th December 2023
                </div>
            </div>
        </div>
    )
}
