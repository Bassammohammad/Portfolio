import { Card, CardContent } from '@/components/ui/card.tsx'
import Image from '@/components/image.tsx'
import { Badge } from '@/components/ui/badge.tsx'
import { FiGithub, FiGlobe } from 'react-icons/fi'
import { cn } from '@/lib/utils.ts'

type ProjectCardProps = {
  src: string
  alt: string
  title: string
  description: string
  arrayLanguages: string[]
  hrefGithub?: string
  hrefWebsite?: string
  className?: string
}

export default function ProjectCard({
  src,
  alt,
  title,
  description,
  arrayLanguages,
  hrefWebsite,
  hrefGithub,
  className,
}: ProjectCardProps) {
  return (
    <Card className="rounded-t-3xl bg-neutral-900">
      <CardContent className="pb-10">
        <Image src={src} alt={alt} className="rounded-t-3xl w-[420px] h-48 " />
        <div className="space-y-4 mx-4">
          <div className="mt-4 flex items-center">
            <span className="text-xl ">{title}</span>
            <div className="ml-8 flex items-center justify-center gap-x-2">
              <div className="border-white border-2 rounded-full" />
              <Image
                src={`/${arrayLanguages[0]}.png`}
                alt={arrayLanguages[0]}
                className="w-4 h-4"
              />
              <Image
                src={`/${arrayLanguages[1]}.png`}
                alt={arrayLanguages[1]}
                className="w-4 h-4"
              />
              <Image
                src={`/${arrayLanguages[2]}.png`}
                alt={arrayLanguages[2]}
                className="w-4 h-4"
              />
              {arrayLanguages[3] && (
                <Image
                  src={`/${arrayLanguages[3]}.png`}
                  alt={arrayLanguages[3]}
                  className="w-4 h-4"
                />
              )}
              {arrayLanguages[4] && (
                <Image
                  src={`/${arrayLanguages[4]}.png`}
                  alt={arrayLanguages[4]}
                  className="w-4 h-4"
                />
              )}
              {arrayLanguages[5] && (
                <Image
                  src={`/${arrayLanguages[5]}.png`}
                  alt={arrayLanguages[5]}
                  className="w-4 h-4"
                />
              )}
              {arrayLanguages[6] && (
                <Image
                  src={`/${arrayLanguages[6]}.png`}
                  alt={arrayLanguages[6]}
                  className="w-4 h-4"
                />
              )}
            </div>
          </div>
          <p className={cn('w-96 text-neutral-400', className)}>
            {description}
          </p>
          <div className="flex-row items-center  ">
            {arrayLanguages.map((item, i) => {
              return (
                <Badge
                  key={i}
                  className="bg-neutral-800 mx-1 text-neutral-400 hover:text-neutral-50 cursor-default "
                >
                  {item}
                </Badge>
              )
            })}
          </div>
        </div>
        <div className="flex items-center justify-center  gap-x-4 mt-8 ">
          {hrefGithub && (
            <a
              className="inline-flex items-center justify-center gap-2  whitespace-nowrap rounded-2xl border border-white hover:bg-neutral-100 hover:text-neutral-950 h-10 px-6 py-4
                text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none
                 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                 disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
              href={hrefGithub}
            >
              <FiGithub />
              <span>Source</span>
            </a>
          )}
          {hrefWebsite && (
            <a
              className="inline-flex items-center justify-center gap-2 text-blue-400 whitespace-nowrap rounded-2xl border border-blue-600 hover:bg-blue-600 hover:text-neutral-50 h-10 px-6 py-4
                text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none
                 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                 disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
              href={hrefWebsite}
            >
              <FiGlobe />
              <span>Website</span>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
