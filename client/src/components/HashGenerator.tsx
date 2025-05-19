import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';

export default function HashGenerator() {
  const [message, setMessage] = useState("Hello, SHA-2!");
  const [algorithm, setAlgorithm] = useState<'SHA-256' | 'SHA-512'>('SHA-256');
  const [hash, setHash] = useState<string | null>(null);

  const hashMutation = useMutation({
    mutationFn: async ({ message, algorithm }: { message: string, algorithm: string }) => {
      const res = await apiRequest('POST', '/api/hash', { message, algorithm });
      return res.json();
    },
    onSuccess: (data) => {
      setHash(data.hash);
    },
  });

  const handleHash = () => {
    hashMutation.mutate({ message, algorithm });
  };

  return (
    <section className="mb-12">
      <div className="bg-retro-panel p-6 rounded-lg pixel-borders relative mb-6 crt-scanline">
        <h2 className="font-pixel text-xl text-retro-blue mb-4">HASH GENERATOR</h2>
        
        {/* Algorithm selector */}
        <div className="mb-6">
          <h3 className="font-terminal text-lg mb-2">SELECT ALGORITHM:</h3>
          <div className="flex flex-wrap gap-3">
            <button 
              className={`pixel-button px-4 py-2 ${algorithm === 'SHA-256' ? 'bg-retro-blue text-retro-dark' : 'bg-retro-panel text-retro-light'} font-terminal text-lg rounded-md shadow-[0_4px_0_0_#3377AA] hover:bg-retro-light hover:text-retro-blue`}
              onClick={() => setAlgorithm('SHA-256')}
            >
              SHA-256
            </button>
            <button 
              className={`pixel-button px-4 py-2 ${algorithm === 'SHA-512' ? 'bg-retro-blue text-retro-dark' : 'bg-retro-panel text-retro-light'} font-terminal text-lg rounded-md shadow-[0_4px_0_0_#55AAFF] hover:bg-retro-light hover:text-retro-blue`}
              onClick={() => setAlgorithm('SHA-512')}
            >
              SHA-512
            </button>
          </div>
        </div>
        
        {/* Input section */}
        <div className="mb-6">
          <h3 className="font-terminal text-lg mb-2">ENTER MESSAGE:</h3>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="flex-1">
              <textarea 
                rows={3} 
                className="w-full bg-black border-2 border-retro-green p-3 font-terminal text-lg text-retro-green focus:outline-none focus:ring-2 focus:ring-retro-orange rounded-md" 
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button 
              className="pixel-button px-4 py-2 bg-retro-red text-retro-light font-terminal text-lg rounded-md shadow-[0_4px_0_0_#AA3333] hover:bg-retro-light hover:text-retro-red self-end"
              onClick={handleHash}
              disabled={hashMutation.isPending}
            >
              {hashMutation.isPending ? "HASHING..." : "HASH IT!"}
            </button>
          </div>
        </div>
        
        {/* Output display */}
        <div>
          <h3 className="font-terminal text-lg mb-2">HASH OUTPUT:</h3>
          <div className="bg-black border-2 border-retro-green p-3 font-terminal text-lg text-retro-green break-all rounded-md h-16 overflow-auto">
            {hashMutation.isPending ? (
              <span className="inline-block animate-blink">_</span>
            ) : hash ? (
              hash
            ) : (
              <span className="inline-block animate-blink">_</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
