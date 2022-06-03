import Logo from './Logo'

interface FooterProps {
  loading: boolean
}

const Footer = ({ loading }: FooterProps) => {
  return (
    <div className="rounded-3xl p-4 bg-pokemonBg h-40 flex justify-center items-center gap-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <Logo loading={loading} key={index} />
      ))}
    </div>
  )
}

export default Footer
