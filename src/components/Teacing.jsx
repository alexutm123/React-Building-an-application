import WayToTeach from './WayToTeach'
import { ways } from '../data'

export default function TeachingSection() {
  return (
    <section>
      <h3 className='text-center'>Наш подход к обучению</h3>

      <ul className='d-flex flex-column gap-3'>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way} />
        ))}
      </ul>
    </section>
  )
}
