//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
export default function Loading({}) {
  return (
    <div className="h-full flex justify-center items-center" aria-label="読込中">
      <div
        className={`
          animate-spin h-10 w-10 border-4 border-gray-500
          rounded-full border-t-transparent
        `}
      />
    </div>
  );
}