"use client";
import { useState, useEffect } from "react";
import {
  CalendarDays,
  Plus,
  X,
  AlertTriangle,
  NotebookPen,
  School,
  BookOpenCheck,
} from "lucide-react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from "date-fns";

export default function StickyNoteCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [tasks, setTasks] = useState({});
  const [newTask, setNewTask] = useState("");
  const [taskType, setTaskType] = useState("general");

  const taskTypeConfig = {
    exam: {
      color: "bg-red-100 border-red-200",
      icon: <AlertTriangle size={14} />,
    },
    assignment: {
      color: "bg-blue-100 border-blue-200",
      icon: <NotebookPen size={14} />,
    },
    lecture: {
      color: "bg-green-100 border-green-200",
      icon: <School size={14} />,
    },
    general: {
      color: "bg-yellow-50 border-yellow-200",
      icon: <BookOpenCheck size={14} />,
    },
  };

  // Load/save tasks
  useEffect(() => {
    const savedTasks = localStorage.getItem("calendarTasks");
    if (savedTasks) setTasks(JSON.parse(savedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem("calendarTasks", JSON.stringify(tasks));
  }, [tasks]);

  // Calendar grid setup
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handleAddTask = (date) => {
    if (!newTask.trim()) return;

    const dateKey = format(date, "yyyy-MM-dd");
    const task = {
      id: Date.now(),
      text: newTask,
      type: taskType,
      completed: false,
    };

    setTasks((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), task],
    }));
    setNewTask("");
  };

  return (
    <div className="bg-yellow-50 min-h-screen p-4">
      {/* Calendar Header */}
      <div className="w-full p-2 mx-auto">
        <div className="bg-yellow-100 p-4 rounded-lg shadow-lg mb-6 sticky-note">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {format(currentDate, "MMMM yyyy")}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentDate(new Date())}
                className="px-3 py-1 bg-yellow-200 hover:bg-yellow-300 rounded-lg text-sm font-medium"
              >
                Today
              </button>
              <button
                onClick={() =>
                  setCurrentDate(
                    new Date(currentDate.setMonth(currentDate.getMonth() - 1))
                  )
                }
                className="px-3 py-1 bg-yellow-200 hover:bg-yellow-300 rounded-lg text-sm font-medium"
              >
                ←
              </button>
              <button
                onClick={() =>
                  setCurrentDate(
                    new Date(currentDate.setMonth(currentDate.getMonth() + 1))
                  )
                }
                className="px-3 py-1 bg-yellow-200 hover:bg-yellow-300 rounded-lg text-sm font-medium"
              >
                →
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center font-medium p-1 text-gray-600"
              >
                {day.slice(0, 1)}
              </div>
            ))}

            {daysInMonth.map((day, index) => {
              const dateKey = format(day, "yyyy-MM-dd");
              const dayTasks = tasks[dateKey] || [];

              return (
                <div
                  key={index}
                  onClick={() => setSelectedDate(day)}
                  className={`min-h-[100px] p-2 rounded-lg cursor-pointer transition-transform
                    bg-yellow-100 shadow-md sticky-note
                    ${!isSameMonth(day, currentDate) ? "opacity-50" : ""}
                    ${
                      isSameDay(day, new Date())
                        ? "border-2 border-yellow-400"
                        : ""
                    }
                    ${index % 7 === 0 ? "rotate-1" : "rotate--1"}
                    hover:rotate-0 hover:z-10
                  `}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-sm font-medium ${
                        isSameDay(day, new Date())
                          ? "text-yellow-700"
                          : "text-gray-700"
                      }`}
                    >
                      {format(day, "d")}
                    </span>
                    {dayTasks.length > 0 && (
                      <span className="text-xs bg-yellow-200 px-1 rounded-full">
                        {dayTasks.length}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    {dayTasks.slice(0, 2).map((task) => (
                      <div
                        key={task.id}
                        className={`${
                          taskTypeConfig[task.type].color
                        } p-1 rounded text-xs flex items-center gap-1`}
                      >
                        {taskTypeConfig[task.type].icon}
                        <span className="truncate">{task.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Task Popup Sticky */}
        {selectedDate && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-yellow-100 rounded-lg shadow-xl max-w-md w-full sticky-note-popup">
              <div className="p-4 border-b border-yellow-200 flex items-center justify-between">
                <h3 className="text-lg font-bold text-yellow-800">
                  {format(selectedDate, "MMM d, yyyy")}
                </h3>
                <button
                  onClick={() => setSelectedDate(null)}
                  className="p-1 hover:bg-yellow-200 rounded-full"
                >
                  <X size={20} className="text-yellow-600" />
                </button>
              </div>

              <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto">
                {tasks[format(selectedDate, "yyyy-MM-dd")]?.length > 0 ? (
                  tasks[format(selectedDate, "yyyy-MM-dd")].map((task) => (
                    <div
                      key={task.id}
                      className={`${
                        taskTypeConfig[task.type].color
                      } p-2 rounded flex items-center gap-2`}
                    >
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => {
                          const updatedTasks = tasks[
                            format(selectedDate, "yyyy-MM-dd")
                          ].map((t) =>
                            t.id === task.id
                              ? { ...t, completed: !t.completed }
                              : t
                          );
                          setTasks((prev) => ({
                            ...prev,
                            [format(selectedDate, "yyyy-MM-dd")]: updatedTasks,
                          }));
                        }}
                        className="w-4 h-4 accent-yellow-600"
                      />
                      <span
                        className={`flex-1 text-sm ${
                          task.completed
                            ? "line-through text-gray-500"
                            : "text-gray-700"
                        }`}
                      >
                        {task.text}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500 py-2">
                    No tasks for this day
                  </div>
                )}

                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={newTask}
                      onChange={(e) => setNewTask(e.target.value)}
                      placeholder="New task..."
                      className="flex-1 p-2 bg-white rounded border border-yellow-200 focus:ring-1 focus:ring-yellow-400"
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleAddTask(selectedDate)
                      }
                    />
                    <button
                      onClick={() => handleAddTask(selectedDate)}
                      className="p-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(taskTypeConfig).map(([type, config]) => (
                      <button
                        key={type}
                        onClick={() => setTaskType(type)}
                        className={`p-2 rounded flex items-center justify-center gap-1 text-sm ${
                          taskType === type ? "ring-2 ring-yellow-400" : ""
                        } ${config.color}`}
                      >
                        {config.icon}
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
