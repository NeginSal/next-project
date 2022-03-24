import Link from 'next/link'

const HomePage = () => {
    return ( 
        <div>
            <h1>this is homepage</h1>
            <ul>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/clients">Clients</Link>
                </li>

            </ul>
        </div>
     );
}
 
export default HomePage;