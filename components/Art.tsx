import Image from "next/image";
import theatreImg1 from "../public/assets/images/theatreImg1.jpg";
import theatreImg2 from "../public/assets/images/theatreImg2.jpg";
import theatreImg3 from "../public/assets/images/theatreImg3.jpg";
import theatreImg4 from "../public/assets/images/theatreImg4.jpg";
import SectionTitle from "./SectionTitle";

const Art = () => {
  return (
    <section id="art" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Stages I've Graced" titleNo="---" /><br/>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        
        {/* Theatre Production One: Offside */}
        <div className="flex flex-col gap-6">
          <a
            className="relative group"
            // href="#"
            target="_blank"
          >
            <div className="w-full h-auto">
              <Image
                className="w-full h-full object-contain rounded-lg"
                src={theatreImg1}
                alt="Theatre Production One"
              />
              <div className="absolute w-full h-full bg-gray-800 opacity-50 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-[#D2B48C] text-sm tracking-wide">
                Theatrical Play
              </p>
              <h3 className="text-2xl font-bold">Offside</h3>
            </div>
            <p className="bg-[#0A192F] text-sm md:text-base p-2 md:p-6 rounded-md" style={{ textAlign: 'justify' }}>
              Offside, a captivating blend of comedy, thriller, and classic elements, 
              was presented by the Somalatha Subasinghe Playhouse 2023 batch. Directed 
              by Chamila Priyanka, this theatrical production brought audiences to the 
              edge of their seats with its dynamic mix of genres. The play premiered in 
              August 2023 at the Elphinstone Theatre, captivating audiences with its 
              compelling storyline and talented performances.
            </p>
          </div>
        </div>

        {/* Theatre Production Two: Magula */}
        <div className="flex flex-col gap-6">
          <a
            className="relative group"
            // href="#"
            target="_blank"
          >
            <div className="w-full h-auto">
              <Image
                className="w-full h-full object-contain rounded-lg"
                src={theatreImg2}
                alt="Theatre Production Two"
              />
              <div className="absolute w-full h-full bg-gray-800 opacity-50 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-[#D2B48C] text-sm tracking-wide">
                Theatrical Play
              </p>
              <h3 className="text-2xl font-bold">Magula</h3>
            </div>
            <p className="text-sm md:text-base bg-[#0A192F] p-2 md:p-6 rounded-md xl:-mr-16" style={{ textAlign: 'justify' }}>
            &quot;Magula&quot;, a compelling blend of comedy and tragedy, was directed by Nilanka Dahanayake and presented by the 
              Somalatha Subasinghe Playhouse 2023 batch. This theatrical production captivated audiences with its nuanced 
              exploration of human emotions and societal issues. It premiered in August 2023 at the Elphinstone Theatre, 
              where it received acclaim for its thought-provoking storyline and impactful performances. Due to its success, 
              &quot;Magula&quot; returned to the stage in March 2024 at the Namel Malini Punchi Theatre, further enthralling audiences 
              with its powerful narrative and insightful portrayal of life&apos;s complexities.
            </p>
          </div>
        </div>

        {/* Theatre Production Three: Walas Pawula */}
        <div className="flex flex-col gap-6">
          <a
            className="relative group"
            // href="#"
            target="_blank"
          >
            <div className="w-full h-auto">
              <Image
                className="w-full h-full object-contain rounded-lg"
                src={theatreImg3}
                alt="Theatre Production Three"
              />
              <div className="absolute w-full h-full bg-gray-800 opacity-50 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-[#D2B48C] text-sm tracking-wide">
                Theatrical Play
              </p>
              <h3 className="text-2xl font-bold">Walas Pawula</h3>
            </div>
            <p className="text-sm md:text-base bg-[#0A192F] p-2 md:p-6 rounded-md" style={{ textAlign: 'justify' }}>
              Walas Pawula, a delightful musical production, brings to life the beloved international folktale of Goldilocks 
              and the Three Bears. Directed and choreographed by Chandana Aluthge, with a script written by Somalatha Subasinghe, 
              this enchanting performance first graced the stage in December 2003. The production captivates audiences with its 
              vibrant storytelling, lively music, and engaging choreography, offering a fresh and creative interpretation of a 
              timeless story.
            </p>
          </div>
        </div>

        {/* Theatre Production Four: Vikrthi */}
        <div className="flex flex-col gap-6">
          <a
            className="relative group"
            // href="#"
            target="_blank"
          >
            <div className="w-full h-auto">
              <Image
                className="w-full h-full object-contain rounded-lg"
                src={theatreImg4}
                alt="Theatre Production Four"
              />
              <div className="absolute w-full h-full bg-gray-800 opacity-50 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-[#D2B48C] text-sm tracking-wide">
                Theatrical Play
              </p>
              <h3 className="text-2xl font-bold">Vikurthi</h3>
            </div>
            <p className="text-sm md:text-base bg-[#0A192F] p-2 md:p-6 rounded-md" style={{ textAlign: 'justify' }}>
            &quot;Vikurthi&quot;, an original play by Somalatha Subasinghe, satirically exposes the struggles of youth caught 
              between parental expectations and personal aspirations. First performed in 1982 in Colombo, the play 
              continues to resonate internationally, highlighting themes of peer pressure and societal norms impacting 
              individual lives for over 42 years.
            </p>
          </div>
        </div>

        {/* WhatsApp Contact */}
        {/* <div className="col-span-2 flex justify-center mt-12">
          <div className="p-8 rounded-lg text-center text-white" style={{ backgroundColor: '#1c3a59' }}>
            <h3 className="text-xl font-bold mb-4">
              Curious about the chaos behind the curtains? WhatsApp awaits!
            </h3>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default Art;
