import Hero from '../components/home/Hero'
import SkillsPreview from '../components/home/SkillsPreview'
import RecentWork from '../components/home/RecentWork'

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <SkillsPreview />
      <RecentWork />
    </div>
  )
}

export async function getStaticProps() {
  // For now, we're using mock data
  // In the future, fetch from the backend API here
  return {
    props: {},
    revalidate: 60,
  }
}


