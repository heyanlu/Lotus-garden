const publicTransportation = (
    <p>Buses 28/K28, 82/K82, 15/K15, 118, 27, 318, 51Loop, Y10</p>
);

const parking = (
    <p>
      Hangzhou is a bustling metropolitan area where parking is a scarce
      commodity across the entire city. It is strongly advised to utilize the
      efficient public transit system due to extremely limited parking options.
      Please be aware that there is a restricted amount of parking available at
      the north gate along Beishan Road and the South Gate along Yang Gong Di.
    </p>
);

const bikes = (
    <p>
      Embarking on a delightful and environmentally conscious journey to Lotus
      Park, opting to bike from downtown is highly recommended. For the
      convenience of visitors, the park provides accessible bike rental services
      in the vicinity at 10 RMB pour hour. However,
      it's crucial to observe that biking within the park premises and on the
      adjacent Sudi is strictly prohibited. Kindly adhere to these guidelines to
      uphold a harmonious experience for all visitors and preserve the
      tranquility of Lotus Park.
    </p>
);

export const directionsData = [
  {
    title: "Public Transportation",
    content: publicTransportation,
  },
  {
    title: "Parking",
    content: parking,
  },
  {
    title: "Public Shared Bikes",
    content: bikes,
  },
];
