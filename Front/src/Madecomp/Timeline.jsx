import React from "react";
import { useTranslation } from "react-i18next";

// Example data
const timelineEventsData = [
  {
    date: "January 15, 2024",
    title: "Phase I",
    description:
      "Initial data collection and model architecture design for the AI system.",
  },
  {
    date: "March 30, 2024",
    title: "Phase II",
    description:
      "Model training and validation with core dataset implementation.",
  },
  {
    date: "June 15, 2024",
    title: "Phase III",
    description:
      "Integration of advanced features and performance optimization.",
  },
  {
    date: "September 1, 2024",
    title: "Phase IV",
    description:
      "Final testing, deployment, and continuous improvement system launch.",
  },
];

const TimelineItem = ({ date, title, description, isLast }) => (
  <div className="relative space-y-2">
    {/* Vertical line for mobile */}
    {!isLast && (
      <div className="bg-gray-300 shrink-0 absolute top-6 left-0 w-px h-full block md:hidden"></div>
    )}

    {/* The hollow dot */}
    <div className="absolute top-0 -left-[9px] z-10 flex size-5 items-center justify-center rounded-full bg-black p-1 md:-top-10 md:left-0">
      <div className="size-full rounded-full bg-white"></div>
    </div>

    {/* Text content */}
    <div className="pl-7 md:pl-0">
      <p className="text-sm text-gray-600">{date}</p>
      <h2 className="text-xl font-bold tracking-tighter text-black">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const Timeline = ({ events = timelineEventsData }) => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-32">
      <div className="flex items-center justify-center">
        <div className="container">
          <h1 className="mb-10 text-center text-3xl font-bold tracking-tighter text-black sm:text-6xl">
            {t("timelineTitle")}
          </h1>

          <div className="flex w-full justify-center flex-col gap-6 rounded-xl py-3 md:py-16 relative">
            <div className="px-5">
              <div className="relative flex flex-col items-center md:mt-12">
                {/* Horizontal line for desktop */}
                <div className="bg-gray-300 shrink-0 h-px w-full absolute -top-8 left-0 hidden md:block"></div>

                {/* Progress bar animation line */}
                <div
                  className="absolute -top-[32px] left-0 hidden h-0.5 bg-black md:block"
                  style={{ width: "0%" }}
                ></div>

                <div className="grid gap-12 md:gap-6 md:grid-cols-4">
                  {events.map((event, index) => (
                    <TimelineItem
                      key={index}
                      date={event.date}
                      title={event.title}
                      description={event.description}
                      isLast={index === events.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
