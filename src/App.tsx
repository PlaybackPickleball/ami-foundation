import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { LanguageProvider } from './i18n/language'
import { CommitmentPage } from './pages/CommitmentPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { InitiativesPage } from './pages/InitiativesPage'
import { InvolvedPage } from './pages/InvolvedPage'
import { MissionPage } from './pages/MissionPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { StoriesPage } from './pages/StoriesPage'
import { StoryPage } from './pages/StoryPage'
import { TermsPage } from './pages/TermsPage'

const routerBasename =
  import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={routerBasename}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="mission" element={<MissionPage />} />
            <Route path="stories" element={<StoriesPage />} />
            <Route path="stories/:slug" element={<StoryPage />} />
            <Route path="initiatives" element={<InitiativesPage />} />
            <Route path="get-involved" element={<InvolvedPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="commitment" element={<CommitmentPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
