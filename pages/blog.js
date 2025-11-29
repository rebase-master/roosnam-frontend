// Note: Blog feature is not yet implemented in the backend API
// Using mock data until blog API endpoints are available
import { blogPosts } from '../lib/mockData'
import Card, { CardBody } from '../components/ui/Card'
import Badge from '../components/ui/Badge'

export default function Blog() {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const categoryColors = {
    Backend: 'primary',
    Frontend: 'accent',
    Productivity: 'purple',
    Design: 'indigo',
  }

  return (
    <div className="space-y-8">
      {/* Coming Soon Notice - Prominent */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-lg p-6 text-center shadow-soft">
        <div className="text-4xl mb-3">🚧</div>
        <h2 className="text-2xl font-bold text-amber-900 mb-2">Blog Coming Soon!</h2>
        <p className="text-amber-800">
          The blog feature is currently under development. The posts shown below are sample content to preview the design. 
          Full blog functionality with real posts coming soon!
        </p>
      </div>

      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Code & Coffee</h1>
        <p className="text-xl text-gray-600">
          Insights on development, design, and everything in between.
        </p>
      </div>

      {blogPosts.length === 0 ? (
        <div className="bg-white rounded-lg shadow-soft p-8 text-center">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Posts Yet</h2>
          <p className="text-gray-600">
            Blog posts will appear here once published.
          </p>
        </div>
      ) : (
        <div className="grid gap-8">
          {/* Featured Post - First Post */}
          {blogPosts.length > 0 && (
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-primary-100 via-accent-50 to-purple-100 p-8 flex items-center justify-center">
                  <div className="text-8xl">📝</div>
                </div>
                <CardBody className="md:w-3/5 space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant={categoryColors[blogPosts[0].category] || 'default'} 
                      size="sm"
                    >
                      {blogPosts[0].category}
                    </Badge>
                    <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors cursor-pointer">
                    {blogPosts[0].title}
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {blogPosts[0].tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      {formatDate(blogPosts[0].date)}
                    </span>
                  </div>
                </CardBody>
              </div>
            </Card>
          )}

          {/* Other Posts - Grid */}
          {blogPosts.length > 1 && (
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="group hover:shadow-soft-lg transition-shadow">
                  <div className="h-40 bg-gradient-to-br from-primary-50 via-accent-50 to-purple-50 flex items-center justify-center rounded-t-lg">
                    <div className="text-5xl group-hover:scale-110 transition-transform">
                      {post.category === 'Backend' ? '⚙️' : 
                       post.category === 'Productivity' ? '⚡' : 
                       post.category === 'Design' ? '🎨' : '💡'}
                    </div>
                  </div>
                  
                  <CardBody className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={categoryColors[post.category] || 'default'} 
                        size="sm"
                      >
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.excerpt.length > 120 
                        ? post.excerpt.substring(0, 120) + '...' 
                        : post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 pt-2">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-3 border-t border-gray-100">
                      <span className="text-sm text-gray-500">
                        {formatDate(post.date)}
                      </span>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Newsletter CTA */}
      <Card className="bg-gradient-to-r from-primary-50 to-accent-50">
        <CardBody className="text-center py-8 space-y-4">
          <div className="text-4xl">✉️</div>
          <h3 className="text-2xl font-bold text-gray-900">Stay Updated</h3>
          <p className="text-gray-600 max-w-lg mx-auto">
            Subscribe to get notified when new articles are published. No spam, just quality content about development and design.
          </p>
          <p className="text-sm text-gray-500 italic">
            Newsletter subscription coming soon!
          </p>
        </CardBody>
      </Card>

    </div>
  )
}
