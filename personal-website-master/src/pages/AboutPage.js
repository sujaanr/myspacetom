import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import pfp from '../imgs/tom-profile.png' // Updated image path for Tom's profile picture

export function AboutPage() {
    return (
        <div className='flex flex-col items-center mx-[50px] md:mx-[110px] mb-[60px] space-y-10'>
            <div className='flex flex-col space-y-10 md:w-[680px] md:flex-row md:space-x-10 md:space-y-0 md:items-end'>
                <img src={pfp} className='h-[360px] object-contain'/>
                <div className='flex flex-col space-y-10'>
                    <div>
                        <h1 className='text-2xl font-chivo font-black mb-3'>
                            Hi, I'm Tom!
                        </h1>
                        <div>
                            <h1 className='font-sans text-2xl'>
                                I'm a co-founder of MySpace and a passionate advocate for the open web. 
                                After MySpace, I've been exploring photography and traveling the world.
                            </h1>
                        </div>
                    </div>
                    <div className='space-y-3 font-sans'>
                        <div>
                            <h1 className='font-chivo text-base'>CURRENTLY EXPLORING</h1>
                            <p className='text-2xl'>Photography, Travel, Entrepreneurship</p>
                        </div>
                        <div>
                            <h1 className='font-chivo text-base'>CURRENTLY READING</h1>
                            <h1 className='text-2xl'>The Startup Owner's Manual by Steve Blank</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-[1000px]'>
                <div className='mb-4'>
                    <h1 className='font-chivo text-base py-2 border-b-[1px] border-black mb-2'>
                        @ LIFE AFTER MYSPACE
                    </h1>
                </div>
                <div className='flex flex-col mb-10 space-y-10 items-center md:items-start md:flex-row md:space-x-10 md:space-y-0'>
                    <div className='w-full font-sans text-xl space-y-3'>
                        <p>Outside of business, I'm...</p>
                        <p>
                            <span className='font-chivo font-black'>
                                an avid photographer 
                            </span>
                            , capturing moments from every corner of the globe.
                        </p>
                        <p>
                            <span className='font-chivo font-black'>
                                a speaker 
                            </span>
                            , sharing lessons on entrepreneurship and social media at various conferences and universities.
                        </p>
                        <p>
                            <span className='font-chivo font-black'>
                                a consultant 
                            </span>
                            , helping tech startups refine their strategies and maximize their impact.
                        </p>
                        <p>
                            engaged in 
                            <span className='font-chivo font-black ml-[5px]'>non-profit work</span>,
                            supporting initiatives that foster education and internet accessibility.
                        </p>
                    </div>
                    <div className=''>
                        <img src='../imgs/tom-travel.png' className='max-h-[480px] object-contain'/> // Example image path
                    </div>
                </div>
                <div className='font-sans mb-10 flex flex-col space-y-10 items-center md:items-start md:flex-row md:space-x-10 md:space-y-0 md:justify-between'>
                    <div className='flex flex-col space-y-4 leading-6 text-[16px]'>
                        <div>
                            <h1 className='font-chivo text-base'>PAST VENTURES</h1>
                            <p className='text-2xl'>Developing MySpace, the first major social network platform</p>
                            <p className='text-2xl'>Consulting for tech companies</p>
                        </div>
                    </div>
                    <div className=''>
                        <img src='../imgs/tom-speaking.png' className='max-h-[400px] object-contain'/> // Example image path
                    </div>
                </div>
            </div>
        </div>
    )
}
