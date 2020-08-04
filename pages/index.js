import ImageBanner from "../components/home/imageBanner";
import Container from "./../components/layouts/container";
import TrumpetIcon from "./../components/icons/trumpet";
import DrumIcon from "./../components/icons/tambor";
import PoliticsFooter from "../components/footer/politics";

function Home() {
  return (
    <div className="text-lg font-medium">
      <ImageBanner />
      <Container className="mx-auto lg:w-4/5 w-full px-6">
        <section className="flex flex-col">
          <div className="flex flex-no-wrap items-center">
            <div className="w-2 bg-advise h-16 inline-block"></div>
            <h3 className="text-2xl inline-block ml-6 text-logo3 font-bold">
              ¿Qué hacemos?
            </h3>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 pt-10 text-justify row-gap-6">
            <p className="col-start-1 col-span-2">
              Da igual cómo las llames, ya sea charangas, xarangas o txarangas
              de música, si estás aquí es porque te interesa este grupo reducido
              de músicos y estás en el lugar adecuado.
            </p>
            <div className="col-start-1 col-span-2 flex flex-no-wrap items-center lg:ml-6 md:ml-4">
              <i className="w-1/5 mr-6">
                <TrumpetIcon height="100" width="100" fill="#970b7d" />
              </i>
              <p className="ml-6">
                Aunque este tipo de asociaciones musicales gozan de gran
                tradición en España pero su nombre depende de la zona en la que
                se haga referencia. Generalmente agrupaciones de músicos jóvenes
                que buscan ganar algún dinero extra.
              </p>
            </div>
          </div>
        </section>
      </Container>
      <section className="bg-lightgray mt-6">
        <Container className="mx-auto lg:w-4/5 w-full px-6 pt-6 pb-12">
          <div className="flex flex-col items-center justify-center text-justify">
            <h3 className="text-logo4 text-2xl italic font-semibold h1-font tracking-widest">
              ¿Que aportamos?
            </h3>
            <p>
              Somos de la comunidad valenciana, un lugar con una alta tradición
              y un alto nivel musical, destacamos por ser unos muy jóvenes
              músicos profesionales con gran capacidad de adaptación para
              cualquier tipo de acto y siempre dotándolo de gran calidad
              musical.
            </p>
          </div>
        </Container>
      </section>
      <Container className="mx-auto lg:w-4/5 w-full px-6">
        <section className="flex flex-col">
          <div className="grid lg:grid-cols-3 grid-cols-1 pt-10 text-justify row-gap-6">
            <div className="flex flex-no-wrap items-center lg:col-start-2">
              <div className="w-2 bg-icon1 h-16 inline-block"></div>
              <h3 className="text-2xl inline-block ml-6 text-logo3 font-bold text-left">
                ¿Qué tipo de música se suele tocar?
              </h3>
            </div>
            <p className="lg:col-start-2 col-span-2">
              Generalmente las charangas tocan música folclórica ,canciones
              populares de la zona y arreglos de música moderna, habitualmente
              estas canciones están cargadas de humor y pueden utilizan un
              lenguaje grosero. Esto es debido a que suele ser una música
              festiva tocada normalmente en eventos taurinos, fiestas de
              pueblos, despedidas de soltero/a...
            </p>
            <div className="lg:col-start-2 col-span-2 flex flex-no-wrap items-center lg:ml-6 md:ml-4">
              <i className="w-1/5 mr-6">
                <DrumIcon height="100" width="100" fill="#9ED44E" />
              </i>
              <p className="ml-6">
                Normalmente se componen de pocos músicos, donde predomina el
                viento metal y la percusión. Se puede decir que la composición
                estándar más reducida se compone de trompetas, trombones y tuba,
                junto a percusión y saxofones.
              </p>
            </div>
          </div>
        </section>
      </Container>
      <section className="bg-lightgray mt-6">
        <Container className="mx-auto lg:w-4/5 w-full px-6 pt-6 pb-12">
          <div className="flex flex-col items-center justify-center text-justify">
            <h3 className="text-logo4 text-2xl italic font-semibold h1-font tracking-widest">
              Nuestro sello
            </h3>
            <p>
              Apostamos por tener un grupo charanguero muy versátil con una
              instrumentación más variada que los grupos tradicionales. Siendo
              capaces de tocar en una gran diversidad de actos y modificando la
              plantilla a las necesidades. De la misma forma, intentamos innovar
              en los repertorios musicales tocando canciones modernas a la vez
              que readaptando la música popular a los tiempos actuales.
            </p>
          </div>
        </Container>
      </section>
      <PoliticsFooter className="lg:pl-48 p-6" />
    </div>
  );
}
export default Home;
