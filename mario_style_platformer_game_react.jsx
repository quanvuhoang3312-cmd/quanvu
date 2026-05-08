export default function MarioStyleGame() {
  return (
    <div className="w-full h-screen bg-sky-300 flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
        Mini Mario Game
      </h1>

      <div className="relative w-[900px] h-[450px] bg-gradient-to-b from-sky-300 to-green-200 border-4 border-black overflow-hidden rounded-2xl shadow-2xl">
        {/* Clouds */}
        <div className="absolute top-10 left-20 w-24 h-12 bg-white rounded-full"></div>
        <div className="absolute top-12 left-32 w-24 h-12 bg-white rounded-full"></div>

        <div className="absolute top-20 right-32 w-24 h-12 bg-white rounded-full"></div>
        <div className="absolute top-22 right-20 w-24 h-12 bg-white rounded-full"></div>

        {/* Mountains */}
        <div className="absolute bottom-20 left-10 w-0 h-0 border-l-[80px] border-r-[80px] border-b-[140px] border-l-transparent border-r-transparent border-b-green-700"></div>
        <div className="absolute bottom-20 left-48 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[180px] border-l-transparent border-r-transparent border-b-green-600"></div>

        {/* Blocks */}
        <div className="absolute bottom-40 left-80 flex gap-2">
          <div className="w-12 h-12 bg-yellow-500 border-4 border-yellow-700"></div>
          <div className="w-12 h-12 bg-amber-700 border-4 border-amber-900"></div>
          <div className="w-12 h-12 bg-yellow-500 border-4 border-yellow-700"></div>
        </div>

        {/* Pipe */}
        <div className="absolute bottom-20 right-40">
          <div className="w-24 h-10 bg-green-600 border-4 border-green-900"></div>
          <div className="w-20 h-32 bg-green-500 border-4 border-green-900 mx-auto"></div>
        </div>

        {/* Enemy */}
        <div className="absolute bottom-20 left-[600px]">
          <div className="w-14 h-14 bg-amber-800 rounded-full border-4 border-black relative">
            <div className="absolute top-3 left-2 w-3 h-3 bg-white rounded-full"></div>
            <div className="absolute top-3 right-2 w-3 h-3 bg-white rounded-full"></div>
            <div className="absolute bottom-2 left-3 w-8 h-2 bg-black rounded-full"></div>
          </div>
        </div>

        {/* Mario */}
        <div className="absolute bottom-20 left-32 flex flex-col items-center">
          <div className="w-10 h-4 bg-red-600 rounded-t-md"></div>
          <div className="w-8 h-8 bg-orange-300 rounded-full border-2 border-black"></div>
          <div className="w-10 h-12 bg-red-500 border-2 border-black"></div>
          <div className="flex gap-1">
            <div className="w-4 h-10 bg-blue-700"></div>
            <div className="w-4 h-10 bg-blue-700"></div>
          </div>
        </div>

        {/* Ground */}
        <div className="absolute bottom-0 w-full h-20 bg-green-700 border-t-8 border-green-900"></div>
      </div>

      <p className="mt-5 text-lg text-white font-semibold">
        🎮 Đây là phiên bản Mario mini bằng React + TailwindCSS
      </p>
    </div>
  );
}
