import Layout from "../components/Layout";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Layout>
      <figure className="relative bg-black mt-[73px]">
        <img
          className="rounded-lg brightness-50"
          src="https://new-media.dhakatribune.com/en/uploads/2022/12/19/image003-2.jpeg"
          alt="image description"
        />
        <figcaption className="absolute px-4 text-lg text-white bottom-6 font-montserrat brightness-[.9]">
          <p className="tracking-widest">Avatar</p>
          <div className="leading-5 text-sm">
            <p>James Cameron</p>
            <p>The way of the water</p>
            <p className="brightness-50">Fantasy 16+</p>
          </div>
        </figcaption>
      </figure>

      <section className="mt-10">
        <Slider/>
      </section>
    </Layout>
  );
}
