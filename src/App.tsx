import Header from './components/Header';
import HeroEco from './components/HeroEco';
import BackgroundStats from './components/BackgroundStats';
import WhatIsIt from './components/WhatIsIt';
import FeatureGrid from './components/FeatureGrid';
import ComparisonMatrix from './components/ComparisonMatrix';
import ProductionFlow from './components/ProductionFlow';
import ImpactProjections from './components/ImpactProjections';
import RoadmapTimeline from './components/RoadmapTimeline';
import TeamVisionaries from './components/TeamVisionaries';
import ResearchInsights from './components/ResearchInsights';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Sticky header navigation */}
      <Header />

      {/* Main Sections flow */}
      <main>
        {/* Full-viewport hero banner */}
        <HeroEco />

        {/* Global plastic crisis stats ticker */}
        <BackgroundStats />

        {/* Product chemistry formulation breakdown */}
        <WhatIsIt />

        {/* Detailed functional feature cards */}
        <FeatureGrid />

        {/* High-fidelity comparative matrix */}
        <ComparisonMatrix />

        {/* Stepping timelines for factory processing */}
        <ProductionFlow />

        {/* Sustainability indicators, carbon footprint metrics */}
        <ImpactProjections />

        {/* Future expansion & business operations timelines */}
        <RoadmapTimeline />

        {/* Core visionary student researchers */}
        <TeamVisionaries />

        {/* Extended SWOT, PESTLE, and Cost breakdowns */}
        <ResearchInsights />
      </main>

      {/* Structured references and SDG footer */}
      <Footer />
    </div>
  );
}
