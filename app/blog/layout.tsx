import BlogNavigation from '@/components/blog/BlogNavigation'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200">
      <BlogNavigation />
      <div className="pt-20">
        {children}
      </div>
    </div>
  )
}
