import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const Home = () => {
  return (
    <div>
      <Head>
        <title>
          Next JS Project
        </title>
      </Head>
      <Header />
      <Banner/>
      <Footer/>
    </div>
  );
};

export default Home;