import { useState, useEffect } from 'react'
import { fetchClientReviews } from '../lib/api'
import Card, { CardBody } from '../components/ui/Card'

export default function Testimonials() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadReviews() {
      try {
        const data = await fetchClientReviews()
        setReviews(data)
        setError(null)
      } catch (err) {
        console.error('Failed to fetch reviews:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadReviews()
  }, [])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ))
  }

  if (loading) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h1>
          <p className="text-xl text-gray-600">What clients and colleagues have to say about working with me.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="animate-pulse h-48 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h1>
          <p className="text-xl text-gray-600">What clients and colleagues have to say about working with me.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">Error loading testimonials: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h1>
        <p className="text-xl text-gray-600">
          What clients and colleagues have to say about working with me.
        </p>
      </div>
      
      {reviews.length === 0 ? (
        <div className="bg-white rounded-lg shadow-soft p-8 text-center">
          <div className="text-6xl mb-4">💬</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Testimonials Yet</h2>
          <p className="text-gray-600">
            Client testimonials will appear here once added.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardBody className="space-y-4">
                {review.rating && (
                  <div className="flex items-center gap-2 text-2xl">
                    {renderStars(review.rating)}
                  </div>
                )}
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{review.review_text}"
                </p>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">
                    {review.reviewer_display_name || review.reviewer_name}
                  </p>
                  {review.reviewer_position && (
                    <p className="text-sm text-gray-600">{review.reviewer_position}</p>
                  )}
                  {review.reviewer_company && (
                    <p className="text-sm text-primary-600">{review.reviewer_company}</p>
                  )}
                  {review.client_project_id && (
                    <p className="text-xs text-gray-500 mt-1">Related to project</p>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

