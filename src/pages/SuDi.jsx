import Carousel from "../components/Carousel";

function SuDi() {
  const data = [
    {
      imageFile: "DSCF1286.jpg",
      alt: "Foreground lotus, some boats carrying tourists and Su Di Causeway in the background",
    },
    {
      imageFile: "DSCF1372.jpg",
      alt: "View from one side of Su Di to another, and further lake with lotus, and further moutains",
    },
    {
      imageFile: "DSCF1364.jpg",
      alt: "Splendid open waters covered with lotus. Some boats rowing. On background a veranda lying amid trees.",
    },
    {
      imageFile: "DSCF1369.jpg",
      alt: "People taking a casual walk on Su Di Causeway under lush trees. Waters on both sides.",
    },
  ];

  return (
    <>
      <div className="">
        <Carousel data={data} />
      </div>

      <div>
        <p>
          Su Causeway, an emblematic feature of Hangzhou's West Lake, weaves a
          story that intertwines nature, poetry, and history. The origins of the
          causeway trace back to the ambitious endeavors of Emperor Yang of the
          Sui Dynasty, who initiated its construction. However, it was during
          the Northern Song Dynasty that Su Causeway truly flourished under the
          care and dedication of Su Shi. Su Shi's tenure as the governor of
          Hangzhou provided him with the opportunity to infuse his love for the
          arts and nature into the landscape, turning the causeway into a living
          testament to his cultural legacy.
        </p>

        <p>
          Su Shi, or Su Dongpo, was not merely a bureaucratic figure; he was a
          polymath whose contributions spanned literature, calligraphy, and
          landscape design. His involvement in the development of Su Causeway
          wasn't merely a matter of aesthetics; it was a poetic expression of
          his profound connection with the West Lake's beauty. Su Shi's literary
          prowess and appreciation for nature are encapsulated in the lush
          surroundings of the causeway, where visitors can still experience the
          serenity and inspiration that fueled his creativity.
        </p>

        <p>
          Ranked first among the "Ten Scenes of the West Lake," Su Causeway
          encapsulates the quintessential allure of Hangzhou's natural
          landscape. Its poetic charm lies in the weeping willows that
          gracefully drape over the waters, creating an idyllic scene that has
          inspired countless poets, artists, and thinkers over the centuries.
          The seasonal changes along the causeway add to its dynamic appeal,
          with cherry blossoms painting a delicate canvas in spring and
          fiery-hued leaves creating a picturesque autumnal spectacle.
        </p>

        <p>
          Wandering along Su Causeway, visitors are enveloped in a tranquil
          ambiance that transcends time. Traditional Chinese pavilions and
          bridges dot the causeway, providing vantage points for admiring the
          scenic beauty. The causeway isn't merely a physical connection across
          the lake; it serves as a bridge between the tangible and the
          intangible, linking the past and the present through its historical
          roots and timeless aesthetics.
        </p>

        <p>
          In modern times, Su Causeway remains a haven for locals and tourists
          seeking respite from the bustling city life. Its cultural
          significance, coupled with the breathtaking scenery, makes it a
          must-visit destination for those exploring the rich tapestry of
          Hangzhou. Su Causeway stands as a living testament to the harmonious
          relationship between man and nature, a legacy that continues to
          enchant and inspire generations.
        </p>
      </div>
    </>
  );
}

export default SuDi;
