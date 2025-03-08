import { useState, useEffect } from "react";
import {
  Zap,
  Trophy,
  Target,
  Flame,
  Clock,
  X,
  CheckCircle,
  Settings,
  Play,
  StopCircle,
} from "lucide-react";
export default function DailyTracker() {
  // Focus Mode State
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [focusTime, setFocusTime] = useState(1500); // 25 minutes in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);

  // Habit Tracker State
  const [studyStreak, setStudyStreak] = useState(0);
  const [lastStudyDate, setLastStudyDate] = useState("");

  // Goal Setting State
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");

  // Achievements State
  const [badges, setBadges] = useState([]);
  const achievements = [
    { id: 1, name: "5 Sessions", condition: 5, icon: "🔥" },
    { id: 2, name: "3-Day Streak", condition: 3, icon: "🚀" },
    { id: 3, name: "Goal Master", condition: 3, icon: "🏆" },
  ];

  // Load initial data from localStorage
  useEffect(() => {
    const savedStreak = localStorage.getItem("studyStreak");
    const savedSessions = localStorage.getItem("completedSessions");
    const savedGoals = localStorage.getItem("goals");
    const savedBadges = localStorage.getItem("badges");

    if (savedStreak) setStudyStreak(JSON.parse(savedStreak));
    if (savedSessions) setCompletedSessions(JSON.parse(savedSessions));
    if (savedGoals) setGoals(JSON.parse(savedGoals));
    if (savedBadges) setBadges(JSON.parse(savedBadges));
  }, []);

  // Focus Mode Timer
  useEffect(() => {
    let interval;
    if (isTimerRunning && focusTime > 0) {
      interval = setInterval(() => {
        setFocusTime((time) => time - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, focusTime]);

  // Update streak logic
  const updateStreak = () => {
    const today = new Date().toDateString();
    if (lastStudyDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      setStudyStreak((prev) => {
        const newStreak =
          lastStudyDate === yesterday.toDateString() ? prev + 1 : 1;
        localStorage.setItem("studyStreak", JSON.stringify(newStreak));
        return newStreak;
      });

      setLastStudyDate(today);
      localStorage.setItem("lastStudyDate", today);
    }
  };

  // Handle goal creation

  // Check achievements
  const checkAchievements = () => {
    const unlocked = [];
    if (completedSessions >= 5 && !badges.includes(1)) unlocked.push(1);
    if (studyStreak >= 3 && !badges.includes(2)) unlocked.push(2);
    if (goals.length >= 3 && !badges.includes(3)) unlocked.push(3);

    if (unlocked.length > 0) {
      setBadges((prev) => {
        const newBadges = [...prev, ...unlocked];
        localStorage.setItem("badges", JSON.stringify(newBadges));
        return newBadges;
      });
    }
  };

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="h-full bg-gray-50">
      {/* Focus Mode Overlay */}
      {isFocusMode && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center text-white">
          <div className="text-4xl font-bold mb-4">{formatTime(focusTime)}</div>
          <div className="flex gap-4">
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="p-3 bg-green-500 rounded-lg hover:bg-green-600"
            >
              {isTimerRunning ? <StopCircle size={24} /> : <Play size={24} />}
            </button>
            <button
              onClick={() => {
                setIsFocusMode(false);
                setIsTimerRunning(false);
                setFocusTime(1500);
                if (focusTime === 0) {
                  setCompletedSessions((prev) => {
                    const newCount = prev + 1;
                    localStorage.setItem(
                      "completedSessions",
                      JSON.stringify(newCount)
                    );
                    return newCount;
                  });
                  updateStreak();
                  checkAchievements();
                }
              }}
              className="p-3 bg-red-500 rounded-lg hover:bg-red-600"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="p-4 lg:p-8">
        {/* Productivity Boosters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Focus Mode Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Zap className="text-yellow-500" /> Focus Mode
              </h3>
              <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                {completedSessions} sessions
              </span>
            </div>
            <button
              onClick={() => setIsFocusMode(true)}
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Start Session
            </button>
          </div>

          {/* Study Streak Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Flame className="text-orange-500" /> Study Streak
              </h3>
              <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                Current streak
              </span>
            </div>
            <div className="text-3xl font-bold text-center">
              {studyStreak} 🔥
            </div>
          </div>

          {/* Achievements Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <Trophy className="text-purple-500" /> Achievements
              </h3>
              <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                {badges.length} unlocked
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {achievements.map((ach) => (
                <div
                  key={ach.id}
                  className={`p-2 rounded-full ${
                    badges.includes(ach.id)
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                  title={ach.name}
                >
                  <span className="text-xl">{ach.icon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rest of your existing dashboard components... */}
      </main>
    </div>
  );
}
