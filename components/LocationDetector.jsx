// "use client";
// import Image from "next/image";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { Suspense, useEffect, useState } from "react";

// // new

// const LocationDetector = () => {
//   const [loading, setLoading] = useState(false);

//   const searchParams = useSearchParams();
//   const pathName = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     setLoading(true);
//     const params = new URLSearchParams(searchParams);

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         params.set("latitude", position.coords.latitude);
//         params.set("longitude", position.coords.longitude);
//         setLoading(false);
//         router.push(`/current?${params.toString()}`);
//       });
//     }
//   }, [pathName, searchParams, router]);

//   return (
//     <Suspense>
//       <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
//         {loading && (
//           <>
//             <Image
//               src="/network.gif"
//               alt="Loading..."
//               height={500}
//               width={500}
//               className="border rounded-md my-4"
//             />
//             <p className="text-4xl text-center">Detecting Location...</p>
//           </>
//         )}
//       </div>
//     </Suspense>
//   );
// };

// export default LocationDetector;

"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const LocationDetector = () => {
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);
        setLoading(false);
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [pathName, searchParams, router]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
        <Image
          src="/network.gif"
          alt="Loading..."
          height={500}
          width={500}
          className="border rounded-md my-4"
        />
        <p className="text-4xl text-center">Detecting Location...</p>
      </div>
    );
  }

  return null;
};

// Ensure the Suspense boundary is properly wrapping the component
const LocationWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LocationDetector />
    </Suspense>
  );
};

export default LocationWrapper;
