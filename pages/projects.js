import siteMetadata from '@/data/siteMetadata';
import projectsData from '@/data/projectsData';
import Card from '@/components/Card';
import { PageSEO } from '@/components/SEO';
import useTranslation from 'next-translate/useTranslation';

export async function getStaticProps({ locale, locales }) {
  return { props: { locale, availableLocales: locales } };
}

export default function Projects({ locale, availableLocales }) {
  const { t } = useTranslation();
  return (
    <>
      <PageSEO
        title={`${t('headerNavLinks:projects')} - ${
          siteMetadata.author[locale]
        }`}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pb-8 space-y-2 pt-36 md:pt-48 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-16">
            {t('projects:description')}
          </h1>
          <div className="container py-12">
            <div className="flex flex-wrap -m-4">
              {Array.from(projectsData).map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}