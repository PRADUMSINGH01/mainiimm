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

export default function EnhancedCalendar() {
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
      color: "bg-gray-100 border-gray-200",
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
    <div className="bg-white p-4 rounded-xl shadow-sm">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentDate(new Date())}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
          >
            Today
          </button>
          <button
            onClick={() =>
              setCurrentDate(
                (prev) => new Date(prev.setMonth(prev.getMonth() - 1))
              )
            }
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
          >
            ←
          </button>
          <button
            onClick={() =>
              setCurrentDate(
                (prev) => new Date(prev.setMonth(prev.getMonth() + 1))
              )
            }
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
          >
            →
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 text-sm mb-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-medium p-1 text-gray-500">
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
              className={`min-h-[80px] p-1.5 border rounded-lg cursor-pointer transition-colors
                ${
                  !isSameMonth(day, currentDate)
                    ? "bg-gray-50 text-gray-400"
                    : "hover:bg-gray-50"
                }
                ${
                  isSameDay(day, new Date())
                    ? "border-blue-300 bg-blue-50"
                    : "border-gray-200"
                }
              `}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-sm ${
                    isSameDay(day, new Date())
                      ? "font-bold text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {format(day, "d")}
                </span>
                {dayTasks.length > 0 && (
                  <span className="text-xs text-gray-500">
                    {dayTasks.length}
                  </span>
                )}
              </div>

              {/* Task Indicators */}
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

      {/* Task Detail Modal */}
      {selectedDate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] flex flex-col">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {format(selectedDate, "MMM d, yyyy")}
              </h3>
              <button
                onClick={() => setSelectedDate(null)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex-1">
              {/* Task List */}
              {tasks[format(selectedDate, "yyyy-MM-dd")]?.length > 0 ? (
                <div className="space-y-2 mb-4">
                  {tasks[format(selectedDate, "yyyy-MM-dd")].map((task) => (
                    <div
                      key={task.id}
                      className={`${
                        taskTypeConfig[task.type].color
                      } p-3 rounded-lg flex items-center gap-3`}
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
                        className="w-5 h-5 rounded border-gray-300 text-blue-500"
                      />
                      <span
                        className={`flex-1 ${
                          task.completed
                            ? "line-through text-gray-400"
                            : "text-gray-700"
                        }`}
                      >
                        {task.text}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 text-center py-4">
                  No tasks for this day
                </div>
              )}

              {/* Add Task Form */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add new task..."
                    className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
                    onKeyPress={(e) =>
                      e.key === "Enter" && handleAddTask(selectedDate)
                    }
                  />
                  <button
                    onClick={() => handleAddTask(selectedDate)}
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(taskTypeConfig).map(([type, config]) => (
                    <button
                      key={type}
                      onClick={() => setTaskType(type)}
                      className={`p-2 rounded-lg flex items-center justify-center gap-2 text-sm
                        ${taskType === type ? "ring-2 ring-blue-300" : ""}
                        ${config.color}`}
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
  );
}
