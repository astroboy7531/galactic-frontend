import React from 'react'
import FaqComp from './FaqComp'

export default function Faq() {
  const leftFaq = [
    {
      title: 'What is Galactic Kingdom?',
      content: 'Galactic Kingdom is a space-themed strategy mobile game that aims to appeal to and massively onboard Web 2 traditional users by showing the true wonders of Web 3 game ownership.'
    },
    {
      title: 'What are Genesis Conquerors? ',
      content: 'Genesis Conquerors are the main characters and very first gaming assets of Galactic Kingdom. There will be 5 races with 5 different levels of rarity. Everything in Galactic Kingdom is built around them. There will be 10000 Genesis Conquerors in total minted.'
    },
    {
      title: 'Pre-sale, Whitelist, Public sale? ',
      content: 'TBD.'
    },
    {
      title: 'What are the pre-sale benefits?',
      content: 'TBD'
    },
    {
      title: "What are the Genesis Conquerors holder's benefits?",
      content: 'The Genesis Conquerors will be the most valuable collection of Galactic Kingdom and maybe someday of the whole gaming sector. Here is a non-exhaustive list of their benefits: Shared sink utilities( Breeding & Training); Airdrops( two other valuable gaming assets); Governance ($GKC airdrops and more); Future collections airdrops; Privileged pre-sale access (for those who want even more than the airdrops). For a more detailed answer check the AllBlue Paper'
    },
  ]
  const rightFaq = [
    {
      title: 'What does a BTC-backed economy mean and why is it important?',
      content: 'To be very simple, what we call a BTC-backed economy is similar to what a gold-backed currency was in the past. This means that besides all of the in-game use cases of our in-game currency Galactic Berry ($GB), it will also be exchangeable against BTC, in the future, from a BTC reserve created for and with the game economy. This is completely revolutionary in the Web 3 gaming space because until now most of the other Web 3 in-game currencies ended up, intentionally or not, having a Ponzi-like effect that affected the majority of users. With our brand new model, we should be able to avoid that kind of outcome and build a sustainable game economy and thus perhaps an enjoyable and profitable game.'
    },

    {
      title: 'What are shared sink utilities and how do they benefit Genesis Holders?',
      content: "Shared sink utilities are the name we have given to in-game utilities that will make our different collectible gaming assets effectively share the game's success. Basically, instead of having every game sink (what players spend their in-game currencies on) be fully owned by the game team, some major game sink will be shared with Genesis holders. For example, to breed, Genesis Conquerors will need Genesis Conqueror Lineage Factor (GCLF) from a male conqueror and a female conqueror. These GCLFs can only be produced by Genesis Conquerors and must be bought from them."
    },
    {
      title: 'What is Galactic Kingdom Citizenship ($GKC)?',
      content: '$GKC will be the Governance token of Galactic Kingdom, it will have many special and valuable use cases in-game and outside of it with the privilege to influence the mighty Galactic Government currently ruling Galactic Kingdom’s universe. $GKC pre-sale will be the first pre-sale benefit of Genesis Conquerors.'
    },
    {
      title: 'What is Galactic Berry($GB)?',
      content: "Galactic Berry ($GB) will be the in-game currency of Galactic Kingdom, details on both token's tokenomics can be found in the AllBlue Paper."
    },
    {
      title: 'Will there be other collections?',
      content: 'Many other collections are planned, all with shared sink utilities, the two first being Genesis Motherships and Genesis Planet, which will be freely minted by or airdropped to Genesis Conquerors. Modality might change to favor the most faithful holders but in any case, these two next collections will be free.'
    },
  ]
  return (
    <div className='w-full flex items-center justify-center bg-[#F0EBE5] relative'>
      <div className='absolute top-0 left-0 transform scale-150 -translate-y-1/3'>
        <img
          src='/right_decor.png'
          alt='left decoration'
          className='object-cover object-center'
        />
      </div>
      <div className='absolute top-0 right-0 transform scale-150 -translate-y-1/3'>
        <img
          src='/left_decor.png'
          alt='right decoration'
          className='object-cover object-center'
        />
      </div>
      <div className='w-full max-w-[1140px] flex flex-col items-center gap-12'>
        <div className='text-5xl font-bold text-center text-dark-text font-Josefin'>
          FAQ
        </div>
        <div className='z-20 flex flex-col w-full gap-6 px-4 sm:flex-row'>
          <div className='flex flex-col items-center w-full gap-6'>
            {leftFaq.map((item, index) => (
              <div className='w-full overflow-hidden rounded-md'>
                <FaqComp title={item.title} content={item.content} key={index} />
              </div>
            ))}
          </div>
          <div className='flex flex-col items-center w-full gap-6'>
            {rightFaq.map((item, index) => (
              <div className='w-full overflow-hidden rounded-md'>
                <FaqComp title={item.title} content={item.content} key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
