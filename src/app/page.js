'use client'
import FeaturesCard from "@/Components/FeaturesCard/FeaturesCard"
import Hero from "@/Components/Hero/Hero"
import Para from "@/Components/Para/Para"
import Programs from "@/Components/Programs/Programs"
import Title from "@/Components/Title/Title"
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import ModalVideo from 'react-modal-video';
import { IoMdPlay } from "react-icons/io";


const page = () => {
  const [isOpen, setOpen] = useState(false);
  const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const program = require('../../public/json/programs.json');
            setPrograms(program);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);
  
  const programBg = {
    backgroundImage: "url('/Programs.webp')",
    width: "100%",
  }

  const aboutBg = {
    backgroundImage: "url('/About-us.webp')",
    width: "100%",
  }

  return (
    <div className=''>
        {/* Hero Section */}
        <Hero/>
        {/* Features Section */}
        <div className="max-w-6xl mx-auto py-32">
            <Title title="Discover Our " hightlight="Features"></Title>
            <Para para="Kidzo mission is to provide affordable, high-quality early education and childcare services for working families to ensure every child.">
            </Para>
            <div className="grid grid-cols-4 gap-6 mt-14">
                <FeaturesCard featureIcon="/features-icons/bookshelf.svg" featureTitle="Primary Education" featureLink="#" />
                <FeaturesCard featureIcon="/features-icons/school.svg" featureTitle="Daycare Sections" featureLink="#" />
                <FeaturesCard featureIcon="/features-icons/playground.svg" featureTitle="Playground Zones" featureLink="#" />
                <FeaturesCard featureIcon="/features-icons/fruit.svg" featureTitle="Healthy Foods" featureLink="#" />
                <FeaturesCard featureIcon="/features-icons/medal.svg" featureTitle="Cultural Activities" featureLink="#" />
                <FeaturesCard featureIcon="/features-icons/teacher.svg" featureTitle="Expert Teachers" featureLink="#" />
                <FeaturesCard featureIcon="/features-icons/paint-palette.svg" featureTitle="Arts & Crafts" featureLink="#" />
                <FeaturesCard featureIcon="/features-icons/online-learning.svg" featureTitle="Online Lessons" featureLink="#" />
            </div>
        </div>
        {/* Program Section */}
        <div className="bg-no-repeat bg-cover" style={programBg}>
            <div className="max-w-6xl mx-auto py-32">
              <Title title="Our Educational " hightlight="Programs"></Title>
              <Para para="Kidzo mission is to provide affordable, high-quality early education and childcare services for working families to ensure every child.">
              </Para>
              <div className='grid grid-cols-2 gap-8 mt-14'>
                {
                  programs.map(item => <Programs key={item.id} item={item} ></Programs>)
                }
              </div>
            </div>
        </div>
        {/* About Section */}
        <div className="bg-no-repeat bg-cover" style={aboutBg}>
            <div className="max-w-6xl mx-auto py-32 grid grid-cols-2 gap-16">
              <div className='relative border-2 border-dashed rounded-xl p-3'>
                <img className="rounded-xl" src="/video_bg.png" />
                <div className="absolute top-[37%] left-[42%]">
                  <ModalVideo
                    channel="youtube"
                    youtube={{ mute: 0, autoplay: 1 }}
                    isOpen={isOpen}
                    videoId="0DFLDslcJtE"
                    onClose={() => setOpen(false)} 
                  />
                  <button className="p-8 bg-white text-[#fe4b7b] hover:bg-black hover:text-white rounded-full text-3xl" onClick={() => setOpen(true)}>
                    <IoMdPlay />
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-[40px] leading-tight text-white font-extrabold font-nunito">With Efficiency to Unlock More <span className="hightlight">Opportunities</span></h1>
                <p className="text-white text-lg font-nunito font-normal mt-4 mb-7">
                    Why I say old chap that is spiffing bodge, blag pardon me mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy.
                </p>
                <div className="grid grid-cols-2 gap-10">
                    <div>
                      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                          {({ isVisible }) => (
                            <div className="text-5xl text-[#FFC37E] font-nunito font-bold" style={{ height: 48 }}>
                              {isVisible && <CountUp end={500} /> }+
                            </div>
                          )}
                        </VisibilitySensor>
                        <h1 className="text-white">Teachers</h1>
                    </div>
                    <div>
                      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                          <div className="text-5xl text-[#FFC37E] font-nunito font-bold" style={{ height: 48 }}>
                            {isVisible && <CountUp end={1000} /> }+
                          </div>
                        )}
                      </VisibilitySensor>
                      <h1 className="text-white">Total Student</h1>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default page