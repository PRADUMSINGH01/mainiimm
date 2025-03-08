"use client";
import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Bell,
  BookOpen,
  ChevronRight,
  X,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function EnhancedStudyTracker() {
  const [darkMode, setDarkMode] = useState(false);
  const [reminderTime, setReminderTime] = useState("18:00");
  const [weeklyData, setWeeklyData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [topics] = useState([
    { name: "Quant", current: 12, target: 50, color: "bg-blue-200" },
    { name: "RC", current: 8, target: 40, color: "bg-green-200" },
    { name: "DILR", current: 6, target: 35, color: "bg-purple-200" },
  ]);

  // Dark Mode Setup
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.documentElement.classList.toggle("dark", savedMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", newMode);
  };

  // Weekly Data
  useEffect(() => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    setWeeklyData(days.map(day => ({
      day,
      hours: Math.floor(Math.random() * 8) + 2
    })));
  }, []);

  // Reminder Logic
  useEffect(() => {
    const savedTime = localStorage.getItem("reminderTime") || "18:00";
    setReminderTime(savedTime);
  }, []);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      
      if (currentTime === reminderTime && !showAlert) {
        setShowAlert(true);
        if (Notification.permission === "granted") {
          new Notification("Study Time!", {
            body: `It's ${reminderTime} - Time to study!`,
          });
        }
      }
    };

    const interval = setInterval(checkTime, 60000);
    checkTime();
    return () => clearInterval(interval);
  }, [reminderTime, showAlert]);

  const handleReminderChange = (time) => {
    setReminderTime(time);
    localStorage.setItem("reminderTime", time);
    setShowAlert(false);
  };

  const requestNotificationPermission = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Reminders Activated!", {
            body: `Daily reminders set for ${reminderTime}`,
          });
        }
      });
    }
  };

  return (
    <div className={`min-h-screen p-4 ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      {/* Reminder Alert */}
      {showAlert && (
        <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-600 rounded-lg shadow-lg flex items-center gap-4 animate-fade-in-up">
          <Bell className="text-blue-500 dark:text-blue-400" size={24} />
          <div>
            <h3 className="font-semibold dark:text-white">Study Time! ⏰</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Scheduled study session at {reminderTime}
            </p>
          </div>
          <button
            onClick={() => setShowAlert(false)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X className="text-gray-500 dark:text-gray-300" size={18} />
          </button>
        </div>
      )}

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <BookOpen className="text-blue-500" size={24} />
            <h1 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
              Study Tracker
            </h1>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" />
            ) : (
              <Moon className="text-gray-600" />
            )}
          </button>
        </div>

        {/* Weekly Progress Chart */}
        <div className={`mb-6 p-4 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <h2 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-800"}`}>
            Weekly Progress
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <XAxis 
                  dataKey="day" 
                  stroke={darkMode ? "#fff" : "#000"} 
                  tick={{ fill: darkMode ? "#fff" : "#000" }}
                />
                <YAxis 
                  stroke={darkMode ? "#fff" : "#000"} 
                  tick={{ fill: darkMode ? "#fff" : "#000" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: darkMode ? "#1F2937" : "#fff",
                    borderColor: darkMode ? "#374151" : "#e5e7eb",
                  }}
                />
                <Bar 
                  dataKey="hours" 
                  fill={darkMode ? "#3B82F6" : "#2563EB"} 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Reminder Settings */}
        <div className={`mb-6 p-4 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
              Study Reminders
            </h2>
            <Bell className={`${darkMode ? "text-yellow-400" : "text-gray-600"}`} />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => handleReminderChange(e.target.value)}
              className={`p-2 rounded-lg border w-full ${
                darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-200"
              }`}
            />
            <button
              onClick={requestNotificationPermission}
              className="w-full sm:w-auto px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              Enable Notifications
            </button>
          </div>
        </div>

        {/* Progress Cards */}
        <div className={`p-4 rounded-xl ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          {topics.map((topic) => (
            <div
              key={topic.name}
              className={`p-4 mb-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${topic.color}`} />
                  <div>
                    <h3 className={`font-medium ${darkMode ? "text-white" : "text-gray-800"}`}>
                      {topic.name}
                    </h3>
                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      {topic.current}h / {topic.target}h
                    </p>
                  </div>
                </div>
                <ChevronRight className={`${darkMode ? "text-gray-400" : "text-gray-500"}`} />
              </div>
              <div className="mt-3">
                <div className={`w-full rounded-full h-2 ${darkMode ? "bg-gray-600" : "bg-gray-200"}`}>
                  <div
                    className={`${topic.color} rounded-full h-2`}
                    style={{ width: `${(topic.current / topic.target) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}