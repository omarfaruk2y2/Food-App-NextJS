'use client'
import FeaturesCard from "@/Components/FeaturesCard/FeaturesCard"
import Hero from "@/Components/Hero/Hero"
import Para from "@/Components/Para/Para"
import Programs from "@/Components/Programs/Programs"
import Title from "@/Components/Title/Title"
import { useEffect, useState } from 'react';


const page = () => {

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
  
  const styling = {
    backgroundImage: "url('/Programs.webp')",
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
                <FeaturesCard featurIcon="/features-icons/bookshelf.svg" featureTitle="Primary Education" featureLink="#" />
                <FeaturesCard featurIcon="/features-icons/school.svg" featureTitle="Daycare Sections" featureLink="#" />
                <FeaturesCard featurIcon="/features-icons/playground.svg" featureTitle="Playground Zones" featureLink="#" />
                <FeaturesCard featurIcon="/features-icons/fruit.svg" featureTitle="Healthy Foods" featureLink="#" />
                <FeaturesCard featurIcon="/features-icons/medal.svg" featureTitle="Cultural Activities" featureLink="#" />
                <FeaturesCard featurIcon="/features-icons/teacher.svg" featureTitle="Expert Teachers" featureLink="#" />
                <FeaturesCard featurIcon="/features-icons/paint-palette.svg" featureTitle="Arts & Crafts" featureLink="#" />
                <FeaturesCard featurIcon="/features-icons/online-learning.svg" featureTitle="Online Lessons" featureLink="#" />
            </div>
        </div>
        {/* Program Section */}
        <div className="" style={styling}>
            <div className="max-w-6xl mx-auto py-32">
              <Title title="Our Educational " hightlight="Programs"></Title>
              <Para para="Kidzo mission is to provide affordable, high-quality early education and childcare services for working families to ensure every child.">
              </Para>
              <div className='grid grid-cols-2 gap-8'>
                {
                  programs.map(item => <Programs key={item.id} item={item} ></Programs>)
                }
              </div>
            </div>
        </div>
    </div>
  )
}

export default page