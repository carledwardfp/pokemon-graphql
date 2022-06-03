interface PokemonSkeletonProps {
  color: string
}

const PokemonSkeleton = ({ color }: PokemonSkeletonProps) => {
  return (
    <div className={['h-40 md:h-48 p-4 rounded-3xl w-full', color].join(' ')}>
      <div className="animate-pulse flex items-start gap-4 md:gap-14">
        <div className="rounded-3xl bg-white/50 w-44 md:w-48 h-28 md:h-36" />
        <div className="w-full flex flex-col gap-2">
          <div className="rounded-3xl bg-white/50 w-28 h-4 hidden md:block" />
          <div className="rounded-lg bg-white/50 w-24 md:w-48 h-6 md:h-12" />
          <div className="flex">
            <div className="rounded-3xl bg-white/50 w-12 md:w-14 h-5 md:h-6" />
            <div className="rounded-3xl bg-white/50 w-12 md:w-14 h-5 md:h-6" />
          </div>
          <div className="rounded-lg bg-white/50 w-28 h-16 md:h-12" />
        </div>
      </div>
    </div>
  )
}

export default PokemonSkeleton
