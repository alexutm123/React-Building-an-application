import { Layout } from '../components/layout/components';
import  MyBarChart  from '../components/shop/MyBarChart';
import { cinemas } from '../data';
import Hero from '../components/Hero';
import TestHuc from '../components/TestHuc';
export default function Home() {
  return (
    <Layout>
      <Hero/>
      {/* <Cinemas cinemas={cinemas} /> */}
      <TestHuc/>
    </Layout>
  );
}