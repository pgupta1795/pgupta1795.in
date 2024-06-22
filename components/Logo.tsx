import Image from 'next/image'
import logo from '../public/static/images/avatar_small.png'

const Logo = () => (
  <div className="border-primary w-8 overflow-hidden rounded-full border border-solid dark:border-gray-500 md:w-10">
    <Image src={logo} alt="logo" className="h-auto w-full rounded-full" sizes="20vw" priority />
  </div>
)

export default Logo
