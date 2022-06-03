import { Pokemon } from 'graphql/types'
import Image, { StaticImageData } from 'next/image'

interface PokemonProps {
  data: Pokemon
  image: StaticImageData
  color: string
  bgColor: string
  borderColor: string
}

const Pokemon = ({
  bgColor,
  borderColor,
  color,
  data,
  image,
}: PokemonProps) => {
  return (
    <div
      className={[
        'relative border rounded-3xl flex w-full text-xs md:text-md',
        bgColor,
        borderColor,
      ].join(' ')}
    >
      <p
        className={[
          'absolute text-xl md:text-4xl font-bold right-4 top-2 md:top-auto md:bottom-2 -z-0',
          color,
        ].join(' ')}
      >
        #{data.number}
      </p>
      <div className="relative aspect-square p-2 w-36 h-36 md:w-48 md:h-48">
        <Image
          src={image}
          alt={data.name}
          width={200}
          height={200}
          objectFit="contain"
        />
      </div>
      <div className="px-4 py-2 relative">
        <span
          className={['hidden lg:block font-bold md:text-sm', color].join(' ')}
        >
          ({data.classification})
        </span>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold md:mb-2">
          {data.name}
        </p>
        <div className="flex gap-1 text-xs md:text-sm">
          {data.types.map((type) => (
            <span
              key={type}
              className="px-2 py-1 font-semibold bg-white/20 rounded-lg"
            >
              {type}
            </span>
          ))}
        </div>
        <p className="block lg:hidden">{data.classification}</p>
        <table>
          <tbody>
            <tr>
              <td className="w-8 md:w-14">Height</td>
              <td>
                {data.height.minimum.replace(/m/, '')}-{data.height.maximum}
              </td>
            </tr>
            <tr>
              <td className="w-8 md:w-14">Weight</td>
              <td>
                {data.weight.minimum.replace(/kg/, '')}-{data.weight.maximum}
              </td>
            </tr>
            <tr>
              <td className="w-8 md:w-14">HP</td>
              <td>{data.maxHP}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Pokemon
