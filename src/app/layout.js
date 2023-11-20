"use client"


import { Inter } from 'next/font/google'
import './globals.css'
import AnimatedCursor from "react-animated-cursor"
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="animate">
          <AnimatedCursor 
            innerSize={10}
            outerSize={10}
            color='8, 2, 163'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
              'a',
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              'label[for]',
              'select',
              'textarea',
              'button',
              '.link',
              {
                target: '.custom',
                options: {
                  innerSize: 12,
                  outerSize: 12,
                  color: '8, 2, 163',
                  outerAlpha: 0.3,
                  innerScale: 0.7,
                  outerScale: 5
                }
              }
            ]}
          />
          <ProgressBar
          height="4px"
          color="#fffd00"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </div>
      
      </body>
    </html>
  )
}
