import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { imgSrc } from "@/lib/img";

export const metadata: Metadata = {
  title: "Biography",
  description: "The life of Everett DuPen (1912–2005) — sculptor, teacher, and Fellow of the National Sculpture Society.",
};

const TIMELINE = [
  { year: "1912", h: "Born in Chico, California", p: "To George Everett DuPen, a jeweler, and Henrietta \u201cEtta\u201d Fidelia Freeman DuPen, an opera singer. At age three, he attended the 1915 Panama\u2013Pacific International Exposition in San Francisco and became so captivated by the statues that he wandered off on his own." },
  { year: "1918", h: "A childhood illness shapes the artist", p: "Before his sixth birthday, Everett developed tetany, a serious condition causing involuntary muscle contractions. The local press followed his recovery. During his convalescence, he began carving figurative creations with a jackknife, encouraged by his parents." },
  { year: "1925", h: "\u201cThe Genius Among Us\u201d", p: "At thirteen, a nationally syndicated article showcased his small sculptures in wood and soap, bringing him his first public attention." },
  { year: "1928", h: "Art teacher Susan H. Burgess", p: "After his parents divorced when he was sixteen, his art teacher at Le Conte Junior High became a guiding influence\u2014providing tools, art history books, and building his self-confidence. Along with his mother, Burgess became part of his core support system." },
  { year: "1931\u201337", h: "USC, Harvard, and Yale", p: "He studied sculpture and architecture at USC under Robert Merrell Gage and Glen Lukens, then attended Harvard\u2019s School of Architecture and the Yale School of Fine Art, earning a BFA in Sculpture in 1937. His Yale instructors included George Eberhard, a prot\u00e9g\u00e9 of Auguste Rodin, and George Snowden, Eberhard\u2019s student\u2014giving DuPen a direct pedagogic line to the great French sculptor. Rodin had bequeathed his sculpting tools to Eberhard, who passed them to Snowden." },
  { year: "1935\u201336", h: "Tiffany Foundation and Prix de Rome", p: "He won the Louis Comfort Tiffany Foundation Award twice, working at Laurelton Hall in Oyster Bay, Long Island. His professor Robert Merrell Gage wrote that he was \u201cthe most talented student that I have ever had under me.\u201d His eight-foot plaster The Eternal Struggle won the Alice Kimball English Traveling Fellowship." },
  { year: "1937\u201338", h: "American Academy in Rome", p: "Arriving first in Paris, he studied French architecture and the sculptures of Rodin and Bourdelle before continuing to Rome. The Ludovisi Acrolith\u2014a Greek masterpiece from circa 480\u2013470 BCE\u2014became a profound influence. The works he created in Rome were left behind and are presumed destroyed." },
  { year: "1938\u201339", h: "New York and the World\u2019s Fair", p: "He returned to work as studio assistant to his Yale professors George Snowden and Joseph Renier, creating architectural sculptures for the 1939 New York World\u2019s Fair." },
  { year: "1939", h: "Marries Charlotte Nicks", p: "Charlotte Canada Nicks, originally from Beaumont, Texas, had pursued dance in Missouri, Chicago, and New York, where she joined the corps de ballet of the Metropolitan Opera. She was also a figure model at Yale\u2019s School of Fine Art. They married on July 1, 1939, and would remain together for sixty-six years." },
  { year: "1939\u201342", h: "St. Louis: teaching and mortuary science", p: "He joined Washington University as an assistant instructor in the School of Art and also taught restorative arts in the university\u2019s College of Mortuary Science. Unable to afford bronze casting, he developed a convincing faux patina technique over plaster." },
  { year: "1942\u201345", h: "Wartime work in Sausalito", p: "He became a marine draftsman and loftsman at the Sausalito Shipbuilding Corporation in California." },
  { year: "1945", h: "University of Washington", p: "He moved with Charlotte and their four children to Seattle, joining the UW as an instructor. Over the next thirty-eight years, he rose from instructor to full professor, building the Sculpture Division into a nationally recognized program. He was equally celebrated for his life-drawing classes." },
  { year: "1949", h: "Photographed by Soichi Sunami", p: "His Mother & Child was exhibited at the National Academy of Design\u2019s 123rd Annual Exhibition and photographed by Soichi Sunami, chief photographer for the Museum of Modern Art\u2014a sign of DuPen\u2019s growing stature in the New York art world." },
  { year: "1952\u201353", h: "Solo exhibition at the Seattle Art Museum", p: "Twenty-six of his sculptures were shown alongside works from the museum\u2019s American sculpture collection. The critically acclaimed show led to the commission for Northwest Fishermen, a walnut masterwork depicting two Native American fishermen that took six months to complete." },
  { year: "1954", h: "Saltus Medal of Merit", p: "He won the coveted Saltus Medal at the National Academy of Design\u2019s 129th Annual Exhibition for Growing Up, in which his son Stuart served as model." },
  { year: "1958", h: "Art: USA: 58 at Madison Square Garden", p: "DuPen was represented alongside Milton Avery, Will Barnet, Isabel Bishop, Adolph Gottlieb, Alice Neel, and William Zorach in this major national survey of American art." },
  { year: "1959", h: "Washington State Library fountain", p: "Commissioned by architect Paul Thiry, the fountain features four seagulls soaring over waves on a cantilevered base, flanked by two leaping salmon\u2014all in cast bronze on a thirty-two-foot basin." },
  { year: "1962", h: "Fountain of Creation", p: "Again commissioned by Paul Thiry for the Century 21 Exposition (the Seattle World\u2019s Fair), DuPen created four plaster models for a bronze fountain depicting the evolution of man. Installed near the Coliseum on April 21, 1962, it remained after the fair and has become one of Seattle\u2019s most beloved landmarks." },
  { year: "1963", h: "Fellow of the National Sculpture Society", p: "Elected in recognition of his distinguished career. That same year he carved two walnut screens for the Seattle Municipal Building; when the building was razed in 2003, the screens survived and are now in the Seattle Municipal Tower." },
  { year: "1966", h: "International recognition", p: "Included in the Governor\u2019s Invitational Art Exhibition at the State Capitol Museum in Olympia, which traveled to Kobe, Japan." },
  { year: "1970", h: "Frye Art Museum solo exhibition", p: "Fifty-one works in wood and bronze from the previous five years alone\u2014evidence of his prolific output at age fifty-eight." },
  { year: "1971", h: "Upheaval", p: "Inspired by his observation of student activists protesting the Vietnam War on the UW campus, DuPen created a rare political work\u2014a figure raising a fist in solidarity, departing from the mythical and classical subjects he typically favored." },
  { year: "1979", h: "National Academician", p: "Elected a full National Academician at the National Academy of Design, which added one of his Falling Man sculptures to its permanent collection." },
  { year: "1982", h: "Professor Emeritus", p: "He became professor emeritus and chairman of the UW\u2019s Sculpture Division. In retirement, he continued to teach evening drawing classes and mentored the Northwest Stone Sculptors Association." },
  { year: "1990", h: "Final ecclesiastical work", p: "His Mary & Mary Magdalene, a five-foot sculpture for the Monastery of the Visitation in Federal Way, was one of his last public commissions. The monastery closed in 1993 and its contents were auctioned; the sculpture\u2019s current location is unknown." },
  { year: "1994", h: "Final retrospective at the Frye", p: "The museum that had hosted his 1970 show gave him a career retrospective. He was celebrated by his many former students, many of whom had become recognized artists. Before the exhibition, he discovered a portfolio of his 1937 Yale figure drawings in his attic. In his final years, he was also able to cast several early works in bronze that he had been unable to afford during the Depression." },
  { year: "2005", h: "An elder of the craft", p: "He died at ninety-two\u2014husband of sixty-five years to Charlotte, father of six, grandfather of eleven, great-grandfather of six." },
  { year: "2025", h: "Fountain refurbished", p: "The city refurbished the Fountain of Creation with the input of the DuPen family. The fountain remains one of Seattle\u2019s finest public landmarks." },
];

