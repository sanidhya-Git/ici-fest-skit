import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          "https://ici-fest-skit.vercel.app/api/v1/events?page=1&limit=50",
          {
            method: "GET",            
          }
        );

        const data = await res.json();
        const fetchedEvents = data?.data?.data?.events || [];
        setEvents(fetchedEvents);
      } catch (err) {
        console.log("error", err);
        setError(err.message || "Failed to fetch events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <p className="text-center text-lg">Loading events...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <>
      <div className="text-center mb-[20px] md:mb-[40px] mt-[10px]">
        <span className="text-[26px] md:text-[30px] font-extrabold">
          FEST{"'"}
          <span className="text-[#ff583e]">25 </span>EVENTS
        </span>
      </div>

      <CategorySection title="Workshops" events={events} category="WORKSHOP" />
      <CategorySection title="Events" events={events} category="EVENT" />
      <CategorySection title="Exhibitions" events={events} category="EXHIBITION" />
    </>
  );
};

const CategorySection = ({ title, events, category }) => {
  const filteredEvents = events.filter((ev) => ev.category === category);

  if (filteredEvents.length === 0) return null;

  return (
    <>
      <div>
        <p className="text-[26px] md:text-[30px] font-extrabold text-center mt-8">
          {title}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {filteredEvents.map((data) => (
          <div
            key={data.id}
            className="relative max-[400px]:w-full w-[350px] h-[230px] rounded-[20px] overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full">
              <img
                src={data.coverImage}
                alt={data.title}
                className="w-full h-full object-cover brightness-75"
              />
            </div>

            {/* Content */}
            <div className="z-10 relative w-full h-full">
              <div className="w-full h-full flex justify-center items-center">
                <p className="text-xl text-center font-bold text-white">
                  {data.title}
                </p>
              </div>

              {/* Button */}
              <div
                className={`bg-black absolute bottom-0 w-full h-[40px] flex items-center justify-center ${
                  data.registrationStatus === "OPEN"
                    ? "cursor-pointer"
                    : "cursor-not-allowed"
                }`}
              >
                <Link
  to={data.registrationStatus === "OPEN" ? `/event/${data.slug}` : "#"}
>
  <span className="text-white font-semibold hover:text-[#ff583e] duration-200">
    {data.registrationStatus === "OPEN"
      ? "Register Now"
      : data.registrationStatus === "UPCOMING"
      ? "Coming Soon"
      : "Registration Closed"}  
  </span>
</Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Event;
