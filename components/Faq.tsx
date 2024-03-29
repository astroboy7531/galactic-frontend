import React from 'react'
import FaqComp from './FaqComp'

export default function Faq() {
  const leftFaq = [
    {
      title: 'What is Galactic Kingdom?',
      content: 'Galactic Kingdom is a space-themed strategy mobile game that aims to onboard Web 2 mobile gamers by blending addicting gameplay with the rewards unlocked by true digital asset ownership.'
    },
    {
      title: 'What are Genesis Conquerors? ',
      content: 'Genesis Conquerors are the main characters and very first gaming assets of Galactic Kingdom. There will be 5 races with 5 different levels of rarity. Everything in Galactic Kingdom is built around them. There will be 10000 Genesis Conquerors in total minted.'
    },
    {
      title: 'Pre-sale, Whitelist, Public sale? ',
      content: 'TBD'
    },
    {
      title: 'What are the pre-sale benefits?',
      content: 'TBD'
    },
    {
      title: "What are the Genesis Conquerors holder's benefits?",
      content: 'The Genesis Conquerors will be the most valuable digital assets in Galactic Kingdom. They will be airdropped all future assets required to play the game, including our governance token. Weve put a lot of thought into the shared sink utilities that will flow to Genesis Conquerer owners as the game expands, including most of the value generated by a future influx of players. More details coming soon.'
    },
  ]
  const rightFaq = [
    {
      title: 'What does a BTC-backed economy mean and why is it important?',
      content: 'A driving force behind our game economy design is avoiding the pitfalls many other games face when they introduce inflationary tokens that lack gameplay integration and, crucially, lack value backing the token. We wanted to avoid being another web3 game that falls prey to the idea of fiat in their token design, so we designed our games token, $GB, to be also redeemable for BTC earned by the games revenue, NFT royalties, and more. The aim is to redirect value generated from the game into the ultimate reserve currency, BTC, and carefully track the minting of new tokens to match the increasing reserves in order to create a sustainable, BTC-backed economy.'
    },

    {
      title: 'What are shared sink utilities and how do they benefit Genesis Holders?',
      content: "Shared sink utilities refer to the in-game mechanisms that require users to spend tokens. The value generated from these sinks is shared by the Genesis Holders rather than just lining the pockets of the team, as we see in most web2 games. By aligning the value generated by the game's usage with the people playing the game, we encourage growth and expansion of the user base as users continue to earn, use tokens, and increase their in-game attributes to be better equipped to defeat stronger opponents."
    },
    {
      title: 'What is Galactic Kingdom Citizenship ($GKC)?',
      content: '$GKC will be the in-game governance token for Galactic Kingdom. As we roll out our DAO systems we plan to give the community real power over key in-game parameters, within reason. Our goal is to implement systems where the collective decisions of all players make or break the world - implementing prisoners dilemma social experiment scenarios that will impact everyone based on players collective greed or cooperation. Genesis Conquerers will all be airdropped $GKC, but they will also have the option to purchase it in the pre-sale before other private and public rounds, and at a lower cost.'
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
    <div id='faq-section' className='w-full flex items-center pb-20 justify-center bg-[#F0EBE5] dark:bg-[#041125] relative'>
      <div className='absolute transform -translate-y-1/3 left-0 top-0 scale-150'>
        <img
          src='/right_decor.png'
          alt='left decoration'
          className='object-cover object-center'
        />
      </div>
      <div className='absolute transform -translate-y-1/3 right-0 top-0 scale-150'>
        <img
          src='/left_decor.png'
          alt='right decoration'
          className='object-cover object-center'
        />
      </div>
      <div className='w-full max-w-[1140px] flex flex-col items-center gap-12'>
        <div className='text-center text-dark-text dark:text-white font-Josefin font-bold text-5xl'>
        FAQ
        </div>
        <div className='flex flex-col sm:flex-row gap-6 w-full px-4 z-10'>
          <div className='flex flex-col items-center gap-6 w-full'>
            {leftFaq.map((item, index) => (
              <div className='w-full rounded-md overflow-hidden'>
                <FaqComp title={item.title} content={item.content} key={index} />
              </div>
            ))}
          </div>
          <div className='flex flex-col items-center gap-6 w-full'>
            {rightFaq.map((item, index) => (
              <div className='w-full rounded-md overflow-hidden'>
                <FaqComp title={item.title} content={item.content} key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
