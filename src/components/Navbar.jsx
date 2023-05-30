import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPencilFill, BsSearch } from 'react-icons/bs';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className="flex justify-between border-b border-gray-300 p-2 ">
      <Link to="/" className="flex items-center text-4xl mr-10">
        <img src="/img/logo.png" alt="logo" className="w-20 " />
        <h1>Jaewoong</h1>
      </Link>
      <nav className="flex items-center gap-4 text-2xl font-semibold">
        <Link to={'/products'}>Products</Link>
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
        {user && user.isAdmin && (
          <Link to="/products/new">
            <BsFillPencilFill />
          </Link>
        )}
        {user && (
          <Link to="/wishList">
            <CartStatus />
          </Link>
        )}
        <button>
          <BsSearch />
        </button>
      </nav>
    </header>
  );
}
