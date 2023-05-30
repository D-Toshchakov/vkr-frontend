import { useRouter } from "next/navigation";
import { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar: FC = () => {
  const input = document.getElementById('message') as HTMLInputElement | null;
  const router = useRouter()

  return (
    //flex-wrap relative
    <div className="flex items-stretch">
      <input
        type="search"
        // BIG STYLES
        // className="relative text-white m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        className="relative flex-grow-[0.5] rounded-l-lg border bg-bg-color bg-clip-padding px-3 py-[0.25rem] font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:border-primary focus:outline-none"
        placeholder="Search..."
      />

      <button
        className="relative flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
        type="button"
        onClick={() => {
          if (input?.value)
          router.push(`/search?term=${input?.value}`)
        }}>
          <AiOutlineSearch className="h-5 w-5"/>
      </button>
    </div>
  )
}
export default SearchBar