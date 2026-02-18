import { NavLink } from "react-router-dom"

export default function Footer() {

    const data = [
        { id: 1, name: "Home", Link: "/home" },
        { id: 2, name: "Walkthrough", Link: "/walkthrough" },
        { id: 3, name: "Explore Homes", Link: "/explore" },
        { id: 4, name: "Gallery", Link: "/gallery" },
    ]
    return (<>
        <footer className="z-10 bg-black/80 w-full overflow-hidden ">

            <div className="flex gap-7 justify-center items-center w-full flex-nowrap  p-5 ">
                {data.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.Link}
                        className={({ isActive }) =>
                            `
      text-[rgb(244,154,67)]
      hover:text-white
      uppercase
      text-sm
      tracking-wide
      leading-[13px]
      transition
      ${isActive ? "text-white/70 " : ""}
      `
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>



        </footer>
    </>)
}