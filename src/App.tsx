import { MaskImageCursorAnimation } from '@/components/maskImageCursorAnimation';
import { HorizontalScrollAnimation } from '@/components/horizontalScrollAnimation';
import { TextRevealAnimation } from '@/components/textRevealAnimation';
import { ScrollTabChangeAnimation } from '@/components/scrollTabChangeAnimation';

function App() {
  return (
    <>
      <MaskImageCursorAnimation />
      <HorizontalScrollAnimation />
      <TextRevealAnimation />
      <ScrollTabChangeAnimation />
      <div className="flex h-screen items-center justify-center bg-darker-grey">
        <span className="font-semibold uppercase text-neutral-500">
          More Animations Coming Soon :)
        </span>
      </div>
    </>
  )
}

export default App
