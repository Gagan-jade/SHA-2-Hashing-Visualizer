export default function BitOperations() {
  return (
    <section>
      <div className="bg-retro-panel p-6 rounded-lg pixel-borders relative crt-scanline">
        <h2 className="font-pixel text-xl text-retro-green mb-4">BIT OPERATIONS EXPLAINED</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-retro-dark p-4 rounded-md border-2 border-retro-blue">
            <h3 className="font-terminal text-lg text-retro-blue mb-2">LOGICAL OPERATIONS</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-black p-3 rounded">
                <h4 className="font-terminal text-sm text-retro-orange mb-2">AND OPERATION</h4>
                <p className="font-terminal text-xs mb-2">Returns 1 if both bits are 1, otherwise 0</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-retro-panel p-1">1 AND 1 = 1</div>
                  <div className="bg-retro-panel p-1">1 AND 0 = 0</div>
                  <div className="bg-retro-panel p-1">0 AND 0 = 0</div>
                </div>
              </div>
              
              <div className="bg-black p-3 rounded">
                <h4 className="font-terminal text-sm text-retro-orange mb-2">XOR OPERATION</h4>
                <p className="font-terminal text-xs mb-2">Returns 1 if bits are different, otherwise 0</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-retro-panel p-1">1 XOR 1 = 0</div>
                  <div className="bg-retro-panel p-1">1 XOR 0 = 1</div>
                  <div className="bg-retro-panel p-1">0 XOR 0 = 0</div>
                </div>
              </div>
              
              <div className="bg-black p-3 rounded">
                <h4 className="font-terminal text-sm text-retro-orange mb-2">NOT OPERATION</h4>
                <p className="font-terminal text-xs mb-2">Inverts all bits (0 becomes 1, 1 becomes 0)</p>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-retro-panel p-1">NOT 1 = 0</div>
                  <div className="bg-retro-panel p-1">NOT 0 = 1</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-retro-dark p-4 rounded-md border-2 border-retro-red">
            <h3 className="font-terminal text-lg text-retro-red mb-2">BIT SHIFTS & ROTATIONS</h3>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-black p-3 rounded">
                <h4 className="font-terminal text-sm text-retro-orange mb-2">SHIFT RIGHT (SHR)</h4>
                <p className="font-terminal text-xs mb-2">Shifts all bits to the right, filling with 0s from left</p>
                <div className="bg-retro-panel p-2 font-mono">
                  <div>10110011 SHR 2 =</div>
                  <div>00101100</div>
                </div>
              </div>
              
              <div className="bg-black p-3 rounded">
                <h4 className="font-terminal text-sm text-retro-orange mb-2">ROTATE RIGHT (ROTR)</h4>
                <p className="font-terminal text-xs mb-2">Shifts all bits to the right, wrapping around</p>
                <div className="bg-retro-panel p-2 font-mono">
                  <div>10110011 ROTR 2 =</div>
                  <div>11101100</div>
                </div>
              </div>
              
              <div className="bg-black p-3 rounded">
                <h4 className="font-terminal text-sm text-retro-orange mb-2">ADDITION MODULO 2^32</h4>
                <p className="font-terminal text-xs mb-2">Addition with overflow wrapping around to 0</p>
                <div className="bg-retro-panel p-2 font-mono text-xs">
                  <div>FFFFFFFF + 00000001 =</div>
                  <div>00000000 (overflow)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
