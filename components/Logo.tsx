import Image from 'next/image'
import logo from 'public/pokemonLogo.png'

interface LogoProps {
  loading: boolean
  hideOnSmall?: boolean
}

const Logo = ({ loading, hideOnSmall = false }: LogoProps) => {
  return (
    <div
      className={[
        'bg-white rounded-full w-12 h-12 md:w-20 md:h-20 aspect-auto',
        loading ? 'animate-spin' : '',
        hideOnSmall ? 'hidden sm:inline-block' : '',
      ].join(' ')}
    >
      <Image src={logo} alt="App logo" width={100} height={100} />
    </div>
  )
}

export default Logo
