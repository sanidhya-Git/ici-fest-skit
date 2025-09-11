import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <p className="text-center text-red-600 font-semibold mt-20">{error}</p>
    );

  if (!event)
    return <p className="text-center mt-20 text-gray-500">No event found.</p>;

  // Dynamic Tabs
  const tabs = [
    event.description && "About",
    event.judgementCriteria && "Judgement Criteria",
    event.disqualificationCriteria && "Disqualification",
    event.materialsProvided && "Materials",
  ].filter(Boolean);

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="text-center">
            <p
              className="text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />
          </div>
        );
      case 1:
        return (
          <div className="text-center">
            <p className="text-lg leading-relaxed">{event.judgementCriteria}</p>
          </div>
        );
      case 2:
        return (
          <div className="text-center">
            <p className="text-lg leading-relaxed">
              {event.disqualificationCriteria}
            </p>
          </div>
        );
      case 3:
        return (
          <div className="text-center">
            <p className="text-lg leading-relaxed">{event.materialsProvided}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-5 md:px-20">
      {/* Header Card */}
      <div className="bg-[#ffb4a7] p-6 rounded-[30px] text-center shadow-lg">
        <h1 className="text-[32px] md:text-[42px] font-extrabold uppercase text-[#2e2e2e]">
          {event.title}
        </h1>
        <p className="text-lg font-semibold mt-2">{event.shortDescription}</p>

        {event.coverImage && (
          <img
            src={event.coverImage}
            alt={event.title}
            className="mx-auto mt-6 rounded-2xl max-h-[400px] object-cover shadow-md"
          />
        )}

        <div className="mt-6 font-bold text-[16px] md:text-[18px] space-y-1">
          <p>Category: {event.category}</p>
          <p>Duration: {event.durationInDays} day(s)</p>
          <p>Registration Type: {event.registrationType}</p>
          <p>Status: {event.registrationStatus}</p>
        </div>

        {/* Register Button */}
        {event.registrationStatus === "OPEN" &&
          event.registrationForm?.length > 0 && (
            <a
              href={event.registrationForm[0].formURL}
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-5 bg-[#ff583e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#ff583e] hover:ring-2 ring-[#ff583e] transition duration-300">
                Register Now – ₹{event.registrationForm[0].formAmount}
              </button>
            </a>
          )}
      </div>

      {/* Tabs Section */}
      {tabs.length > 0 && (
        <>
          <div className="flex justify-center mt-10 flex-wrap gap-4">
            {[...new Set(tabs)].map((tab, index) => (
              <button
                key={index}
                className={`${
                  activeTab === index ? "btn_active" : "btn_deactive"
                } tracking-wide px-[35px] py-[18px] font-extrabold text-[14px] rounded-full`}
                onClick={() => setActiveTab(index)}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="max-w-3xl">{renderTabContent()}</div>
          </div>
        </>
      )}

      {/* Coordinators */}
      {event.coordinators?.length > 0 && (
        <div className="mt-10 bg-[#ffb4a7] p-6 rounded-[20px] shadow-lg">
          <h2 className="text-2xl font-bold mb-3 text-center">Coordinators</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {event.coordinators.map((coord) => (
              <div
                key={coord.id}
                className="bg-white p-4 rounded-lg shadow-md w-[220px] text-center"
              >
                <p className="font-bold">{coord.name}</p>
                <p>
                  {coord.branch} – Year {coord.year}
                </p>
                <a
                  href={`https://wa.me/${coord.mobile}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#ff583e] font-semibold underline"
                >
                  {coord.mobile}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Brochure */}
      {event.brochure && (
        <div className="mt-10 text-center">
          <a href={event.brochure} target="_blank" rel="noreferrer">
            <button className="bg-white border-2 border-[#ff583e] text-[#ff583e] px-6 py-3 rounded-lg font-bold hover:bg-[#ff583e] hover:text-white transition">
              📖 View Brochure
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
