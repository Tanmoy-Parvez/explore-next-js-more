import News from "../Components/News/News";
import Blog from "./blog";
import Header from "./header";

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Blog />
      <Header />
      <News/>
    </div>
  );
};

export default Home;