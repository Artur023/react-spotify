import MenuIcon from './MenuIcon'
import TheButtoRegister from './TheButtoRegister'
import TheButtonLogin from './TheButtonLogin'

function TheHeader() {
  return (
    <header className="bg-[#070707] flex-1 flex justify-between items-center py-[10px] px-[13px] sm:px-[32px] sticky top-0 z-10">
      <MenuIcon />
      <div>
        <TheButtoRegister />
        <TheButtonLogin />
      </div>
    </header>
  );
}

export default TheHeader;
