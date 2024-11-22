import Link from 'next/link';
export default function HomePage() {

    return (
        
        <div id='Home' className='w-1440 h-1132 pt-590 pl-720 bg-blue-950 '>

            <div id='Contianer' className='w-1322 h-91 bg-green-800 ml-14'>
                <div className=' w-187 h-58 ml-24 pt-10'>
                    <h1 className='text-2xl'>HusbanTech</h1>
                </div>
                
                <div className='w-815 h-14 ml-364 mt-4'>

                <section>
                    <ul className='w-72 flex gap-5 bg-yellow-800 '>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/product'}>Product</Link></li>
                        <li><Link href={'/pricing'}>Pricing</Link></li>
                        <li><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                </section>

                <div className='w-48 h-14  gap-12  ml-626 '>
                    <button type='button'>Login</button>
                    <button type='button'>JOIN US</button>
                </div>

                </div>

           </div>
        </div>

    )
    
  }