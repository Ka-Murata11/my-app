import NavList from "./NavList/NavList"

const HeaderMenu = () => {
  return (
    <div className="text-white bg-gray-800 w-full h-20 ">
        <div className="flex justify-between items-center m-4">
            <h1 className="px-4 text-3xl font-bold  items-center">タスク管理</h1>
            <NavList />
        </div>
    </div>
  )
}

export default HeaderMenu