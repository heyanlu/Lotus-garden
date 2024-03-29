import Header from "../components/Header";
import Footer from "../components/Footer";

import "./About.css";

function About({ setPage, onThemeToggle, isDarkMode }) {
  return (
    <div>
      <Header
        setPage={setPage}
        onThemeToggle={onThemeToggle}
        isDarkMode={isDarkMode}
      />
      <main id="main">
        <div className="main-wrapper">
          <div className="container-1">
            <div className="image-container">
              <img
                className="article-image"
                id="image1"
                src="/DSCF1340.jpg"
                alt=""
              />
            </div>
            <p className="about-text">
              Nestled in the heart of Hangzhou, the{" "}
              <strong>Lotus Garden</strong> (曲院风荷, Qū Yuàn Fēng Hé), also
              known as the Quyuan Fenghe, is a distinguished garden that beckons
              visitors into a realm of tranquility and natural splendor.
              Renowned for its breathtaking collection of lotus blossoms, this
              horticultural haven stands as a testament to the ancient Chinese
              art of garden design, where the interplay of natural elements and
              human ingenuity creates a harmonious sanctuary.
            </p>
            <p className="about-text">
              The garden's layout is a manifestation of ancient wisdom, a poetic
              dance between human ingenuity and the inherent beauty of the
              natural world. Each step taken within this oasis is a step into a
              realm where time seems to slow down, and the stresses of the
              outside world dissipate. The carefully orchestrated arrangement of
              elements invites contemplation, encouraging visitors to immerse
              themselves in the soothing embrace of nature's symphony.
            </p>
            <p className="about-text">
              At the heart of the <strong>Lotus Garden</strong>, the pièce de
              résistance emerges in the form of expansive lotus ponds. These
              serene bodies of water serve as a canvas for the dance of vibrant
              lotus flowers, painting the scene with hues that range from
              delicate pinks to pure, serene whites. Each lotus blossom, a
              living masterpiece, adds a stroke to the canvas of the garden,
              contributing to an ever-evolving tapestry of colors and shapes.
            </p>
            <p className="about-text">
              The garden curators have taken great care in selecting and
              cultivating a diverse array of lotus varieties, showcasing the
              rich biodiversity of these iconic blooms. Each lotus, with its own
              unique charm and significance, tells a story that resonates with
              the ancient symbolism associated with these revered flowers.
              Visitors find themselves immersed in a living encyclopedia of
              cultural heritage, as the Lotus Garden becomes a sanctuary not
              only for nature lovers but also for those seeking a deeper
              connection with the profound traditions that have shaped the
              garden's existence.
            </p>
          </div>

          <hr />

          <div className="container-2">
            <img
              className="article-image"
              id="image2"
              src="/DSCF9280.jpg"
              alt=""
            />
            <p className="about-text">
              During the peak lotus season, the <strong>Lotus Garden</strong>{" "}
              transforms into a kaleidoscope of colors and fragrances. The
              mesmerizing sight of lotus petals unfurling in the gentle breeze
              captures the essence of beauty in impermanence—a concept deeply
              rooted in Chinese philosophy. Visitors can meander along the
              meandering pathways, pausing to admire the delicate dance of
              dragonflies and the symphony of rustling leaves overhead. The
              poetic ambiance of the <strong>Lotus Garden</strong> invites
              contemplation and reflection, offering a respite from the
              fast-paced rhythms of modern life.
            </p>
            <p className="about-text">
              Beyond its aesthetic allure, the <strong>Lotus Garden</strong>{" "}
              holds historical and cultural significance. The garden's name
              itself pays homage to the legendary poet Qu Yuan, a figure
              associated with patriotism and literary excellence in ancient
              China. This infusion of cultural elements adds depth to the
              visitor's experience, allowing them to connect with the past while
              immersed in the beauty of the present.
            </p>
            <p className="about-text">
              The <strong>Lotus Garden</strong> stands as a testament to the
              timeless allure of Chinese garden design and the captivating
              beauty of lotus blooms. Whether strolling along its meticulously
              landscaped pathways or pausing to appreciate the intricate details
              of a blooming lotus, visitors to this enchanting garden are
              treated to an immersive experience that transcends the boundaries
              of time and cultivates a profound connection with nature.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
