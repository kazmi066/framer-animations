import { Reveal } from "@/components/reveal";

export const TextRevealAnimation = () => {
  return (
    <section className="bg-darker-grey h-screen border-b-[1px] border-primary-grey">
      <div className="flex flex-col text-lighter-grey items-start justify-center w-[60%] h-full mx-auto">
        <div>
          <Reveal>
            <h1 className="w-full">Hi! I am Awais</h1>
          </Reveal>
          <Reveal>
            <h3 className="pt-2 pb-4">Frontend Developer | UX Specialist</h3>
          </Reveal>
          <Reveal>
            <p>
              I'm all about the frontend stack, rocking React, Next.js, and Typescript.
              I'm diving into React Native too, because who doesn't want to conquer the world
              of mobile apps? But that's not all—I've also got some backend skills under my belt,
              including Node.js, Express, and GraphQL. I'm a well-rounded developer who knows how
              to handle the whole shebang.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
