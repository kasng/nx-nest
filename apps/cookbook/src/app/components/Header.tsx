import React, {useEffect, useState} from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';
import {ReactComponent as Logo} from '../logo.svg';

const navItems = [
  {
    name: 'Recipes',
    path: '/',
  },
  {
    name: 'Bookmarks',
    path: '/bookmarks',
  },
  {
    name: 'Profile',
    path: '/profile',
  },
];

interface Props {
  activePath?: string;
}

const Header = ({activePath = ''}: Props) => {
  console.log('activePath:', activePath);

  const [keyword, setKeyword] = useState('');
  const [, forceUpdate] = useState({});
  const history = useHistory();

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);


  const onChangeKeyword = (event: any) => {
    setKeyword(event.target.value);
  }

  const handleSubmitSearch = (event: any) => {
    event.preventDefault();
    console.log('keyword:', keyword);
    return history.push(`/?s=${keyword}`)
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800  ">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center">
              <a className="flex-shrink-0" href="/">
                <Logo className="max-h-32"/>
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map((nav) => (
                    <Link
                      key={nav.path}
                      to={nav.path}
                      className={`${
                        activePath === nav.path
                          ? 'text-gray-800'
                          : 'text-gray-300'
                      } hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      {nav.name}
                    </Link>
                  ))}

                  <form onSubmit={handleSubmitSearch} action="" className="flex justify-center bg-white rounded-xl border-2 overflow-hidden">
                    <input onChange={onChangeKeyword} type="search" placeholder="Search..." className="block rounded-md border-0 focus:outline-none focus:ring-0 focus:border-blue-500 flex-grow p-2" defaultValue={keyword}/>
                    <button type="submit">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto m-2" style={{color: 'gray'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((nav) => (
                <Link
                  key={nav.path}
                  to={nav.path}
                  className={`${
                    activePath === nav.path ? 'text-gray-800' : 'text-gray-300'
                  } hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {nav.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
export default Header;
