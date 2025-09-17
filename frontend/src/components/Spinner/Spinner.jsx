const Spinner = ({ color = "bg-blue-500" }) => {
  return (
   <div className="flex justify-center items-center min-h-screen">
     <div className="grid grid-cols-3 gap-1">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 ${color} animate-pulse`}
          style={{
            animation: `pulse 1.5s ease-in-out ${(i % 3) * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
   </div>
  )
}
export default Spinner;