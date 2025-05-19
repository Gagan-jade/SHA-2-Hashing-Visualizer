export default function Introduction() {
  return (
    <section className="mb-10">
      <div className="bg-retro-panel p-6 rounded-lg pixel-borders relative overflow-hidden crt-scanline">
        <h2 className="font-pixel text-xl text-retro-orange mb-4">WHAT IS SHA-2?</h2>
        <p className="font-terminal text-xl mb-4">
          SHA-2 (Secure Hash Algorithm 2) is a set of cryptographic hash functions designed by the NSA.
        </p>
        <div className="flex flex-wrap gap-4 font-mono text-sm">
          <div className="bg-retro-dark p-3 rounded-md border-2 border-retro-blue">
            <h3 className="font-terminal text-lg text-retro-blue mb-2">ONE-WAY FUNCTION</h3>
            <p>Cannot derive original input from the hash output</p>
          </div>
          <div className="bg-retro-dark p-3 rounded-md border-2 border-retro-red">
            <h3 className="font-terminal text-lg text-retro-red mb-2">DETERMINISTIC</h3>
            <p>Same input always produces same output</p>
          </div>
          <div className="bg-retro-dark p-3 rounded-md border-2 border-retro-green">
            <h3 className="font-terminal text-lg text-retro-green mb-2">COLLISION RESISTANT</h3>
            <p>Extremely difficult to find two inputs with same hash</p>
          </div>
          <div className="bg-retro-dark p-3 rounded-md border-2 border-retro-orange">
            <h3 className="font-terminal text-lg text-retro-orange mb-2">AVALANCHE EFFECT</h3>
            <p>Small input change = completely different hash</p>
          </div>
        </div>
      </div>
    </section>
  );
}
