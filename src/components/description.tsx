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
    <div className="space-y-20 flex flex-col items-center lg:items-start text-center lg:text-start">
      <div className="flex flex-col items-center lg:items-start w-4/5 space-y-4  ">
        <h1 className=" text-4xl font-bold text-primary ">
          Pourquoi j'apprend ce métier
        </h1>
        <p className=" text-tertiary ">
          Fusionner les mathématiques, la logique, la créativité, le travail
          d’équipe, la concrétisation d’un objet fonctionnel et sa
          représentation visuelle, c'est ce qui m'a permis de me faire une place
          dans ce domaine.
        </p>
      </div>
      <div className="space-y-10">
        <div className="space-y-2 flex flex-col items-center lg:items-start">
          <h1 className="text-4xl font-bold text-primary ">
            Ce que j'ai appris
          </h1>
          <p className="text-tertiary ">
            + des tonnes de vidéos sur YouTube et d'articles
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          <ProjectCard
            src="/firstCourse.png"
            alt="first course"
            title="Full-Stack Web Dev"
            description="La formation complète pour maîtriser les bases du développement web Full Stack. "
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

      <div className="space-y-10 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl font-bold text-primary">
          {' '}
          Ce que j'ai réalisé
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
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
            arrayLanguages={languagesUsedInPortfolio}
            hrefGithub="https://github.com/Bassammohammad/Portfolio"
            hrefWebsite="https://portfolio-rho-umber-73.vercel.app/"
          />
        </div>
      </div>
      <div className="space-y-4 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl font-bold text-primary ">
          Ce que j'aimerais réaliser dans ma carrière
        </h1>
        <p className="text-tertiary ">
          Je veux devenir un expert dans mon domaine, capable de créer des
          expériences uniques et impactantes. Ce qui m’anime, c’est la recherche
          d’élégance et de fluidité dans tout ce que je fais, en repoussant sans
          cesse mes limites. J’aime apprendre, explorer de nouvelles idées et
          contribuer à des projets ambitieux qui ont du sens. Au-delà de la
          technique, c’est la créativité, l’innovation et le partage qui me
          motivent au quotidien.
        </p>
      </div>
    </div>
  )
}
