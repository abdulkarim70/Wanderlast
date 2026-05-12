import DestinationsCard from "@/components/DestinationsCard";


const DestinationPage = async() => {
    const res= await fetch('http://localhost:5000/destination')
    const destinations=await res.json()
    console.log(destinations);
    return (
        <div className="max-w-7xl mx-auto">
          <h1>All Destinations</h1>
          <div className="grid grid-cols-4 gap-3">
            {destinations.map(destination=> <DestinationsCard destination={destination} key={destination._id}/> )}
          </div>
        </div>
    );
};

export default DestinationPage;