import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
import NewsItem from "./Components/NewsItem";

export const App = () => {
  return (
    <div>
      <Navbar />
      <NewsBoard />
      <NewsItem />
    </div>
  )
}
export default App;