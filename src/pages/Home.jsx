import { Layout } from '../components/layout/components';
import { Cinemas } from '../components/cinemas/component';
import { cinemas } from '../data';
import Hero from '../components/Hero';
export default function Home() {
  return (
    <Layout>
      <Hero/>
      <Cinemas cinemas={cinemas} />
    </Layout>
  );
}