export default function BiographyPage() {
  return (
    <section className="sec page-top">
      <div className="wrap">
        <div className="sec-head">
          <h1>Biography</h1>
          <span className="count">1912 — 2005</span>
        </div>

        <div className="life-grid">
          <Reveal as="figure" className="life-portrait">
            <div className="frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgSrc("images/dupen-closeup.jpg", 820)} alt="Portrait of Everett DuPen" />
            </div>
            <figcaption>Everett DuPen</figcaption>
          </Reveal>

          <div>
            <div className="prose" style={{ marginBottom: "clamp(2rem,5vw,3.2rem)" }}>
              <p>
                Everett George DuPen was born in Chico, California, on June 12, 1912, to George
                Everett DuPen, a jeweler, and Henrietta &ldquo;Etta&rdquo; Fidelia Freeman DuPen, an opera
                singer. At age three, he attended the Panama&ndash;Pacific International Exposition in
                San Francisco and became so entranced by the statues in a pavilion that he
                wandered off on his own until his mother found him. Whether family lore or truth,
                the story captures a fascination with sculptural form that would define his life.
              </p>
              <p>
                A serious childhood illness kept him bedridden for years, during which he began
                carving small figurative pieces with a jackknife. By thirteen he was the subject
                of a nationally syndicated article praising his talent. After his parents divorced
                when he was sixteen, his art teacher Susan H. Burgess became a guiding
                influence&mdash;providing tools, art history books, and the confidence to pursue his gift.
              </p>
              <p>
                DuPen studied sculpture and architecture at USC, Harvard, and the Yale School of
                Fine Art, where he earned his BFA in 1937. At Yale his instructors included George
                Eberhard, a prot&eacute;g&eacute; of Auguste Rodin, and George Snowden,
                Eberhard&rsquo;s student&mdash;giving DuPen a direct pedagogic line to the great French
                sculptor. Rodin had bequeathed his sculpting tools to Eberhard, who in turn passed
                them to Snowden. DuPen won the Louis Comfort Tiffany Foundation Award twice and
                the Alice Kimball English Traveling Fellowship, which took him to Paris and then to
                the American Academy in Rome, where the Greek and Roman masters left a lasting
                imprint on his figurative style.
              </p>
              <p>
                He met Charlotte Canada Nicks&mdash;a dancer from Beaumont, Texas, who had performed
                with the corps de ballet of the Metropolitan Opera&mdash;while she modeled at Yale.
                They married on July 1, 1939, and would remain together for sixty-six years.
                Charlotte became his model, his muse, and his protector, as well as the mother
                of their six children.
              </p>
              <p>
                After teaching stints in St. Louis and wartime work at the Sausalito shipyards,
                DuPen joined the University of Washington in 1945. Over thirty-eight years he rose
                from instructor to full professor and chairman of the Sculpture Division, building
                it into a nationally recognized program. He was equally celebrated for his
                life-drawing classes and for mentoring generations of Northwest artists.
              </p>
              <p>
                His public commissions are woven into the landscape of the Pacific Northwest: the
                Fountain of Creation at the Seattle Center, created for the 1962 World&rsquo;s Fair;
                the seagull-and-salmon fountain at the Washington State Library in Olympia; carved
                walnut screens for Seattle City Hall; the bronze of Charles Odegaard at the UW;
                and ecclesiastical works in churches from Tacoma to Longview. He exhibited
                nationally&mdash;from the Pennsylvania Academy of Fine Arts and the National Academy
                of Design to a 1958 survey at Madison Square Garden alongside Milton Avery,
                Alice Neel, and William Zorach.
              </p>
              <p>
                DuPen was elected a Fellow of the National Sculpture Society in 1963 and a full
                National Academician in 1979. In 1994, Seattle&rsquo;s Frye Art Museum gave him a
                career retrospective, where he was celebrated by his many former students. In his
                final years, he was able to cast in bronze several early works that he had been
                unable to afford during the Depression. He died in May 2005 at ninety-two.
              </p>
            </div>

            <h2 style={{ fontFamily: "var(--f-display)", fontSize: "1.5rem", margin: "0 0 1.5rem" }}>Timeline</h2>
            <div className="timeline">
              {TIMELINE.map((t) => (
                <Reveal key={t.year + t.h} className="tl-item">
                  <div className="tl-year">{t.year}</div>
                  <h3>{t.h}</h3>
                  <p>{t.p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Pull quotes */}
        <Reveal className="bio-quotes">
          <blockquote className="bio-quote">
            <p>&ldquo;A sculptor cannot create a new form since all possible variations of basic forms are found in nature, but he can combine these forms into a new and exciting expression.&rdquo;</p>
            <cite>— Everett DuPen</cite>
          </blockquote>
          <blockquote className="bio-quote">
            <p>&ldquo;The only thing that matters is love.&rdquo;</p>
            <cite>— Everett DuPen, his final words to his children, May 2005</cite>
          </blockquote>
          <p className="bio-quotes-source">
            Biography drawn from David F. Martin, <em>Eternal Forms: The Sculpture of Everett DuPen</em> (Cascadia Art Museum, 2026) and{" "}
            <a href="/profiles-dupen-2012.pdf" target="_blank" rel="noopener">
              <em>Profiles: Everett DuPen and His Legacy</em>
            </a>
            , National Sculpture Society, 2012.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
