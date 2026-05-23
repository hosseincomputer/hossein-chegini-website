import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Kasra Labs',
  description: 'Privacy policy for all KasrLabs mobile applications and games.',
  alternates: {
    canonical: 'https://kasralabs.ai/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary-500/20 shadow-sm">

          <h1 className="text-3xl md:text-4xl font-bold text-dark-800 mb-2">Privacy Policy</h1>
          <p className="text-dark-500 text-sm mb-10">Last updated: May 23, 2026</p>

          <div className="space-y-8 text-dark-600 leading-relaxed">

            <section>
              <h2 className="text-xl font-semibold text-dark-800 mb-3">Introduction</h2>
              <p>KasrLabs ("we", "us", or "our") develops mobile applications and games. This privacy policy applies to all applications developed and published by KasrLabs.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark-800 mb-3">Information We Collect</h2>
              <p>KasrLabs apps do not collect any personal information from users. Our apps do not require registration or login.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark-800 mb-3">Children's Privacy</h2>
              <p>Our apps are suitable for children of all ages. We do not knowingly collect personal information from children under 13. Our apps contain no targeted ads and no data collection.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark-800 mb-3">Device Permissions</h2>
              <p>Our apps do not request any special device permissions unless explicitly required for core functionality, in which case it will be clearly stated.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark-800 mb-3">Third Party Services</h2>
              <p>Our apps do not use third party services that collect user data.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark-800 mb-3">Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify users of any changes by updating the date at the top of this page.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark-800 mb-3">Contact Us</h2>
              <p>If you have any questions about this privacy policy, please contact us:</p>
              <ul className="mt-2 space-y-1">
                <li>Email: <a href="mailto:hossein.computer@gmail.com" className="text-primary-600 hover:text-primary-700">hossein.computer@gmail.com</a></li>
                <li>Website: <a href="https://kasralabs.ai" className="text-primary-600 hover:text-primary-700">www.kasralabs.ai</a></li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}
