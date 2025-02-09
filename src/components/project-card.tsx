import Image from '@/components/image.tsx'
import { Badge } from '@/components/ui/badge.tsx'
import { FiGithub, FiGlobe } from 'react-icons/fi'
import { Separator } from '@/components/ui/separator.tsx'

type ProjectCardProps = {
  src: string
  alt: string
  title: string
  description: string
  arrayLanguages?: string[]
  hrefGithub?: string
  hrefWebsite?: string
}

export default function ProjectCard({
  src,
  alt,
  title,
  description,
  arrayLanguages,
  hrefWebsite,
  hrefGithub,
}: ProjectCardProps) {
  const TechIcons = () => {
    return (
      <div className="grid grid-cols-6 gap-2">
        {arrayLanguages?.map((item, i) => (
          <Image src={`${item}.png`} alt={alt} key={i} className="w-4 h-4" />
        ))}
      </div>
    )
  }
  const Tags = () => {
    return (
      <div className="">
        {arrayLanguages?.map((item, i) => (
          <Badge
            key={i}
            className="bg-secondary text-primary hover:bg-primary hover:text-secondary  mr-2 mb-2"
          >
            {item}
          </Badge>
        ))}
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border  shadow-lg border-neutral-900 bg-neutral-950">
      <div className="h-48 w-full">
        <Image
          src={src}
          width={2700}
          height={2025}
          alt={alt}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div>
          <div className="flex items-center gap-x-2">
            <h1 className="text-primary">{title}</h1>
            <Separator orientation="vertical" />
            <TechIcons />
          </div>
          <p className="text-justify  md:text-left py-4  text-tertiary">
            {description}
          </p>
          <Tags />
        </div>
        <div className="mt-9 flex flex-1 items-end justify-center gap-2 data-[variant='full']:gap-6">
          <>
            <a
              href={hrefGithub}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl  px-4 py-2  bg-secondary text-primary hover:bg-primary hover:text-secondary"
            >
              Source <FiGithub />
            </a>
          </>

          <>
            <a
              href={hrefWebsite}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-2xl  py-2 px-4   bg-blue-600/5 text-blue-600 hover:bg-blue-600 hover:text-neutral-50"
            >
              Website <FiGlobe />
            </a>
          </>
        </div>
      </div>
    </div>
  )
}
