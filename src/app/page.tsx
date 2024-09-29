import { Header } from '../components/header';
import { About} from '../components/about'
import Image from "next/image";
import Footer from '../components/footer';

export default function Home() {
  return (
    <div >
      <Header />
      <h1 className='home'>Welcome to Next.js!</h1>
      <p className='per'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, commodi? Modi, cupiditate unde non, incidunt quas, quis dolorem labore dignissimos nemo odit reiciendis veritatis obcaecati sit neque expedita aperiam aut.
      Ut necessitatibus aspernatur itaque vitae aliquid reprehenderit dolore eveniet saepe fugit corporis nesciunt rem deleniti officiis ipsa dolor, rerum corrupti error dolorum voluptatem. Doloremque ullam culpa, fugit ipsa eveniet voluptas.
      Voluptatum, ipsum perspiciatis commodi voluptas expedita atque. Aspernatur dolor veniam dolore accusantium expedita sit fugiat, eius impedit ipsa suscipit aperiam pariatur maxime praesentium ipsum! Error quam esse alias eius dolores?</p>
      <About />
      <Footer />
    </div>
  );
}
