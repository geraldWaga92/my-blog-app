import Link from "next/link"

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
          <Link href={"/"}>
            <h1 className="text-7xl hover:underline cursor-pointer decoration-yellow-400 ">Sougene's Daily Blog</h1>
          </Link>
            <h2 className="mt-5 md:mt-3">Welcome to {""}
            <span className="underline decoration-4 decoration-[#F7AB0A]">
                Every Mom's 
            </span>{""} favourite blog in the internet</h2>
        </div>

        <p className="mt-5 md:mt-2 text-gray-400 max-2-sm">
            Product Features | Daily Life Blog | Product Blog
        </p>
    </div>
  )
}

export default Banner