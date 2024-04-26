import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export function Footer() {
    return (
        <div className="flex flex-col space-y-4 items-center px-[110px] py-[32px] text-lg md:flex-row md:justify-between">
            <div className='font-sans text-center md:text-start'>
                <p className='mb-2 md:mb-0'>Contact me at <span className='font-chivo underline'><a href="mailto:tom@myspace.com">tom@myspace.com</a></span>!</p>
                <p className='text-sm italic'>This website was made with React</p>
            </div>
            <div className='space-x-4'>
                <SocialIcon target='_blank' style={{width: '40px', height: '40px'}} bgColor='black' url="https://twitter.com/myspacetom"/>
                <SocialIcon target='_blank' style={{width: '40px', height: '40px'}} bgColor='black' url="https://www.linkedin.com/in/myspacetom/"/>
            </div>
        </div>
    )
}
