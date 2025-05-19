import { useState } from 'react';
import VisualizationStage from './VisualizationStage';
import BitElement from './BitElement';

export default function AlgorithmVisualization() {
  const [currentStage, setCurrentStage] = useState(0);
  
  const stages = [
    {
      id: 'stage1',
      title: '1. PREPROCESSING',
      content: (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-retro-dark p-4 rounded-md border-2 border-retro-blue">
              <h4 className="font-terminal text-lg text-retro-blue mb-2">ORIGINAL MESSAGE</h4>
              <div className="font-mono text-retro-light mb-4">
                <div className="flex flex-wrap">
                  <BitElement value="H" initial={1} />
                  <BitElement value="e" initial={0} />
                  <BitElement value="l" initial={1} />
                  <BitElement value="l" initial={0} />
                  <BitElement value="o" initial={1} />
                  <BitElement value="," initial={0} />
                  <BitElement value=" " initial={1} />
                  <BitElement value="S" initial={0} />
                  <BitElement value="H" initial={1} />
                  <BitElement value="A" initial={0} />
                  <BitElement value="-" initial={1} />
                  <BitElement value="2" initial={0} />
                  <BitElement value="!" initial={1} />
                </div>
              </div>
              <p className="font-terminal text-sm text-retro-light">ASCII characters converted to binary</p>
            </div>
            
            <div className="bg-retro-dark p-4 rounded-md border-2 border-retro-red">
              <h4 className="font-terminal text-lg text-retro-red mb-2">PADDING</h4>
              <div className="font-mono text-retro-light mb-2">
                <div className="flex flex-wrap">
                  <BitElement value="1" initial={1} />
                  <BitElement value="0" initial={0} />
                  <BitElement value="0" initial={0} />
                  <BitElement value="..." initial={0} />
                  <BitElement value="0" initial={0} />
                  <BitElement value="L" initial={0} />
                  <BitElement value="E" initial={1} />
                  <BitElement value="N" initial={0} />
                </div>
              </div>
              <p className="font-terminal text-sm text-retro-light mb-4">Message is padded to ensure the length is a multiple of 512 bits</p>
              <div className="grid grid-cols-1 gap-2">
                <div className="bg-black p-2 rounded border border-retro-light">
                  <p className="font-terminal text-xs">1. Append a single '1' bit</p>
                </div>
                <div className="bg-black p-2 rounded border border-retro-light">
                  <p className="font-terminal text-xs">2. Add '0's until length ≡ 448 (mod 512)</p>
                </div>
                <div className="bg-black p-2 rounded border border-retro-light">
                  <p className="font-terminal text-xs">3. Append original message length as 64-bit integer</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'stage2',
      title: '2. INITIALIZE HASH VALUES',
      content: (
        <>
          <div className="bg-retro-dark p-4 rounded-md border-2 border-retro-blue mb-6">
            <h4 className="font-terminal text-lg text-retro-blue mb-2">INITIAL HASH VALUES (H<sub>0</sub>)</h4>
            <p className="font-terminal text-sm mb-4">First 32 bits of the fractional parts of the square roots of the first 8 prime numbers (2 to 19)</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">H<sub>0</sub>: 6a09e667</p>
              </div>
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">H<sub>1</sub>: bb67ae85</p>
              </div>
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">H<sub>2</sub>: 3c6ef372</p>
              </div>
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">H<sub>3</sub>: a54ff53a</p>
              </div>
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">H<sub>4</sub>: 510e527f</p>
              </div>
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">H<sub>5</sub>: 9b05688c</p>
              </div>
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">H<sub>6</sub>: 1f83d9ab</p>
              </div>
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">H<sub>7</sub>: 5be0cd19</p>
              </div>
            </div>
          </div>
          
          <div className="bg-retro-dark p-4 rounded-md border-2 border-retro-red mb-6">
            <h4 className="font-terminal text-lg text-retro-red mb-2">ROUND CONSTANTS (K)</h4>
            <p className="font-terminal text-sm mb-4">First 32 bits of the fractional parts of the cube roots of the first 64 prime numbers (2 to 311)</p>
            
            <div className="bg-black p-3 rounded overflow-auto">
              <p className="font-mono text-retro-green text-sm whitespace-nowrap">
                428a2f98 71374491 b5c0fbcf e9b5dba5 3956c25b 59f111f1 923f82a4 ab1c5ed5 ...
              </p>
            </div>
            <p className="font-terminal text-xs mt-2">64 constants used in the compression function</p>
          </div>
        </>
      )
    },
    {
      id: 'stage3',
      title: '3. MESSAGE SCHEDULE',
      content: (
        <>
          <div className="bg-retro-dark p-4 rounded-md border-2 border-retro-blue mb-6">
            <h4 className="font-terminal text-lg text-retro-blue mb-2">CHUNK PROCESSING</h4>
            <p className="font-terminal text-sm mb-4">The padded message is split into 512-bit chunks, each processed separately</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="bg-black p-2 rounded flex items-center">
                <div className="w-6 h-6 bg-retro-green mr-2"></div>
                <p className="font-terminal text-retro-light">CHUNK 1</p>
              </div>
              <div className="bg-black p-2 rounded flex items-center">
                <div className="w-6 h-6 bg-retro-red mr-2"></div>
                <p className="font-terminal text-retro-light">CHUNK 2</p>
              </div>
              <div className="bg-black p-2 rounded flex items-center opacity-50">
                <div className="w-6 h-6 bg-retro-blue mr-2"></div>
                <p className="font-terminal text-retro-light">CHUNK 3</p>
              </div>
            </div>
            
            <p className="font-terminal text-sm">Each 512-bit chunk is divided into 16 32-bit words (W<sub>0</sub> to W<sub>15</sub>)</p>
          </div>
          
          <div className="bg-retro-dark p-4 rounded-md border-2 border-retro-red mb-6">
            <h4 className="font-terminal text-lg text-retro-red mb-2">MESSAGE SCHEDULE EXPANSION</h4>
            <p className="font-terminal text-sm mb-4">Expand 16 words into 64 words using this formula:</p>
            
            <div className="bg-black p-3 rounded mb-4">
              <p className="font-mono text-retro-green text-sm">
                W[i] = σ<sub>1</sub>(W[i-2]) + W[i-7] + σ<sub>0</sub>(W[i-15]) + W[i-16]
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-terminal text-retro-orange mb-2">σ<sub>0</sub>(x) FUNCTION:</h5>
                <div className="flex flex-col space-y-2">
                  <div className="bg-black p-2 rounded flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-retro-blue mr-2">→</div>
                    <p className="font-terminal text-xs text-retro-light">ROTR 7(x)</p>
                  </div>
                  <div className="bg-black p-2 rounded flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-retro-blue mr-2">→</div>
                    <p className="font-terminal text-xs text-retro-light">ROTR 18(x)</p>
                  </div>
                  <div className="bg-black p-2 rounded flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-retro-blue mr-2">→</div>
                    <p className="font-terminal text-xs text-retro-light">SHR 3(x)</p>
                  </div>
                  <div className="bg-black p-2 rounded flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-retro-green mr-2">⊕</div>
                    <p className="font-terminal text-xs text-retro-light">XOR all results together</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h5 className="font-terminal text-retro-orange mb-2">σ<sub>1</sub>(x) FUNCTION:</h5>
                <div className="flex flex-col space-y-2">
                  <div className="bg-black p-2 rounded flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-retro-red mr-2">→</div>
                    <p className="font-terminal text-xs text-retro-light">ROTR 17(x)</p>
                  </div>
                  <div className="bg-black p-2 rounded flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-retro-red mr-2">→</div>
                    <p className="font-terminal text-xs text-retro-light">ROTR 19(x)</p>
                  </div>
                  <div className="bg-black p-2 rounded flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-retro-red mr-2">→</div>
                    <p className="font-terminal text-xs text-retro-light">SHR 10(x)</p>
                  </div>
                  <div className="bg-black p-2 rounded flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center bg-retro-green mr-2">⊕</div>
                    <p className="font-terminal text-xs text-retro-light">XOR all results together</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'stage4',
      title: '4. COMPRESSION FUNCTION',
      content: (
        <>
          <div className="bg-retro-dark p-4 rounded-md border-2 border-retro-blue mb-6">
            <h4 className="font-terminal text-lg text-retro-blue mb-2">WORKING VARIABLES</h4>
            <p className="font-terminal text-sm mb-4">Initialize 8 working variables with current hash values:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">a = H<sub>0</sub></p>
              </div>
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">b = H<sub>1</sub></p>
              </div>
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">c = H<sub>2</sub></p>
              </div>
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">d = H<sub>3</sub></p>
              </div>
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">e = H<sub>4</sub></p>
              </div>
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">f = H<sub>5</sub></p>
              </div>
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">g = H<sub>6</sub></p>
              </div>
              <div className="bg-black p-2 rounded">
                <p className="font-mono text-retro-green">h = H<sub>7</sub></p>
              </div>
            </div>
          </div>
          
          <div className="bg-retro-dark p-4 rounded-md border-2 border-retro-red mb-6">
            <h4 className="font-terminal text-lg text-retro-red mb-2">MAIN COMPRESSION LOOP</h4>
            <p className="font-terminal text-sm mb-4">For each of the 64 rounds:</p>
            
            <div className="bg-black p-3 rounded mb-4">
              <p className="font-mono text-retro-green text-sm leading-relaxed">
                Ch(e,f,g) = (e AND f) XOR ((NOT e) AND g)<br />
                Maj(a,b,c) = (a AND b) XOR (a AND c) XOR (b AND c)<br />
                Σ<sub>0</sub>(a) = ROTR 2(a) XOR ROTR 13(a) XOR ROTR 22(a)<br />
                Σ<sub>1</sub>(e) = ROTR 6(e) XOR ROTR 11(e) XOR ROTR 25(e)<br />
                T<sub>1</sub> = h + Σ<sub>1</sub>(e) + Ch(e,f,g) + K[i] + W[i]<br />
                T<sub>2</sub> = Σ<sub>0</sub>(a) + Maj(a,b,c)<br />
              </p>
            </div>
            
            <div className="bg-black p-3 rounded mb-4">
              <p className="font-mono text-retro-orange text-sm leading-relaxed">
                h = g<br />
                g = f<br />
                f = e<br />
                e = d + T<sub>1</sub><br />
                d = c<br />
                c = b<br />
                b = a<br />
                a = T<sub>1</sub> + T<sub>2</sub><br />
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full border-4 border-retro-green opacity-60 w-full h-full"></div>
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-retro-blue rounded-full w-8 h-8 flex items-center justify-center">a</div>
                <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 bg-retro-blue rounded-full w-8 h-8 flex items-center justify-center">b</div>
                <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 translate-y-1/2 bg-retro-blue rounded-full w-8 h-8 flex items-center justify-center">c</div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-retro-blue rounded-full w-8 h-8 flex items-center justify-center">d</div>
                <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2 bg-retro-red rounded-full w-8 h-8 flex items-center justify-center">e</div>
                <div className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-retro-red rounded-full w-8 h-8 flex items-center justify-center">f</div>
                <div className="absolute top-0 left-1/4 transform -translate-y-1/2 bg-retro-red rounded-full w-8 h-8 flex items-center justify-center">g</div>
                <div className="absolute top-0 right-1/4 transform -translate-y-1/2 bg-retro-red rounded-full w-8 h-8 flex items-center justify-center">h</div>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'stage5',
      title: '5. FINAL HASH',
      content: (
        <>
          <div className="bg-retro-dark p-4 rounded-md border-2 border-retro-blue mb-6">
            <h4 className="font-terminal text-lg text-retro-blue mb-2">COMPUTE FINAL HASH VALUES</h4>
            <p className="font-terminal text-sm mb-4">After all chunks are processed, compute final hash:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-black p-3 rounded">
                <p className="font-mono text-retro-green text-sm leading-relaxed">
                  H<sub>0</sub> = H<sub>0</sub> + a<br />
                  H<sub>1</sub> = H<sub>1</sub> + b<br />
                  H<sub>2</sub> = H<sub>2</sub> + c<br />
                  H<sub>3</sub> = H<sub>3</sub> + d<br />
                </p>
              </div>
              <div className="bg-black p-3 rounded">
                <p className="font-mono text-retro-green text-sm leading-relaxed">
                  H<sub>4</sub> = H<sub>4</sub> + e<br />
                  H<sub>5</sub> = H<sub>5</sub> + f<br />
                  H<sub>6</sub> = H<sub>6</sub> + g<br />
                  H<sub>7</sub> = H<sub>7</sub> + h<br />
                </p>
              </div>
            </div>
            
            <p className="font-terminal text-sm">The final hash value is the concatenation of all H values (H<sub>0</sub> to H<sub>7</sub>)</p>
          </div>
          
          <div className="bg-retro-dark p-4 rounded-md border-2 border-retro-orange">
            <h4 className="font-terminal text-lg text-retro-orange mb-2">OUTPUT</h4>
            <div className="bg-black p-3 rounded mb-4 overflow-hidden">
              <p className="font-mono text-retro-green typing-effect">
                7446904b5e22c7094103d190f2eadab42f8a1e5c58147736ef7e1fcbfba7456e
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="bg-retro-panel p-2 rounded-md flex-1">
                <h5 className="font-terminal text-sm text-retro-blue mb-1">SHA-256</h5>
                <p className="font-terminal text-xs">256-bit (32-byte) hash value displayed as 64 hexadecimal digits</p>
              </div>
              <div className="bg-retro-panel p-2 rounded-md flex-1">
                <h5 className="font-terminal text-sm text-retro-red mb-1">SECURITY</h5>
                <p className="font-terminal text-xs">Cryptographically secure with 2<sup>256</sup> possible hash values</p>
              </div>
              <div className="bg-retro-panel p-2 rounded-md flex-1">
                <h5 className="font-terminal text-sm text-retro-green mb-1">USES</h5>
                <p className="font-terminal text-xs">Digital signatures, password storage, blockchain, data integrity</p>
              </div>
            </div>
          </div>
        </>
      )
    },
  ];

  return (
    <section className="mb-12">
      <div className="bg-retro-panel p-6 rounded-lg pixel-borders relative crt-scanline">
        <h2 className="font-pixel text-xl text-retro-orange mb-6">SHA-256 ALGORITHM VISUALIZATION</h2>
        
        {/* Process navigation */}
        <div className="flex items-center justify-between mb-8 overflow-auto py-2">
          <div className="flex items-center min-w-max">
            {stages.map((stage, index) => (
              <div key={stage.id} className="flex items-center">
                <div 
                  className={`stage-indicator ${index <= currentStage ? 'stage-active' : ''} cursor-pointer`}
                  onClick={() => setCurrentStage(index)}
                >
                  {index < stages.length - 1 && <div className="stage-line"></div>}
                </div>
                <span className="font-terminal text-sm md:text-base mr-4">
                  {stage.title.split(".")[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Visualization area */}
        <div id="visualizationContainer" className="mb-6">
          <VisualizationStage
            stage={stages[currentStage]}
            onNext={() => setCurrentStage(Math.min(currentStage + 1, stages.length - 1))}
            onBack={() => setCurrentStage(Math.max(currentStage - 1, 0))}
            isFirst={currentStage === 0}
            isLast={currentStage === stages.length - 1}
          />
        </div>
      </div>
    </section>
  );
}
