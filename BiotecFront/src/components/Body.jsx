
import image from '../assets/banner.png';
import image2 from '../../public/llanoBaner.png'
import TabbedImages from './TabbedImages';

function Body() {
  return (
    <main className="p-16">
 <section id="about" className="mb-8">
  <p className="text-4xl font-bold text-gray-600 mb-6">
    Distribuidor de importantes Casas de Genética Bovina y respaldado por las mejores marcas en implementos, medicamentos hormonales y productos para salud reproductiva bovina
  </p>
  <img src={image} alt="About us" className="w-full h-auto mb-24 mt-24 rounded-lg" />
  <p className="text-4xl font-bold text-gray-600 mt-6 mb-4">
    Distribuidor de importantes Casas de Genética Bovina y respaldado por las mejores marcas en implementos, medicamentos hormonales y productos para salud reproductiva bovina
  </p>
  {/* <img src={image2} alt="About us" className="w-full h-auto mt-4" /> */}
  <TabbedImages />
</section>


      <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Card 1" description="This is the description for card 1." imageSrc="../public/biotec.png" />
        <Card title="Card 2" description="This is the description for card 2." imageSrc="../public/biotec.png" />
        <Card title="Card 3" description="This is the description for card 3." imageSrc="../public/biotec.png" />
      </section>
    </main>
  );
};

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="relative w-full h-64 perspective">
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-face card-front rounded-lg">
          <div>
            <h3 className="text-xl">{title}</h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-face card-back p-4">
          <p>{description}</p>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={imageSrc} alt="Card Background" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Body;

