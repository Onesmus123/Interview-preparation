import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

interface SkipCardProps {
  id: number;
  size: number;
  hirePeriod: number;
  price: number;
  selected: boolean;
  onSelect: () => void;
  onRoad: boolean;
  heavyWaste: boolean;
  index: number;
}

export const SkipCard: React.FC<SkipCardProps> = ({
  id,
  size,
  hirePeriod,
  price,
  selected,
  onSelect,
  onRoad,
  heavyWaste,
  index,
}) => {
  return (
    <motion.div
  className="m-3 outline outline-1 outline-blue-500"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={300}>
        <div
          className={`relative rounded-3xl p-5 sm:p-6 bg-white/80 backdrop-blur-md border-2 transition-all duration-300 ${
            selected
              ? 'border-teal-500 bg-gradient-to-br from-teal-50 to-lime-50 shadow-2xl'
              : 'border-gray-100 hover:shadow-lg'
          } cursor-pointer overflow-hidden`}
          onClick={onSelect}
          role="button"
          aria-label={`Select ${size} yard skip`}
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect()}
        >
          {selected && (
            <motion.div
              className="absolute top-2 right-2 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
          )}
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">{size} Yard Skip</h2>
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-semibold rounded-full">
                {size} YD
              </span>
            </div>
            <div className="space-y-3 mb-5">
              <p className="text-gray-600 text-sm flex items-center">
                <motion.span
                  className="w-5 h-5 mr-2 flex items-center justify-center bg-teal-100 rounded-full text-teal-700 text-xs"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  📅
                </motion.span>
                Hire Period: {hirePeriod} days
              </p>
              <p className="text-gray-600 text-sm flex items-center">
                <motion.span
                  className="w-5 h-5 mr-2 flex items-center justify-center bg-teal-100 rounded-full text-teal-700 text-xs"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🚛
                </motion.span>
                On Road: {onRoad ? 'Yes' : 'No'}
              </p>
              <p className="text-gray-600 text-sm flex items-center">
                <motion.span
                  className="w-5 h-5 mr-2 flex items-center justify-center bg-teal-100 rounded-full text-teal-700 text-xs"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🏋️
                </motion.span>
                Heavy Waste: {heavyWaste ? 'Yes' : 'No'}
              </p>
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-lime-600 mb-5">£{price}</div>
            <button
              className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                selected
                  ? 'bg-gradient-to-r from-teal-600 to-lime-600 text-white hover:from-teal-700 hover:to-lime-700'
                  : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
              } focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2`}
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
              aria-pressed={selected}
            >
              {selected ? 'Selected' : 'Choose This Skip'}
            </button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};