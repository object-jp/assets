import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Nav />
      <h2>Welcome</h2>

      <p>Welcome to our fake birdwatching site. If this were a real site, it would be the ideal place to come to learn more about birdwatching, whether you are a beginner looking to learn how to get into birding, or an expert wanting to share ideas, tips, and photos with other like-minded people.</p>

      <p>So don't waste time! Get what you need, then turn off that computer and get out into the great outdoors!</p>

      <h2>Favourite photos</h2>

      <a href="./public/favorite-1.jpg"><img src="./public/favorite-1_th.jpg" alt="Small black bird, black claws, long black slender beak, links to larger version of the image" /></a>
      <a href="./public/favorite-2.jpg"><img src="./public/favorite-2_th.jpg" alt="Top half of a pretty bird with bright blue plumage on neck, light colored beak, blue headdress, links to larger version of the image" /></a>
      <a href="./public/favorite-3.jpg"><img src="./public/favorite-3_th.jpg" alt="Top half of a large bird with white plumage, very long curved narrow light colored break, links to larger version of the image" /></a>
      <a href="./public/favorite-4.jpg"><img src="./public/favorite-4_th.jpg" alt="Large bird, mostly white plumage with black plumage on back and rear, long straight white beak, links to larger version of the image" /></a>
      <Footer />
    </div>
  );
}