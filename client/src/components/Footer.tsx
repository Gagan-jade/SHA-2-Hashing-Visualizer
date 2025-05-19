export default function Footer() {
  return (
    <footer className="bg-retro-panel py-4 border-t-4 border-retro-orange mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="font-terminal text-retro-light">
          &copy; {new Date().getFullYear()} SHA-2 VISUALIZER
        </p>
        <p className="font-terminal text-xs text-retro-light mt-2">
          RETRO EDITION
        </p>
      </div>
    </footer>
  );
}
