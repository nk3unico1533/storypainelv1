"use client";

export default function StorySlide({ title, children }) {
  return (
    <div className="story-card w-full h-full flex flex-col items-center justify-start pt-24">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
      <div className="w-full flex-1 flex items-start justify-center">
        <div className="card-inner w-full max-w-2xl px-6 py-8 rounded-2xl bg-neutral-900/60 border border-white/6 shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
}