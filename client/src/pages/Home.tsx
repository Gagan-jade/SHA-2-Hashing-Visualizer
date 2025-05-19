import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import HashGenerator from '@/components/HashGenerator';
import AlgorithmVisualization from '@/components/AlgorithmVisualization';
import BitOperations from '@/components/BitOperations';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-retro-dark text-retro-light grid-bg min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 mb-16 flex-grow">
        <Introduction />
        <HashGenerator />
        <AlgorithmVisualization />
        <BitOperations />
      </main>
      <Footer />
    </div>
  );
}
