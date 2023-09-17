import { Title } from "./title";
import { features } from "./features";

export const ScrollTabChangeAnimation = () => {
  return (
    <section className="bg-darker-grey border-b-[1px] border-primary-grey">
      <div className="flex items-start gap-14 lg:w-[60%] w-[90%] mx-auto">
        <div className="w-full py-[50vh]">
          <ul>
            {
              features.map((feature) => (
                <li key={feature.id}>
                  <Title id={feature.id}>{feature.title}</Title>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="w-full h-screen sticky top-0 flex items-center">
          <div className="w-full relative rounded-xl aspect-square bg-lighter-grey">
            {
              features.map((feature) => (
                <feature.card key={feature.id} id={feature.id} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
