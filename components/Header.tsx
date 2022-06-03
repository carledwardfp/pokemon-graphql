import Logo from './Logo'

interface HeaderProps {
  loading: boolean
}

const Header = ({ loading }: HeaderProps) => {
  return (
    <div className="rounded-3xl p-4 bg-pokemonBg h-40 flex justify-center items-center">
      <Logo loading={loading} hideOnSmall />
      <p className="text-xl lg:text-5xl font-['Press_Start_2P'] ml-4">
        Pokemon_GraphQL
      </p>
      <Logo loading={loading} hideOnSmall />
    </div>
  )
}

export default Header
