import Popup from "./popup";
import Container from "./../layouts/container";

const privacyPopup = ({ onShowPrivacy }) => {
  return (
    <Popup title="wow">
      <Container className="lg:p-10 mx-auto p-5">
        <article className="">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh
            urna, blandit vel mi vulputate, molestie consequat ante. Praesent in
            arcu vel ligula venenatis sollicitudin. Quisque sed posuere lacus.
            Ut non magna rhoncus, ullamcorper elit vitae, porttitor turpis.
            Vivamus quis arcu sit amet diam facilisis fringilla quis vitae
            lacus. Nunc vulputate, ex eget pulvinar condimentum, mauris neque
            semper tortor, ac tincidunt metus tellus id nisl. Donec ultricies
            rhoncus facilisis. Donec ultrices magna quis ligula fringilla
            fringilla. Curabitur volutpat cursus velit sed tempus. Integer sit
            amet lectus quis sem consequat pulvinar ut eu nibh. Morbi commodo ex
            imperdiet efficitur convallis. Praesent ac erat eu dolor
            sollicitudin ullamcorper. Etiam at orci nec est ornare ultricies id
            non tellus. Curabitur hendrerit quis purus ut pretium. Donec
            fringilla tortor neque, quis tristique quam egestas id. Aliquam erat
            volutpat. Integer sed dui non ipsum tincidunt tincidunt et sit amet
            nibh. Proin nisi tellus, lobortis eu semper in, finibus at dolor.
            Nulla id aliquet diam, ut imperdiet enim. Nam vulputate enim nec est
            auctor vehicula. Aenean finibus leo elit, sed posuere felis interdum
            eget. Nulla consequat eros eget dui volutpat, congue sodales metus
            convallis. Quisque eu lorem nibh. Curabitur eget maximus augue,
            lacinia efficitur ligula. Curabitur dapibus lacus vitae nisl porta,
            eu suscipit arcu sodales. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Cras nec enim
            posuere, sagittis justo ac, dignissim diam. Morbi sed erat ut lectus
            faucibus molestie. Praesent aliquet sollicitudin sem non rutrum.
            Aliquam magna tellus, volutpat at libero in, cursus lobortis dui.
            Morbi aliquam nibh eros, non blandit tellus posuere eu. Etiam
            egestas egestas mauris, ac interdum justo cursus ut. Sed sodales
            ligula sed iaculis convallis. Etiam faucibus quam augue, eget
            vehicula metus maximus non. Quisque a sagittis odio. Praesent
            condimentum commodo porta. Etiam ornare, turpis a efficitur
            suscipit, neque dolor tempor orci, in luctus sapien massa eu velit.
            Integer sed placerat magna. Nunc a vehicula dolor, molestie
            vestibulum nisl. Maecenas eu posuere quam, vel feugiat dolor. Aenean
            a convallis ex, non lobortis massa. Duis in eros sed tellus
            malesuada rutrum. Donec sollicitudin arcu non dapibus sagittis.
            Nullam at arcu in eros tincidunt faucibus vitae eget nibh. vehicula
            metus maximus non. Quisque a sagittis odio. Praesent condimentum
            commodo porta. Etiam ornare, turpis a efficitur suscipit, neque
            dolor tempor orci, in luctus sapien massa eu velit. Integer sed
            placerat magna. Nunc a vehicula dolor, molestie vestibulum nisl.
            Maecenas eu posuere quam, vel feugiat dolor. Aenean a convallis ex,
            non lobortis massa. Duis in eros sed tellus malesuada rutrum. Donec
            sollicitudin arcu non dapibus sagittis. Nullam at arcu in eros
            tincidunt faucibus vitae eget nibh. vehicula metus maximus non.
            Quisque a sagittis odio. Praesent condimentum commodo porta. Etiam
            ornare, turpis a efficitur suscipit, neque dolor tempor orci, in
            luctus sapien massa eu velit. Integer sed placerat magna. Nunc a
            vehicula dolor, molestie vestibulum nisl. Maecenas eu posuere quam,
            vel feugiat dolor. Aenean a convallis ex, non lobortis massa. Duis
            in eros sed tellus malesuada rutrum. Donec sollicitudin arcu non
            dapibus sagittis. Nullam at arcu in eros tincidunt faucibus vitae
            eget nibh. vehicula metus maximus non. Quisque a sagittis odio.
            Praesent condimentum commodo porta. Etiam ornare, turpis a efficitur
            suscipit, neque dolor tempor orci, in luctus sapien massa eu velit.
            Integer sed placerat magna. Nunc a vehicula dolor, molestie
            vestibulum nisl. Maecenas eu posuere quam, vel feugiat dolor. Aenean
            a convallis ex, non lobortis massa. Duis in eros sed tellus
            malesuada rutrum. Donec sollicitudin arcu non dapibus sagittis.
            Nullam at arcu in eros tincidunt faucibus vitae eget nibh.
          </p>
        </article>
      </Container>
      <div className="relative bottom-0 w-full flex justify-center pb-10">
        <button
          className="border-solid border-black mx-auto border-2 rounded w-1/5"
          onClick={() => onShowPrivacy()}
        >
          Aceptar
        </button>
      </div>
    </Popup>
  );
};
export default privacyPopup;
