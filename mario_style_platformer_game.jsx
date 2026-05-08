// Mario Style Web Game
// Phù hợp để upload lên GitHub và chạy bằng Vite + React + TailwindCSS
// File: App.jsx

export default function MarioStyleGame() {
  return (
    <div className="w-full h-screen bg-sky-300 flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">
        Mini Mario Game
      </h1>

      <div className="relative w-[900px] h-[500px] bg-gradient-to-b from-sky-300 to-green-200 border-4 border-black overflow-hidden rounded-2xl shadow-2xl">
        {/* Clouds */}
        <div className="absolute top-10 left-20 w-24 h-12 bg-white rounded-full"></div>
        <div className="absolute top-8 left-32 w-16 h-16 bg-white rounded-full"></div>

        <div className="absolute top-20 right-32 w-24 h-12 bg-white rounded-full"></div>
        <div className="absolute top-18 right-44 w-16 h-16 bg-white rounded-full"></div>

        {/* Ground */}
        <div className="absolute bottom-0 w-full h-24 bg-green-700 border-t-4 border-black"></div>

        {/* Pipes */}
        <div className="absolute bottom-24 left-[250px] w-24 h-32 bg-green-500 border-4 border-black rounded-t-lg"></div>
        <div className="absolute bottom-24 right-[200px] w-24 h-44 bg-green-500 border-4 border-black rounded-t-lg"></div>

        {/* Blocks */}
        <div className="absolute top-[220px] left-[350px] flex gap-2">
          <div className="w-14 h-14 bg-yellow-400 border-4 border-black flex items-center justify-center font-bold text-2xl">
            ?
          </div>
          <div className="w-14 h-14 bg-amber-700 border-4 border-black"></div>
          <div className="w-14 h-14 bg-amber-700 border-4 border-black"></div>
        </div>

        {/* Mario */}
        <div className="absolute bottom-24 left-20 flex flex-col items-center animate-bounce">
          {/* Head */}
          <div className="w-10 h-10 bg-pink-300 rounded-full border-2 border-black relative">
            <div className="absolute -top-2 left-0 w-10 h-4 bg-red-600 rounded-t-full"></div>
            <div className="absolute top-4 left-2 w-1 h-1 bg-black rounded-full"></div>
            <div className="absolute top-4 right-2 w-1 h-1 bg-black rounded-full"></div>
          </div>

          {/* Body */}
          <div className="w-10 h-12 bg-red-600 border-2 border-black relative">
            <div className="absolute bottom-0 left-0 w-full h-6 bg-blue-600"></div>
          </div>

          {/* Legs */}
          <div className="flex gap-2">
            <div className="w-3 h-6 bg-brown-800"></div>
            <div className="w-3 h-6 bg-brown-800"></div>
          </div>
        </div>

        {/* Enemy */}
        <div className="absolute bottom-24 right-[320px] flex flex-col items-center animate-pulse">
          <div className="w-12 h-12 bg-amber-800 rounded-full border-2 border-black"></div>
          <div className="flex gap-2 mt-1">
            <div className="w-3 h-4 bg-black"></div>
            <div className="w-3 h-4 bg-black"></div>
          </div>
        </div>

        {/* Coins */}
        <div className="absolute top-[140px] left-[150px] w-10 h-10 rounded-full bg-yellow-300 border-4 border-yellow-500 animate-spin"></div>
        <div className="absolute top-[100px] left-[500px] w-10 h-10 rounded-full bg-yellow-300 border-4 border-yellow-500 animate-spin"></div>

        {/* Text */}
        <div className="absolute top-4 left-4 text-white text-2xl font-bold drop-shadow-lg">
          SCORE: 0000
        </div>

        <div className="absolute top-4 right-4 text-white text-2xl font-bold drop-shadow-lg">
          WORLD 1-1
        </div>
      </div>

      <p className="mt-4 text-white text-lg font-semibold">
        🎮 Mini web game phong cách Mario chạy bằng React + Tailwind CSS.
      </p>
    </div>
  );}

/*
Cách chạy project:

1. Tạo project Vite:
   npm create vite@latest mario-game -- --template react

2. Cài Tailwind:
   npm install -D tailwindcss @tailwindcss/vite

3. Copy file này vào src/App.jsx

4. Chạy:
   npm install
   npm run dev

5. Upload toàn bộ project lên GitHub.
*/
