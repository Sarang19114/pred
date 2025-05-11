'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PricingCardProps {
  title: string;
  price: string | number;
  duration: string;
  features: string[];
  disabledStartIndex?: number;
  onAction?: () => void;
  tier?: 'Copper' | 'Silver' | 'Gold' | 'Diamond';
}

const tierStyles: Record<string, {
  border: string;
  background: string;
  text: string;
  priceGradient: string;
}> = {
  Copper: {
    border: 'border-[#b87333] dark:border-[#b87333]',
    background: 'bg-[#b87333]/10 dark:bg-[#b87333]/10',
    text: 'text-[#b87333] dark:text-[#b87333]',
    priceGradient: 'from-[#b87333] to-[#a65f2f]',
  },
  Silver: {
    border: 'border-gray-400 dark:border-gray-300',
    background: 'bg-gray-100 dark:bg-gray-800',
    text: 'text-gray-700 dark:text-gray-200',
    priceGradient: 'from-gray-400 to-gray-500',
  },
  Gold: {
    border: 'border-yellow-400 dark:border-yellow-300',
    background: 'bg-yellow-100 dark:bg-yellow-900',
    text: 'text-yellow-700 dark:text-yellow-300',
    priceGradient: 'from-yellow-400 to-yellow-600',
  },
  Diamond: {
    border: 'border-blue-400 dark:border-blue-300',
    background: 'bg-blue-100 dark:bg-blue-900',
    text: 'text-blue-700 dark:text-blue-300',
    priceGradient: 'from-blue-400 to-blue-600',
  },
};

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  duration,
  features,
  disabledStartIndex = features.length,
  onAction,
  tier = 'Silver',
}) => {
  const styles = tierStyles[tier];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className={`p-12 ${styles.background} ${styles.border} relative overflow-hidden group rounded-xl shadow-lg`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative text-center mb-8">
          <h3 className={`text-2xl font-bold mb-4 ${styles.text}`}>{title}</h3>
          <div className="mb-6">
            <span
              className={`text-6xl font-bold bg-gradient-to-b ${styles.priceGradient} bg-clip-text text-transparent`}
            >
              {price}
            </span>
            <span className={`ml-2 text-lg ${styles.text}`}>/{duration}</span>
          </div>
          <Button
            size="lg"
            variant="outline"
            className={`w-full h-14 text-lg ${styles.border} ${styles.text} hover:bg-opacity-80 transition-all duration-300`}
            onClick={onAction}
          >
            Get Started <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-5">
          {features.map((feature, index) => {
            const isDisabled = index >= disabledStartIndex;
            return (
              <div
                key={index}
                className={`flex items-center group/item ${
                  isDisabled
                    ? 'text-gray-400 line-through opacity-60'
                    : styles.text
                }`}
              >
                <CheckCircle
                  className={`h-5 w-5 mr-3 flex-shrink-0 transition-transform duration-300 ${
                    isDisabled
                      ? 'text-gray-400 opacity-60'
                      : `${styles.text} group-hover/item:scale-110`
                  }`}
                />
                <span>{feature}</span>
              </div>
            );
          })}
        </div>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
