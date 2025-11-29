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
  // Data is fetched client-side using React hooks and API calls
  // This allows for real-time updates without rebuilding
  return {
    props: {},
    revalidate: 60,
  }
}


