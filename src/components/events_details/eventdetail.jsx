import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "swiper/css";

const EventDetail = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(
          `https://ici-fest-skit.vercel.app/api/v1/events?slug=${slug}`,
          {
            method: "GET",
        
          }
        );

        const data = await res.json();
        if (data?.success) {
          setEvent(data.data.data);
        } else {
          setError("Failed to fetch event details.");
        }
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <div className="animate-pulse text-center">
          <div className="h-6 w-40 bg-gray-300 rounded mx-auto mb-3"></div>
          <div className="h-6 w-60 bg-gray-200 rounded mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error)
    return (
      <p className="text-center text-red-600 font-semibold mt-20 px-4">{error}</p>
    );

  if (!event)
    return (
      <p className="text-center mt-20 text-gray-500 px-4">No event found.</p>
    );

  // Dynamic Tabs
  const tabs = [
    event.description && "About",
    event.judgementCriteria && "Judgement Criteria",
    event.disqualificationCriteria && "Disqualification",
    event.materialsProvided && "Materials",
  ].filter(Boolean);

  // Clean text: remove leading "-" and trim spaces
  const cleanText = (text) =>
    text
      ?.split("\n")
      .map((line) => line.replace(/^\s*-\s*/, "").trim())
      .join("\n");

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <p
            className="text-base md:text-lg leading-relaxed whitespace-pre-line text-center"
            dangerouslySetInnerHTML={{
              __html: cleanText(event.description),
            }}
          />
        );
      case 1:
        return (
          <p className="text-base md:text-lg leading-relaxed whitespace-pre-line text-center">
            {cleanText(event.judgementCriteria)}
          </p>
        );
      case 2:
        return (
          <p className="text-base md:text-lg leading-relaxed whitespace-pre-line text-center">
            {cleanText(event.disqualificationCriteria)}
          </p>
        );
      case 3:
        return (
          <p className="text-base md:text-lg leading-relaxed whitespace-pre-line text-center">
            {cleanText(event.materialsProvided)}
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 sm:p-6 md:px-16 lg:px-24 xl:px-32">
      {/* Header Card */}
      <div className="bg-[#ffb4a7] p-5 md:p-8 rounded-3xl text-center shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-[#2e2e2e]">
          {event.title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-semibold mt-2 px-2">
          {event.shortDescription}
        </p>

        <div className="mt-6 font-bold text-sm sm:text-base md:text-lg space-y-1">
          <p>Category: {event.category}</p>
          <p>Duration: {event.durationInDays} day(s)</p>
          <p>Registration Type: {event.registrationType}</p>
          <p>Status: {event.registrationStatus}</p>

          {/* Coordinators */}
          {event.coordinators?.length > 0 && (
            <div className="mt-4 text-xs sm:text-sm font-medium space-y-1">
              {event.coordinators.map((coord) => (
                <p key={coord.id}>
                  {coord.name}:{" "}
                  <a
                    href={`https://wa.me/${coord.mobile}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#ff583e] underline"
                  >
                    {coord.mobile}
                  </a>
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Register Button */}
        {event.registrationStatus === "OPEN" &&
          event.registrationForm?.length > 0 && (
            <a
              href={event.registrationForm[0].formURL}
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-5 bg-[#ff583e] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-[#ff583e] hover:ring-2 ring-[#ff583e] transition duration-300 text-sm sm:text-base">
                Register Now – ₹{event.registrationForm[0].formAmount}
              </button>
            </a>
          )}
      </div>

      {/* Event Images */}
      {event.images?.length > 0 && (
        <div className="mt-10 flex flex-col items-center gap-6">
          {event.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Event ${index + 1}`}
              className="max-h-[250px] sm:max-h-[350px] md:max-h-[450px] w-auto object-contain mx-auto rounded-lg shadow-md"
            />
          ))}
        </div>
      )}

      {/* Tabs Section */}
      {tabs.length > 0 && (
        <>
          <div className="flex justify-center mt-10 flex-wrap gap-3 sm:gap-4">
            {[...new Set(tabs)].map((tab, index) => (
              <button
                key={index}
                className={`${
                  activeTab === index
                    ? "bg-[#ff583e] text-white"
                    : "bg-gray-200 text-gray-700"
                } tracking-wide px-4 sm:px-6 py-2 sm:py-3 font-bold text-xs sm:text-sm md:text-base rounded-full transition`}
                onClick={() => setActiveTab(index)}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center px-2 sm:px-6">
            <div className="w-full max-w-2xl">{renderTabContent()}</div>
          </div>
        </>
      )}

      {/* Brochure */}
      {event.brochure && (
        <div className="mt-10 text-center">
          <a href={event.brochure} target="_blank" rel="noreferrer">
            <button className="bg-white border-2 border-[#ff583e] text-[#ff583e] px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:bg-[#ff583e] hover:text-white transition text-sm sm:text-base">
              📖 View Brochure
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
