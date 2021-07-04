import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import './App.css';
import { login, logout, selectUser } from './features/userSlice'
import { auth } from './firebase';

function App() {
	const user = useSelector(selectUser)

	useEffect(() => {
		auth.onAuthStateChanged(userAuth => {
			if (userAuth) {
				// user is logged in
				dispatchEvent(login({
					email: userAuth.user.email,
					uid: userAuth.user.uid,
					displayName: userAuth.displayName,
					photoURL: userAuth.photoURL
				}))
			} else {
				//user is logged out
				dispatchEvent(logout())
			}
		})
	}, [])

	return (
		<div className="app">
			<Header />

			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					<Sidebar />
					<Feed />
					<Widgets />
				</div>
			)}

		</div>
	);
}

export default App;
