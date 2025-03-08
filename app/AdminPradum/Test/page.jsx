/*
import app from "@/module/firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import array from "../glt.json";
// Initialize Firebase

const db = getFirestore(app);

async function addDataToFirebase(dataArray, collectionName) {
  try {
    const collectionRef = collection(db, collectionName);

    const promises = dataArray.map(async (data) => {
      if (data) {
        return await addDoc(collectionRef, data);
      } else {
        throw new Error("Each item in the array must be an object.");
      }
    });

    const results = await Promise.all(promises);
    console.log("Data added successfully:", results);
  } catch (error) {
    console.error("Error adding data to Firebase:", error.message);
  }
}

const dataa = addDataToFirebase(array, "/Quant/Trigonometry/Questions");

export default addDataToFirebase;
*/
// app/dashboard/page.tsx
"use client";
import DailyTracker from "@/components/chat/Dash/DailyTime";
import { useState, useEffect } from "react";
import {
  CalendarDays,
  ClipboardList,
  Clock,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [lastUpdate, setLastUpdate] = useState(Date.now());

  // Mock data
  const schedule = [
    { time: "09:00", title: "Mathematics Lecture", type: "lecture" },
    { time: "11:00", title: "Chemistry Lab", type: "lab" },
    { time: "14:00", title: "Self Study", type: "study" },
    { time: "16:00", title: "Sports Activity", type: "activity" },
  ];

  const tasks = [
    { title: "Complete Math Assignment", completed: false },
    { title: "Read Chemistry Chapter 4", completed: true },
    { title: "Prepare Presentation", completed: false },
  ];

  // Time tracking useEffect hooks
  useEffect(() => {
    const savedTime = localStorage.getItem("timeSpent");
    const savedDate = localStorage.getItem("timeDate");
    const currentDate = new Date().toLocaleDateString();

    if (savedTime && savedDate === currentDate) {
      setTimeSpent(parseInt(savedTime));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.floor((now - lastUpdate) / 1000);
      setTimeSpent((prev) => {
        const newTime = prev + diff;
        localStorage.setItem("timeSpent", newTime.toString());
        localStorage.setItem("timeDate", new Date().toLocaleDateString());
        return newTime;
      });
      setLastUpdate(now);
    }, 1000);

    return () => clearInterval(interval);
  }, [lastUpdate]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const dailyGoal = 8 * 3600;
  const progress = Math.min((timeSpent / dailyGoal) * 100, 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden p-4 bg-white border-b border-gray-200 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Student Dashboard</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex">
        {/* Sidebar - Mobile responsive */}
        <aside
          className={`lg:w-64 bg-white h-screen p-4 border-r border-gray-200 fixed lg:relative transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 z-10`}
        >
          <div className="mb-8 lg:block hidden">
            <h1 className="text-xl font-bold text-gray-800">
              Student Dashboard
            </h1>
          </div>
          <nav className="space-y-2">
            <a
              href="#"
              className="flex items-center space-x-2 p-2 bg-blue-50 text-blue-600 rounded-lg"
            >
              <ClipboardList size={18} />
              <span className="lg:inline-block hidden">Today's Schedule</span>
            </a>
            <a
              href="/AdminPradum/Cal"
              className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <CalendarDays size={18} />
              <span className="lg:inline-block hidden">Calendar</span>
            </a>
            <a
              href="/AdminPradum/Progress"
              className="flex items-center space-x-2 p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <TrendingUp size={18} />
              <span className="lg:inline-block hidden">Progress</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 lg:ml-64">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Good Morning, Alex
            </h2>
            <p className="text-gray-500">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Time Tracker Component */}

            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Study Time Today</h3>
                <Clock className="text-blue-500" size={20} />
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 lg:w-32 lg:h-32 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-gray-200"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                    />
                    <circle
                      className="text-blue-500"
                      strokeWidth="8"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="40"
                      cx="50"
                      cy="50"
                      strokeDasharray={`${progress * 2.51} 251`}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl lg:text-2xl font-bold">
                        {formatTime(timeSpent)}
                      </div>
                      <div className="text-xs lg:text-sm text-gray-500">
                        of 8h goal
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 text-center">
                  {progress >= 100
                    ? "🎉 Daily goal achieved!"
                    : `Keep going! ${Math.floor(
                        8 - timeSpent / 3600
                      )}h ${Math.floor(
                        60 - (timeSpent % 3600) / 60
                      )}m remaining`}
                </div>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Today's Schedule</h3>
                <Clock className="text-blue-500" size={20} />
              </div>
              <div className="space-y-3 lg:space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500">{item.time}</span>
                    <div
                      className={`flex-1 p-2 lg:p-3 rounded-lg ${
                        item.type === "lecture"
                          ? "bg-blue-50"
                          : item.type === "lab"
                          ? "bg-green-50"
                          : "bg-purple-50"
                      }`}
                    >
                      <p className="text-sm font-medium">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks Card */}
            <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Tasks</h3>
                <ClipboardList className="text-green-500" size={20} />
              </div>
              <div className="space-y-2 lg:space-y-3">
                {tasks.map((task, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg"
                  >
                    <input
                      type="checkbox"
                      checked={task.completed}
                      className="w-4 h-4 text-blue-500 rounded border-gray-300"
                    />
                    <span
                      className={`flex-1 text-sm ${
                        task.completed
                          ? "text-gray-400 line-through"
                          : "text-gray-700"
                      }`}
                    >
                      {task.title}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
