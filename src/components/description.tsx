import ProjectCard from '@/components/project-card.tsx'

const languagesLearnedInFirstCourse = [
  'HTML',
  'CSS',
  'JavaScript',
  'Node.js',
  'PostgreSQL',
  'React',
]
const languagesLearnedInSecondCourse = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
]
const languagesUsedInFinanceApp = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Hono',
  'Drizzle',
]

const languagesUsedInPortfolio = ['React', 'TypeScript', 'Tailwind CSS']

export default function Description() {
  return (
    <div className={`space-y-20`}>
      <div className="flex flex-col items-start w-4/5 space-y-4  ">
        <h1 className=" text-4xl font-bold text-primary">
          Pourquoi j'apprend ce métier
        </h1>
        <p className=" text-secondary">
          Fusionner les mathématiques, la logique, la créativité, le travail
          d’équipe, la concrétisation d’un objet fonctionnel et sa
          représentation visuelle, c'est ce qui m'a permis de me faire une place
          dans ce domaine.
        </p>
      </div>
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-primary">
            Ce que j'ai appris
          </h1>
          <p className="text-secondary">
            + des tonnes de vidéos sur YouTube et d'articles
          </p>
        </div>

        <div className="flex flex-row items-start justify-between gap-10 ">
          <ProjectCard
            src="/firstCourse.png"
            alt="first course"
            title="Full-Stack Web Dev"
            description="La formation complète pour maîtriser les bases du développement web Full Stack. "
            className="py-6"
            arrayLanguages={languagesLearnedInFirstCourse}
            hrefWebsite="https://www.udemy.com/course/the-complete-web-development-bootcamp/?couponCode=KEEPLEARNING"
          />
          <ProjectCard
            src="/secondCourse.png"
            alt="second course "
            title="Adv. React & Next.js "
            description="Dans cette formation, nous approfondissons les concepts de React,
             apprenons à créer des projets avec Next.js et TypeScript,
            et maîtrisons la gestion d'état avec des stores comme Zustand."
            arrayLanguages={languagesLearnedInSecondCourse}
            hrefWebsite="https://www.udemy.com/course/the-ultimate-react-course/?couponCode=KEEPLEARNING"
          />
        </div>
      </div>

      <div className="space-y-10">
        <h1 className="text-4xl font-bold text-primary">
          {' '}
          Ce que j'ai réalisé
        </h1>
        <div className="flex flex-row items-center justify-between gap-10 ">
          <ProjectCard
            src="/financeProjet.png"
            alt="finance projet"
            title="Finance App"
            description="Analysez vos dépenses et revenus grâce à Finance App, qui vous
            permet de gérer vos transactions, les exporter et importer des
            fichiers CSV."
            arrayLanguages={languagesUsedInFinanceApp}
            hrefGithub="https://github.com/Bassammohammad/finance-app"
            hrefWebsite="https://finance-app-kohl-nu.vercel.app/"
          />
          <ProjectCard
            src="/portfolio.png"
            alt="portfolio projet"
            title="Portfolio"
            description="Mon site personnel, ce site !"
            className="py-6"
            arrayLanguages={languagesUsedInPortfolio}
            hrefGithub="https://github.com/Bassammohammad/Portfolio"
            hrefWebsite="https://portfolio-rho-umber-73.vercel.app/"
          />
        </div>
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-primary">
          Ce que j'aimerais réaliser dans ma carrière
        </h1>
        <p className="text-secondary">
          J'aimerais devenir un développeur front-end expert, capable de créer
          des interfaces modernes, performantes et accessibles avec React,
          TypeScript et Next.js. Mon objectif est de concevoir des expériences
          utilisateur fluides et optimisées tout en contribuant à des projets
          innovants et ambitieux. Je souhaite aussi continuer à apprendre et
          évoluer dans ce domaine, en partageant mes connaissances avec la
          communauté.
        </p>
      </div>
    </div>
  )
}
