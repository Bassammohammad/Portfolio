import Image from './image.tsx'
import { Typewriter } from 'react-simple-typewriter'

export default function HeaderSection() {
  return (
    <div className="relative flex flex-col items-center justify-between h-fit w-full ">
      <div
        className="absolute -z-50 h-80 w-80 bg-[conic-gradient(transparent,rgb(0,0,0))]
                opacity-15 blur-2xl dark:bg-[conic-gradient(transparent,rgb(255,255,255))] md:left-[800px]"
      />
      <div className="absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 opacity-5 md:hidden">
        <Image
          src="/profile.jpg"
          alt="profile"
          className="w-96 object-cover hidden"
        />
      </div>

      <div className="flex w-full items-center gap-12 md:justify-between ">
        <div className="flex w-full flex-col items-center  md:w-fit md:items-start">
          <span className=" text-neutral-50 md:w-max drop-shadow-2xl w-min text-7xl">
            Mohammad Bassam,
          </span>
          <span className="flex w-full items-center justify-center text-center text-2xl text-neutral-400 md:min-h-fit md:justify-start md:text-left md:text-3xl mt-2">
            <Typewriter
              words={[
                'Développeur en perpétuelle évolution',
                'Autodidacte et curieux',
                'Passionné par le code',
                "Toujours en quête d'amélioration",
              ]}
              cursor
              loop
            />
          </span>
        </div>
        <div className="hidden flex-1 items-center justify-end md:flex  ">
          <Image
            src="/profile.jpg"
            alt="profile"
            className=" w-48 h-48 object-cover block border-8 border-white rounded-full "
          />
        </div>
      </div>
    </div>
  )
}
