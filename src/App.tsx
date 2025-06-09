import React, { useState } from 'react';
import { skipOptions } from './data/skipOptions';
import { SkipCard } from './components/SkipCard';
import { motion } from 'framer-motion';

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <header className="max-w-7xl w-full text-center mb-12 relative">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Select Your Skip
        </motion.h1>
        <motion.div
          className="h-1 w-32 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mt-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-red-500 max-w-xl mx-auto">
          Pick the perfect skip with futuristic pricing and features.
        </p>
      </header>
      <main className="max-w-7xl w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 outline outline-1 outline-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.3 }}
        >
          {skipOptions.map((skip, index) => {
            const totalPrice = (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);
            return (
              <SkipCard
                key={skip.id}
                id={skip.id}
                size={skip.size}
                hirePeriod={skip.hire_period_days}
                price={+totalPrice}
                selected={selectedId === skip.id}
                onSelect={() => handleSelect(skip.id)}
                onRoad={skip.allowed_on_road}
                heavyWaste={skip.allows_heavy_waste}
                index={index}
              />
            );
          })}
        </motion.div>
        {selectedId && (
          <motion.div
            className="text-center mt-12 sm:mt-14"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <button
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-offset-2 transition-all relative overflow-hidden"
              aria-label="Proceed with selected skip"
              onClick={() => {
                console.log('Proceeding with skip ID:', selectedId);
              }}
            >
              <span className="relative z-10">Continue to Checkout</span>
              <motion.span
                className="absolute inset-0 bg-white/20 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 2 }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
              />
            </button>
          </motion.div>
        )}
      </main>
    </div>
  );
}

export default App;