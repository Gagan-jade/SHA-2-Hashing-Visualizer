interface VisualizationStageProps {
  stage: {
    id: string;
    title: string;
    content: React.ReactNode;
  };
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function VisualizationStage({ 
  stage, 
  onNext, 
  onBack, 
  isFirst, 
  isLast 
}: VisualizationStageProps) {
  return (
    <div id={stage.id} className="visualization-stage">
      <h3 className="font-terminal text-xl text-retro-green mb-4">{stage.title}</h3>
      
      {stage.content}
      
      <div className="mt-6 flex justify-between">
        {!isFirst && (
          <button 
            className="pixel-button px-6 py-2 bg-retro-panel text-retro-light font-terminal text-lg rounded-md shadow-[0_4px_0_0_#55AAFF] hover:bg-retro-light hover:text-retro-blue"
            onClick={onBack}
          >
            ← BACK
          </button>
        )}
        
        {isFirst && <div></div>}
        
        {!isLast ? (
          <button 
            className="pixel-button px-6 py-2 bg-retro-orange text-retro-dark font-terminal text-lg rounded-md shadow-[0_4px_0_0_#AA7700] hover:bg-retro-light hover:text-retro-orange"
            onClick={onNext}
          >
            NEXT STEP →
          </button>
        ) : (
          <button 
            className="pixel-button px-6 py-2 bg-retro-green text-retro-dark font-terminal text-lg rounded-md shadow-[0_4px_0_0_#22AA44] hover:bg-retro-light hover:text-retro-green"
            onClick={() => onBack()}
          >
            RESTART
          </button>
        )}
      </div>
    </div>
  );
}
