import Contact from "@/components/Contact"
import Navbar from "@/components/Navbar"
import Subscribe from "@/components/Subscribe"

const page = () => {
  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center  pt-36 pb-20 bg-white">
    <Contact />
    </div>
    <Subscribe />

    </>
  )
}

export default page