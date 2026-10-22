"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export type GoogleEventProps = {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
  summary: string;
};

type CalendarEvent = {
  start?: string;
  end?: string;
  location?: string;
  description?: string;
  title: string;
};

const DAYS = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const { isLoading, data: events = [] } = useQuery<CalendarEvent[]>({
    queryKey: ["calendarData"],

    queryFn: async () => {
      try {
        const calendarEmail = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;

        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;

        if (!calendarEmail || !apiKey) {
          console.error("Missing Calendar ID or API key");
          return [];
        }

        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
            calendarEmail!,
          )}/events?key=${apiKey}&orderBy=startTime&singleEvents=true`,
        );

        const data = await response.json();

        if (!response.ok) {
          console.error("Google Calendar API error:", data);
          return [];
        }

        console.log("Google Calendar response:", data);

        const items = data.items ?? [];

        return items.map(
          ({
            start,
            end,
            location,
            description,
            summary,
          }: GoogleEventProps) => ({
            start: start.dateTime ?? start.date,
            end: end.dateTime ?? end.date,
            location,
            description,
            title: summary,
          }),
        );
      } catch (error) {
        console.error("Error while fetching Google Calendar:", error);

        return [];
      }
    },
  });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startingDay = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const previousMonthLastDay = new Date(year, month, 0).getDate();

  const calendarDays = [];

  // previous month
  for (let i = startingDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: previousMonthLastDay - i,
      month: month - 1,
      year: month === 0 ? year - 1 : year,
      currentMonth: false,
    });
  }

  // current month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day,
      month,
      year,
      currentMonth: true,
    });
  }

  // next month
  let nextDay = 1;

  while (calendarDays.length < 42) {
    calendarDays.push({
      day: nextDay,
      month: month + 1,
      year: month === 11 ? year + 1 : year,
      currentMonth: false,
    });

    nextDay++;
  }

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const getEventsForDay = (
    day: number,
    eventMonth: number,
    eventYear: number,
  ) => {
    return events.filter((event) => {
      if (!event.start) return false;

      const eventDate = new Date(event.start);

      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === eventMonth &&
        eventDate.getFullYear() === eventYear
      );
    });
  };

  if (isLoading) {
    return (
      <div className="text-cyber-white flex h-full items-center justify-center text-4xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex h-[620px] w-full flex-col px-10 pb-15">
      <div className="my-5 flex items-center justify-center gap-8">
        <button
          onClick={goToPreviousMonth}
          className="text-cyber-lightgreen hover:text-cyber-neongreen text-3xl transition"
        >
          ◁
        </button>

        <div className="font-cyber-main text-cyber-white text-5xl font-bold">
          {currentDate.toLocaleString("default", {
            month: "long",
          })}
        </div>

        <button
          onClick={goToNextMonth}
          className="text-cyber-lightgreen hover:text-cyber-neongreen text-3xl transition"
        >
          ▷
        </button>
      </div>

      <div className="border-cyber-lightgreen mx-auto flex min-h-[600px] w-[85%] flex-1 flex-col overflow-hidden rounded-xl border">
        <div className="border-cyber-lightgreen bg-cyber-darkgreen grid grid-cols-7 border-b">
          {DAYS.map((day) => (
            <div
              key={day}
              className="border-cyber-lightgreen font-cyber-main text-cyber-lightgreen text-md border-r py-2 text-center last:border-r-0"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid flex-1 grid-cols-7 grid-rows-6">
          {calendarDays.map((calendarDay, index) => {
            const dayEvents = getEventsForDay(
              calendarDay.day,
              calendarDay.month,
              calendarDay.year,
            );
            const isToday =
              calendarDay.day === today.getDate() &&
              calendarDay.month === today.getMonth() &&
              calendarDay.year === today.getFullYear();

            return (
              <div
                key={index}
                className={`border-cyber-lightgreen/50 min-h-0 overflow-hidden border-r border-b p-3 ${isToday ? "bg-cyber-lightgreen/20" : ""}`}
              >
                <div
                  className={`font-cyber-main mb-3 text-right text-xl ${
                    calendarDay.currentMonth
                      ? "text-cyber-white"
                      : "text-cyber-white/30"
                  }`}
                >
                  {calendarDay.day}
                </div>

                <div className="space-y-2">
                  {dayEvents.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="font-cyber-main text-cyber-lightgreen text-sm leading-tight"
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
