import logo from '../assets/LOGO.png'

import lang from '../assets/lang.png';
import acc from '../assets/acc.png';



export default function Navbar(){

    return(
        <div className='  p-2 flex items-center'>

            <div className=' pl-4 flex-grow'>
                <img src={logo}/>
            </div>


            <div className='menus pr-4 flex basis-3/5 items-end justify-around gap-10 text-sm'>
                <div>PROPERTIES</div>
                <div>MY DASHBOARD</div>
                <div>LIST YOUR PROPERTY</div>
                <div>CONTACT US</div>
                <div>MORE</div>

                
                <div>|</div>

                <div>
                    <img src={lang}/>
                </div>

                <div>
                    <img src={acc}/>
                </div>

            </div>
            
        </div>
    )
}