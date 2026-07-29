// Fix for Next.js Image type conflict with @types/react
import type { JSX } from 'react'
declare global {
  namespace JSX {
    interface IntrinsicElements extends JSX.IntrinsicElements {}
  }
}
