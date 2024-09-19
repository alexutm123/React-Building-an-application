import { Layout } from '../components/layout/components';
import { cinemas } from '../data';
import Hero from '../components/Hero';
import TestHuc from '../components/TestHuc';
import UseMemoTest from '../components/UseMemoTest';

export default function Home() {
  return (
    <Layout>
      <Hero/>
      {/* <Cinemas cinemas={cinemas} /> */}
      <TestHuc/>
      <UseMemoTest/>
    </Layout>
  );
}