
import Link from 'next/link';
import { ReactNode } from 'react';
import useToken from '@/hooks/useToken';
interface Props {
  children: ReactNode;
}

const Logo = () => (
  <Link href="/">
    <img
      src="https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Images.png"
      alt="recipe-logo"
      style={{ width: "45px", height: "45px" }}
      className="cursor-pointer"
    />
  </Link>
);

export default function DefaultLayout({ children }: Props) {
  const { logout, isLoggedIn, username } = useToken();

  function handleLogout() {
    logout();
    window.location.href = "/";
  }

     return (
      <>
        <div className="navbar">
          <div className="text-blue-500 font-bold gap-12 flex text-xl w-full">
            <Logo />
            <Link href="/" className="mt-2">Home</Link>
            <Link href="/recipe" className="mt-2">Recipe</Link>
          </div>

          <div className={`flex ${isLoggedIn ? "gap-4" : "gap-4 text-white font-bold"}`}>
            {isLoggedIn ? (
              <>
                <div className="px-4 py-2 rounded-md text-black font-bold">{username}</div>
                <button
                  type="submit"
                  onClick={handleLogout}
                  className="bg-blue-500 px-4 py-2 rounded-md text-white font-bold cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/signin">
                  <div className="bg-blue-500 px-4 py-2 rounded-md">SIGN-IN</div>
                </Link>
                <Link href="/signup">
                  <div className="bg-blue-500 px-4 py-2 rounded-md">SIGN-UP</div>
                </Link>
              </>
            )}
          </div>
        </div>

        <div className='h-full'>{children}</div>
      </>
    ); 
}