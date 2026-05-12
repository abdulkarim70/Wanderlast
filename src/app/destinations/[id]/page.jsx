import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaRegCalendar } from "react-icons/fa";
import {  RiMapPin2Fill } from "react-icons/ri";

const DestinationDetailsPage = async({params}) => {
    const {id}=await params
    
    const res= await fetch(`http://localhost:5000/destinations/${id}`)
    const destination=await res.json()
    const {imageUrl, price , destinationName, duration , country, description}=destination
    return (
        <div className='max-w-7xl mx-auto'>
           Destination Deatils page
           <Image
           alt={destinationName}
           src={imageUrl}
           height={400}
           width={800}
              unoptimized
           />
           <div className="p-3">
           <div className="flex items-center gap-2">
             <RiMapPin2Fill/><span>{country}</span>
           </div>
          <div className="flex justify-between">
             <div>
            <h2 className="text-xl font-bold">{destinationName}</h2>
           </div>
           <div className="flex gap-2 items-center"><FaRegCalendar/>{duration}</div>
           <div>
            <h3 className="text-2xl font-bold"> ${price}</h3>
           </div>
          </div>
          <h1 className='mt-10 text-2xl font-bold'>Overview</h1>
           <p>{description}</p>
           </div>
        </div>
    );
};

export default DestinationDetailsPage;