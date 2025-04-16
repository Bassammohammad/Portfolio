import ProjectCard from '@/components/project-card.tsx'

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
      <div className="space-y-10 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl font-bold text-primary"> Les stages réalisé</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          <ProjectCard
            src="/scaleway.png"
            alt="scaleway stage"
            title={
              <>
                Scaleway | <span className="text-tertiary">2 mois</span>
              </>
            }
            description=" Découverte de l’organisation d’une grande entreprise tech, travail sur des tickets en
            environnement agile, exploration des produits cloud (instances, Kubernetes, clusters) et collaboration
             avec les équipes pour résoudre des problèmes techniques."
            hrefWebsite="https://www.scaleway.com/en/"
          />
          <ProjectCard
            src="/taccuinu.png"
            alt="taccuinu stage"
            title={
              <>
                Taccuinu | <span className="text-tertiary">3 mois</span>
              </>
            }
            description="Développement et intégration de fonctionnalités sur des projets web avec React et Node.js,
            gestion de tickets de développement, amélioration de l'UX/UI, et collaboration étroite avec l’équipe pour
            optimiser les performances et la qualité du code."
            hrefWebsite="https://taccuinu.com/"
          />
        </div>
      </div>

      <div className="space-y-10 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl font-bold text-primary">
          {' '}
          Les projets réalisé
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          <ProjectCard
            src="/financeProjet.png"
            alt="finance projet"
            title="Finance App |"
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
            title="Portfolio |"
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
