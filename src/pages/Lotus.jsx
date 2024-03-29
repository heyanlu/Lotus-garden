import Carousel from "../components/Carousel";
import "./Lotus.css";

function Lotus() {
  const data = [
    {
      imageFile: "photo-1544165118-ed65c4473a1b.avif",
      alt: "Closed up pink lotus bathed in golden sunlight",
    },
    {
      imageFile: "photo-1538458223244-8d3d32de1ff9.avif",
      alt: "beautiful pink lotus fully blossomed with yellow core",
    },
    {
      imageFile: "photo-1590421107000-113c264eee9a.avif",
      alt: "White lily quietly lying in water with complete reflection",
    },
    {
      imageFile: "photo-1618909370340-5a664d66777c.avif",
      alt: "Blossomed white lily having a golden hue under the sun",
    },
  ];

  return (
    <>
      <Carousel data={data} />
      <div className="text">
        <p className="attractions-text">
          The Lotus Garden is renowned for its diverse array of lotus varieties,
          offering a captivating showcase of nature's beauty. From the regal
          'Queen of the Night' to the fiery 'Fireball' and the sacred blue
          lotus, each bloom contributes to a vibrant tapestry of colors and
          symbolism. Immerse yourself in this botanical haven, where the
          enchanting 'Midnight Serenade' and graceful 'Pink Peony' lotuses add a
          touch of mystique and elegance to the serene landscape.
        </p>

        <p className="attractions-text">
          <strong>1. The Regal 'Queen of the Night' Lotus</strong>
          <br />
          At the heart of the Lotus Garden, the 'Queen of the Night' lotus
          reigns supreme with its understated elegance and ethereal charm. Named
          for its tendency to bloom in the evening, this lotus variety boasts
          delicate petals that unfurl to reveal a pristine, creamy white
          interior. The flowers exude a subtle fragrance that intensifies as
          dusk settles in, creating a captivating experience for those fortunate
          enough to witness its nightly display. The 'Queen of the Night' lotus
          stands as a symbol of purity and serenity, inviting visitors to bask
          in the tranquil beauty that unfolds under the moonlit sky.
        </p>
        <p className="attractions-text">
          <strong>2. The Fiery 'Fireball' Lotus</strong>
          <br />
          For those who crave bold and vibrant displays, the 'Fireball' lotus
          takes center stage in the Lotus Garden. With its striking crimson hue
          and dynamic presence, the 'Fireball' lotus commands attention and
          ignites the senses. This variety represents passion and vitality, as
          its radiant color mirrors the intensity of a blazing fire. Whether
          seen from a distance or up close, the 'Fireball' lotus leaves an
          indelible impression, making it a favorite among visitors seeking the
          fiery allure of nature's botanical masterpiece.
        </p>
        <p className="attractions-text">
          <strong>3. The Sacred Blue Lotus</strong>
          <br />
          Steeped in cultural and spiritual significance, the sacred blue lotus
          graces the tranquil ponds of the Lotus Garden, offering a profound and
          contemplative experience. Known for its historical use in ancient
          civilizations for rituals and ceremonies, the blue lotus symbolizes
          purity, wisdom, and enlightenment. As the sun kisses the petals,
          casting a gentle blue glow across the water, visitors can't help but
          feel a connection to the profound symbolism that has surrounded this
          lotus variety for centuries.
        </p>
        <p className="attractions-text">
          <strong>4. The Enigmatic 'Midnight Serenade' Lotus</strong>
          <br />A mysterious and captivating variety, the 'Midnight Serenade'
          lotus unfolds its petals in the darkness, creating an otherworldly
          ambiance within the garden. Its deep, velvety purple hue adds an
          element of mystique, evoking a sense of enchantment and allure. As
          night descends, the 'Midnight Serenade' lotus casts a bewitching
          spell, drawing admirers into its captivating embrace. This nocturnal
          beauty invites contemplation and introspection, making it a must-see
          for those seeking a unique and enchanting botanical experience.
        </p>
        <p className="attractions-text">
          <strong>5. The Graceful 'Pink Peony' Lotus</strong>
          <br />
          Adding a touch of femininity and grace to the Lotus Garden, the 'Pink
          Peony' lotus unfolds its layers of delicate petals in a fashion
          reminiscent of its namesake flower. With a soft, rosy hue and a
          captivating fragrance, this lotus variety embodies beauty and
          elegance. The 'Pink Peony' lotus creates a visual poetry as it floats
          gracefully on the water's surface, a harmonious dance of color and
          form. Visitors are invited to linger and appreciate the timeless charm
          of this floral gem, as it embodies the epitome of nature's artistry
          and grace.
        </p>
      </div>
    </>
  );
}

export default Lotus;
