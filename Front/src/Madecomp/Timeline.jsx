import React from "react";
import { useTranslation } from "react-i18next";

// --- FIX 2: Use PascalCase for component names and remove extra div ---
const TickmarkIcon = () => (
  <img
    className="w-5 mr-2 flex-shrink-0"
    src="\images\checked.png"
    alt="Tick mark"
  />
);
const BlankTickmarkIcon = () => (
  <img
    className="w-5 mr-2 flex-shrink-0"
    src="\images\checked (2).png"
    alt="blank Tick mark"
  />
);

// Example data
const timelineEventsData = [
  {
    date: "September 25, 2025",
    title: "Phase I",
    status: "completed",
    description: [
      { text: "Initial data collection from official sources", isDone: true },
      { text: "Data cleaning", isDone: true },
      { text: "Project Prototype launch", isDone: true },
      {
        text: "API connection for weather patterns and real time analysis",
        isDone: true,
      },
    ],
  },
  {
    date: "October 18, 2025",
    title: "Phase II",
    status: "current",
    description: [
      {
        text: "Forum page creation for posting regular updates by team",
        isDone: true,
      },
      { text: "AI model training and testing", isDone: false },
      {
        text: "Connecting model with the application and replacing hardcoded portion",
        isDone: false,
      },
      {
        text: "Make the Predict Yield feature for general yield prediction completely functional for all districts",
        isDone: false,
      },
    ],
  },
  {
    date: "November 1, 2025",
    title: "Phase III",
    status: "upcoming",
    description: [
      {
        text: "Extracting data from soil health card with 100% accuracy",
        isDone: false,
      },
      { text: "SHC model connection and testing", isDone: false },
      {
        text: "Providing actionable insights like when to irrigate, pest control etc  combining soil metrics , weather patterns and historical data",
        isDone: false,
      },
    ],
  },
  {
    date: "November 30, 2025",
    title: "Phase IV",
    status: "upcoming",
    description: [
      {
        text: "Working on docker and Devops segment for load balancing and scalability ",
        isDone: false,
      },
      {
        text: "Providing native language support and voice input to farmers",
        isDone: false,
      },
    ],
  },
];

const TimelineItem = ({ date, title, description, isLast, status }) => (
  <div className="relative space-y-2">
    {/* Vertical line for mobile */}
    {!isLast && (
      <div className="bg-gray-300 shrink-0 absolute top-6 left-0 w-px h-full block md:hidden"></div>
    )}
    {/* --- UPDATED DOT LOGIC --- */}
    <div className="absolute top-0 -left-[9px] z-10 flex size-5 items-center justify-center rounded-full p-1 md:-top-10 md:left-0">
      {/* 2. Conditionally render the dot's style */}
      {status === "completed" && (
        // Solid black dot for completed phases
        <>
          <div className="absolute size-5 rounded-full bg-black"></div>
          <div className="relative size-3 rounded-full bg-black"></div>
        </>
      )}

      {status === "current" && (
        // Ping animation for the current phase
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
        </span>
      )}

      {status === "upcoming" && (
        // Original hollow dot for upcoming phases
        <>
          <div className="absolute size-5 rounded-full bg-black"></div>
          <div className="relative size-3 rounded-full bg-white"></div>
        </>
      )}
    </div>

    {/* Text content */}
    <div className="pl-7 md:pl-0">
      <p className="text-sm text-gray-600">{date}</p>
      <h2 className="text-xl font-bold tracking-tighter text-black">{title}</h2>
      {Array.isArray(description) ? (
        <ul className="mt-2 space-y-2">
          {description.map((point, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              {/* --- FIX 2: Use corrected component names --- */}
              {point.isDone ? <TickmarkIcon /> : <BlankTickmarkIcon />}
              <span>{point.text}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-600">{description}</p>
      )}
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
                <div className="bg-gray-300 shrink-0 h-px w-full absolute -top-8 left-0 hidden md:block"></div>
                <div
                  className="absolute -top-[32px] left-0 hidden h-1 bg-black md:block"
                  style={{ width: "26%" }}
                ></div>
                <div className="grid gap-12 md:gap-6 md:grid-cols-4">
                  {events.map((event, index) => (
                    <TimelineItem
                      key={index}
                      date={event.date}
                      title={event.title}
                      description={event.description}
                      isLast={index === events.length - 1}
                      status={event.status}
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
