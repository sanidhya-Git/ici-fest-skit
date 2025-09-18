import { useState, useEffect } from "react";

const Timeline = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  // Fetch schedules from API
  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const res = await fetch(
          "https://ici-fest-skit.vercel.app/api/v1/schedule?type=all&page=1&limit=20",
          {
            method: "GET",


          }
        );

        const data = await res.json();
        console.log("API Response:", data);

        const fetchedSchedules = data?.data?.data?.schedules || [];
        setSchedules(fetchedSchedules);
      } catch (err) {
        console.error("Error fetching schedules:", err);
        setError("Failed to load schedule");
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  if (loading) return <p className="text-center">Loading timeline...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!schedules.length)
    return <p className="text-center">No schedules available</p>;

  // ✅ Group schedules by LOCAL date (IST), not UTC
  const groupedByDate = schedules.reduce((acc, schedule) => {
    const d = new Date(schedule.date);
    const normalizedDate = d.toLocaleDateString("en-CA"); // YYYY-MM-DD in local timezone (IST)

    if (!acc[normalizedDate]) {
      acc[normalizedDate] = [];
    }
    acc[normalizedDate].push(schedule);
    return acc;
  }, {});

  // ✅ Sort dates so Day 1, Day 2, etc. are in order
  const dates = Object.keys(groupedByDate).sort(
    (a, b) => new Date(a) - new Date(b)
  );

  return (
    <>
      <div className="text-center text-[30px] md:text-[36px] font-extrabold mt-[20px]">
        <p>
          Timeline for ICI FEST{"'"}
          <span className="text-[#ff583e]">25</span>
        </p>
      </div>

      {/* Day buttons */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-5 mt-[20px]">
        {dates.map((date, index) => (
          <button
            key={index}
            className={`${
              activeButton === index ? "btn_active" : "btn_deactive"
            } tracking-wide px-[30px] py-[14px] font-extrabold text-[16px] rounded-full`}
            onClick={() => handleButtonClick(index)}
          >
            Day {index + 1}
          </button>
        ))}
      </div>

      {/* Schedule for selected day */}
      <div className="flex justify-center mt-[20px]">
        <div className="text-[18px]">
          {groupedByDate[dates[activeButton]].map((item) => (
            <div className="flex justify-center" key={item.id}>
              <div
                className="block md:flex justify-center items-center border-2 px-[30px] py-[20px] md:px-[40px] md:py-[20px] rounded-[20px] gap-[50px]
              border-[#ff583e] mb-[10px]"
              >
                {/* Event Title */}
                <div className="w-[250px]">
                  <span className="font-bold text-base">{item.title}</span>
                  <div className="text-sm text-gray-600">{item.venue}</div>
                </div>

                {/* Timing */}
                <div className="w-[200px]">
                  <span>
                    {formatTime(item.startTime)} - {formatTime(item.endTime)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const formatTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

export default Timeline;
