import MainContent from './mainContent';
import Link from 'next/link';
export default function HomePage() {

    return (
        <div>
            <div id='Home' className='w-[1440px] h-[1132px] pt-[-590px] pl-[-720px] bg-[#252B42]'>
           
                <div id='Navbar' className='w-[1322px] h-[91px] flex  ml-[90px] '>
                    <div className='ml-[120px] my-7'>
                        <h1 className='text-2xl font-bold'>BrandName</h1>
                    </div>
                    
                

                    <div>
                     <ul className='flex my-9 mx-14 gap-8 font-bold'>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/pricing'}>Pricing</Link></li>
                        <li><Link href={'/product'}>Product</Link></li>
                        <li><Link href={'/contact'}>Contact</Link></li>
                     </ul>
                    
                    </div>   

                    <div className='flex items-center mx-[300px] gap-10'>

                        <button>Login</button>
                        <button className='w-20 h-12 rounded bg-[#23A6F0]'>JOIN US</button>
                    
                    </div>

                
                </div>
          <MainContent />
                


            

            </div>

                {/* Main Content */}

           
            {/* <div className='w-[1046px] h-[1028px] bg-red-500'>
                <h1>husban</h1>

            </div> */}

       </div>
    )
    
  }