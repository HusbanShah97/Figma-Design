import Link from 'next/link';
export default function HomePage() {

    return (
        
        <div id='Home' className='w-1440 h-1132 pt-590 pl-720 bg-blue-950 '>

            <div id='Contianer' className='w-1322 h-91 bg-green-800'>
                <nav className='w-1440 h-1132 '>
                <div className='w-187 h-58   pt-10'>
                          <h1 className=''>HusbanTech</h1>
                    </div>
                  
    
                    <div>
                        <ul className='flex justify-center pt-10 gap-5'>
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/'}>Product</Link></li>
                            <li><Link href={'/'}>Pricing</Link></li>
                            <li><Link href={'/'}>Contact</Link></li>
                        </ul>
                    </div>


                </nav>
                
           </div>


        </div>

    )
    
  }