import Link from 'next/link';
export default function HomePage() {
    
    return (
        
        <div  className="h-custom w-custom bg-blue-950 pt-top pl-left">
            <div id='Nav' className='bg-black w-custom2 h-custom2'>
                
                <div className='w-heading1 h-heading1 mt-top ml-left'>
                    <h1>HusbanTech</h1> 
                </div>
                
                <div className='mt-13 ml-33 h-18 w-815px3'>
                    
                <div>
                    <ul className='flex'>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/product'}>Product</Link></li>
                        <li><Link href={'/pricing'}>Pricing</Link></li>
                        <li><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                    
                </div>
                
                <div className='flex justify-end'>
                 <button type='button'>Login</button>    
                 <button type='button'>JOIN US</button>    
                </div>
                </div>
            </div>
            
        </div>
    )
}