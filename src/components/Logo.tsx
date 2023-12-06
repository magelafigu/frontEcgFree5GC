import Image from 'next/image'
import logo from '../../public/Lp_logo_unisinos.png'

export default function Logo() {
    return (
        <div>
            <Image src={logo} alt={''} width={200} height={100}/>
        </div>
    )
}