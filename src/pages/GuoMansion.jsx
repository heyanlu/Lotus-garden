import Carousel from "../components/Carousel";
import "./GuoMansion.css";

function GuoMansion() {
  const data = [
    {
      imageFile: "DSCF1280.jpg",
      alt: "Chinese style house across a pond covered with lotus",
    },
    {
      imageFile: "DSCF1296.jpg",
      alt: "A pavilion on top of artificial rocks hiden in trees",
    },
    {
      imageFile: "DSCF1303.jpg",
      alt: "Causeway built on open waters leading to the gate of Guo Mansion",
    },
    {
      imageFile: "DSCF1305.jpg",
      alt: "Causeway on waters. Waters are coverd with lotus and lilies",
    },
  ];

  return (
    <>
      <div className="guo-mansion-container">
        <Carousel data={data} />

        <div>
          <blockquote>
            <p>
              Su Causeway winds like a flowing ribbon, <br />
              Small pavilions by the water reflect emptiness. <br />
              It seems as if the melody has ended, and people are nowhere to be
              seen, <br />
              Leisurely, the willow silk flutters after the railing.
            </p>
          </blockquote>

          <p>—Chen Congzhou, "Leisurely Gazing at Guozhuang by West Lake"</p>

          <p>
            Guozhuang is located at 28 Yanggongdi, Xihu District, Hangzhou City,
            Zhejiang Province, China (formerly No. 8 East of Wolong Bridge on
            Xishan Road), adjacent to the Quyuan Fenghe Park. It is a
            representative classical garden in Hangzhou, and although not
            extensive in size, it is intricately arranged with clever
            structures. The garden features typical Jiangnan-style rockeries and
            pavilions.
          </p>

          <p>
            The garden was initially constructed during the Xianfeng period of
            the Qing Dynasty by Song Duanfu, a silk merchant in Hangzhou.
            Originally named Duanyou Villa, it was commonly known as Songzhuang.
            After changing hands several times, it was eventually sold to Guo
            Shilin from Fenyang during the Republican era, leading to its
            renaming as Fenyang Villa, commonly known as Guozhuang. It was
            opened to the public after undergoing renovations from 1989 to 1991.
          </p>

          <p>
            The entire garden has a rectangular layout, covering an area of 9788
            square meters, with water occupying 29.3% of the space and
            connecting to West Lake. The total architectural area is 1629 square
            meters, divided into two parts: the residential area called Jing Bi
            Ju and the garden area called Yi Jing Tian Kai. The garden is
            further divided into the inner pool (Huan Chi) on the south side and
            the outer pool (Jing Chi) on the north side. These two pools are
            separated by the central Liang Yi Xuan pavilion facing the lakeside.
            The residential area is located on the east side of the inner pool
            and the south end.
          </p>

          <p>
            Due to its proximity to the West Lake on the east side, Guozhuang
            has structures along the lake, such as the Chengfeng Yaoyue
            Pavilion, Shangxin Yuemu Pavilion, and Jingsu Ge, among others.
            Jingsu Ge directly faces the Su Causeway, allowing visitors to enjoy
            the scenic beauty of West Lake from within the garden.
          </p>
        </div>
      </div>
    </>
  );
}

export default GuoMansion;
