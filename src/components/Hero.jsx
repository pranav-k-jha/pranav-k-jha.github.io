import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <p className="text-blue-600 font-medium mb-4">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block">Pranav Jha</span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              AI Engineer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl mx-auto md:mx-0">
            Building intelligent systems and solving complex problems with
            Machine Learning and Deep Learning.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
            <div className="relative z-10 p-1 bg-white/30 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20">
              <div className="bg-white/80 p-6 rounded-xl">
                <pre className="text-green-400 text-sm md:text-base">
                  <code>
                    {`class AIEngineer:
    def __init__(self):
        self.name = "Pranav Jha"
        self.role = "AI Engineer"
        self.skills = ["Machine Learning", "Deep Learning", "Computer Vision"]

    def build_ai_solutions(self):
        return "Transforming ideas into intelligent systems"`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
