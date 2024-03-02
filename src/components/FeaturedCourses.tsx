import coursesData from "@/data/music_courses.json"
import Link from "next/link"

function FeaturedCourses() {
  coursesData.courses.filter(course => course.isFeatured )
  return (
    <div className="p-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl ">Learn With the Best</p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          test
        </div>
        
      </div>
      <div className="mt-20 text-center">
        <Link href={"/courses"} >
          View All courses
        </Link>
      </div> 
    </div>
  )
}

export default FeaturedCourses