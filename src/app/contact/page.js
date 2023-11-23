'use client'

import Breadcrumb from '@/Components/Breadcrumb/Breadcrumb';
import GoogleMapReact from 'google-map-react';
import Link from 'next/link';
import { FaLocationArrow } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const page = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };

  return (
    <div className="">
        <Breadcrumb page_title="Contact"  />
        <div className="max-w-6xl mx-auto py-32">
            <div className="grid grid-cols-3">
                <div className='col-span-2'>
                    <h1 className='text-[#12265A] text-[38px] font-nunito font-extrabold mb-8'>We`re here to Help You </h1>
                    <form className=''>
                        <div className='grid grid-cols-2 gap-8'>
                            <div className=''>
                                <input className='w-full bg-[#f5f9fb] py-4 px-6 rounded-md font-nunito placeholder:text-[#767676] placeholder:font-medium' type='text' placeholder='Your Name' />
                            </div>
                            <div className=''>
                                <input className='w-full bg-[#f5f9fb] py-4 px-6 rounded-md font-nunito placeholder:text-[#767676] placeholder:font-medium' type='text' placeholder='Your Email' />
                            </div>
                        </div>
                        <div className='my-8'>
                            <textarea rows="6" className='w-full bg-[#f5f9fb] py-3 px-6 rounded-md font-nunito placeholder:text-[#767676] placeholder:font-medium' placeholder='content' />
                        </div>
                        <button type='submit' className='text-lg font-nunito font-bold text-white py-3 px-8 rounded-full bg-[#fe4b7b] hover:bg-black'>Submit</button>
                    </form>
                </div>
                <div className='ml-16'>
                    <h1 className='text-[#12265A] text-[38px] font-nunito font-extrabold mb-8'>Office Info</h1>
                    <div className='flex'>
                        <div>
                            <FaLocationArrow className='text-2xl text-[#fe4b7b] mt-1'/>
                        </div>
                        <div className='ml-5'>
                            <h1 className='text-xl font-nunito text-[#0B1C39] font-black'>Location</h1>
                            <p className='font-nunito font-medium text-[#7A7A7A] text-lg mt-2'>9 Road, Mirpur Dohs, New York</p>
                        </div>
                    </div>
                    <div className='flex my-11'>
                        <div>
                            <FaPhone className='text-2xl text-[#fe4b7b] mt-1'/>
                        </div>
                        <div className='ml-5'>
                            <h1 className='text-xl font-nunito text-[#0B1C39] font-black'>Phone</h1>
                            <Link href={"tel:+642205745695"} className='font-nunito font-medium text-[#7A7A7A] text-lg mt-2 hover:text-[#fe4b7b]'>+642 205 745 695</Link>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <MdEmail className='text-2xl text-[#fe4b7b] mt-1'/>
                        </div>
                        <div className='ml-5'>
                            <h1 className='text-xl font-nunito text-[#0B1C39] font-black'>Email</h1>
                            <Link href={"mailto:info@droitthemes.com"} className='font-nunito font-medium text-[#7A7A7A] hover:text-[#fe4b7b] text-lg mt-2'>info@droitthemes.com</Link>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-5'>
                        <Link href={"#"}>
                            <div className='bg-[#3b5998] hover:bg-[#fe4b7b] w-10 h-10 rounded-full text-white flex items-center justify-center'>
                                <span ><FaFacebookF /></span>
                            </div>
                        </Link>
                        <Link href={"#"}>
                            <div className='bg-[#1da1f2] hover:bg-[#fe4b7b] w-10 h-10 rounded-full text-white flex items-center justify-center'>
                                <span ><FaXTwitter /></span>
                            </div>
                        </Link>
                        <Link href={"#"}>
                            <div className='bg-[#0077b5] hover:bg-[#fe4b7b] w-10 h-10 rounded-full text-white flex items-center justify-center'>
                                <span ><FaLinkedinIn /></span>
                            </div>
                        </Link>
                        <Link href={"#"}>
                            <div className='bg-[#cd201f] hover:bg-[#fe4b7b] w-10 h-10 rounded-full text-white flex items-center justify-center'>
                                <span ><FaYoutube /></span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ height: '600px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
                />
            </GoogleMapReact>
        </div>
    </div>
  )
}

export default page