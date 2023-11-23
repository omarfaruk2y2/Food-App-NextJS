"use client"
import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb'
import { useState,useEffect} from 'react';

const page = () => {
  const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const program = require('../../../public/json/programs.json');
            setPrograms(program);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);

  return (
    <div>
      <Breadcrumb page_title="Program"/>
      <div className=''>
          <div className=''>
            {
              programs.map(item => <div>
                  <img src={item.thumbnail} />
              </div>)
            }
          </div>
      </div>
    </div>
  )
}

export default page