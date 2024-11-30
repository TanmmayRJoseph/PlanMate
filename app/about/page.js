import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-semibold text-blue-800 mb-6">
          About PlanMate
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          PlanMate is a task and event management app created by Tanmmay R Joseph, a BCA student, as part of a personal project during his free time.
        </p>

        <div className="bg-white rounded-lg p-8 shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold text-blue-800">The Story Behind PlanMate</h2>
          <p className="text-lg text-gray-700">
            PlanMate was built as an application to help users plan and manage their tasks and events effectively. As a student of BCA, Tanmmay R Joseph wanted to challenge himself by working on a full-stack project that would allow him to practice and learn backend development, APIs, and web development skills.
          </p>
          <p className="text-lg text-gray-700">
            This app is a result of countless hours of learning, coding, and testing. Through building PlanMate, Tanmmay gained hands-on experience in backend technologies and API integration, pushing the boundaries of his knowledge and skills.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-lg font-semibold text-blue-800">About Tanmmay R Joseph</p>
          <p className="text-lg text-gray-700">
            Tanmmay is passionate about full-stack development and is always eager to learn new technologies and tools. As a final-year BCA student, he is constantly striving to improve his skills and contribute to meaningful projects. He hopes to continue exploring the world of backend development and expand his expertise in building scalable and efficient web applications.
          </p>
        </div>

        <div className="mt-10">
          <p className="text-xl font-semibold text-blue-800">PlanMate - A Simple Way to Stay Organized</p>
          <p className="text-lg text-gray-700">
            Whether you're managing daily tasks or planning future events, PlanMate is here to help you stay organized and on top of your goals. Try it today and experience seamless task management like never before!
          </p>
        </div>
      </div>
    </div>
  );
}
