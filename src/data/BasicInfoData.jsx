const address = (
  <>
    <p>"89 Beishan Road Xihu District Hangzhou"</p>
  </>
);

const openingHours = (
  <>
    <p>
      The Lotus Garden (except Guo Mansion) is always open to the public 24
      hours.
    </p>
    <p>Guo Mansion is open from 8am to 5pm every day of the week.</p>
  </>
);

const fees = (
  <>
    <p>
      This site is fee-free year-round. No entrance fee or pass is required.
    </p>
    <p>Guo Zhuang has an admission fee of 20 RMB."</p>
  </>
);

const weather = (
  <>
    <p>
      Hangzhou, located in eastern China, also experiences distinct seasonal
      changes. The city has a humid subtropical climate, characterized by four
      distinct seasons. Spring (March - May) sees an average high temperature of
      around 18.6 degrees Celsius, with a low of approximately 8.1 degrees
      Celsius. As summer (June - August) arrives, temperatures rise, with an
      average high of about 30 degrees Celsius and a low of 20.3 degrees
      Celsius. Fall (September - November) brings milder temperatures, with an
      average high of 20 degrees Celsius and a low of 10.8 degrees Celsius.
      Winter (December - February) in Hangzhou is relatively cool, featuring an
      average high of 7.2 degrees Celsius and a low of -1.1 degrees Celsius. The
      city's climate is influenced by its proximity to the East China Sea,
      contributing to the noticeable impact of humidity on the perceived
      temperatures throughout the year.
    </p>
  </>
);

export const basicInfoData = [
  {
    title: "Physical Address",
    content: address,
  },
  {
    title: "Operating Hours & Seasons",
    content: openingHours,
  },
  {
    title: "Fees & Passes",
    content: fees,
  },
  {
    title: "Weather",
    content: weather,
  },
];
