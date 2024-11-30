// font.ts
import { Island_Moments } from 'next/font/google';

export const islandMoments = Island_Moments({
  weight: '400', // Island Moments only has a regular weight
  subsets: ['latin'], // Adjust subsets as needed
  display: 'swap', // This can help improve loading performance
});


// styles/font.ts
import { Istok_Web } from 'next/font/google';

export const istokWeb = Istok_Web({
  subsets: ['latin'],  // You can specify subsets here
  weight: ['400', '700'],  // Include specific font weights if needed
});

import { Poppins } from 'next/font/google';

// Configure the Poppins font with specific styles or weights
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Use the weights you need
  style: 'normal', // You can also add 'italic' if needed
  display: 'swap',
});



