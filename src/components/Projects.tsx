import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { useTranslation } from './LanguageProvider';

const staticProjectData = [
  {
    id: 1,
    image: '/empik.png',
    tags: ['E-commerce', 'CMS', 'Marketplace'],
    gradient: 'from-green-400 to-emerald-600',
    titleKey: 'project1Title',
    descKey: 'project1Desc',
    url: 'https://www.empik.com',
  },
  {
    id: 2,
    image: '/empikfoto.png',
    tags: ['E-commerce', 'CMS', 'Marketplace'],
    gradient: 'from-green-400 to-emerald-600',
    titleKey: 'project2Title',
    descKey: 'project2Desc',
    url: 'https://www.empikfoto.pl',
  },
  {
    id: 3,
    image: '/payground.png',
    tags: ['HealthTech', 'CMS'],
    gradient: 'from-blue-400 to-purple-600',
    titleKey: 'project3Title',
    descKey: 'project3Desc',
    url: 'https://home.payground.com/',
  },
  {
    id: 4,
    image: '/ffc.png',
    tags: ['FoodTech'],
    gradient: 'from-yellow-400 to-orange-600',
    titleKey: 'project4Title',
    descKey: 'project4Desc',
    url: 'https://www.freshfoodconnect.org',
  },
  {
    id: 5,
    image: '/wildclean.png',
    tags: ['E-commerce', 'Headless', 'CMS'],
    gradient: 'from-pink-400 to-red-600',
    titleKey: 'project5Title',
    descKey: 'project5Desc',
    url: 'https://www.wildclean.com',
  },
  {
    id: 6,
    image: '/noho.png',
    tags: ['E-commerce', 'Headless', 'CMS'],
    gradient: 'from-indigo-400 to-cyan-600',
    titleKey: 'project6Title',
    descKey: 'project6Desc',
    url: 'https://www.noho.co',
  },
  {
    id: 7,
    image: '/aplusrstore.png',
    tags: ['E-commerce', 'Headless', 'CMS'],
    gradient: 'from-teal-400 to-blue-600',
    titleKey: 'project7Title',
    descKey: 'project7Desc',
    url: 'https://www.aplusrstore.com',
  },
  {
    id: 8,
    image: '/poolbots.png',
    tags: ['E-commerce', 'Headless', 'CMS'],
    gradient: 'from-teal-400 to-blue-600',
    titleKey: 'project8Title',
    descKey: 'project8Desc',
    url: 'https://www.poolbotscanada.ca',
  },
  {
    id: 9,
    image: 'ekster.png',
    tags: ['E-commerce', 'Headless', 'CMS'],
    gradient: 'from-teal-400 to-blue-600',
    titleKey: 'project9Title',
    descKey: 'project9Desc',
    url: 'https://www.ekster.com',
  },
];

export default function Projects() {
  const { t } = useTranslation();

  const projects = staticProjectData.map((p) => ({
    ...p,
    title: t[p.titleKey],
    description: t[p.descKey],
    url: p.url,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-center mb-20'
      >
        <div className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-300 mb-6'>
          <Sparkles className='w-4 h-4' />
          <span id='projects' className='text-sm font-medium'>
            {t.featuredWork}
          </span>
        </div>

        <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
          {t.projectsTitle}
          <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            {t.projectsTitleSpan}
          </span>
        </h2>

        <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
          {t.projectsDescription}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className='group cursor-pointer'
          >
            <div className='glassmorphism rounded-3xl overflow-hidden h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20'>
              <div className='relative overflow-hidden h-48'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />

                <div className='absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200'
                  >
                    <ExternalLink className='w-4 h-4' />
                  </a>
                </div>
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300'>
                  {project.title}
                </h3>

                <p className='text-gray-300 text-sm leading-relaxed mb-4'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full border border-white/20 group-hover:bg-purple-500/20 group-hover:text-purple-300 group-hover:border-purple-400/50 transition-all duration-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
