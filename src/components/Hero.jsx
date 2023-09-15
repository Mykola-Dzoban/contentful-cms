import heroImg from '../assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Semiotics aesthetic bespoke, vinyl yr retro meggings fit twee
            taiyaki jean shorts shoreditch. Hammock snackwave pickled live-edge.
            Blue bottle same vice succulents kale chips venmo intelligentsia
            retro wolf food truck humblebrag slow-carb. Swag tacos twee leggings
            Brooklyn tumeric selvage raclette.
          </p>
        </div>
        <div className="img-container">
          <img className='img' src={heroImg} alt="code thinking" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
