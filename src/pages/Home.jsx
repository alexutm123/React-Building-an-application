import { Layout } from '../components/layout/components';
import { cinemas } from '../data';
import Hero from '../components/Hero';
import TestHuc from '../components/TestHuc';
import UseMemoTest from '../components/UseMemoTest';
import MyContext from '../components/MyContext';
import Event from '../components/Events';
export default function Home() {
  const contextValue = 1;

  return (
    <Layout>
      <Hero/>
      {/* <Cinemas cinemas={cinemas} /> */}
      <TestHuc/>
      <MyContext.Provider value={contextValue}>
        <UseMemoTest/>
    </MyContext.Provider>
    <Event/>
    </Layout>
  );
}