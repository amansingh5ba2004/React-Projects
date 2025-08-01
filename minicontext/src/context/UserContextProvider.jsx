import  {useState} from 'react' ;


function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    return (
        <UserContextProvider value={{ user, setUser }}>
            {children}
        </UserContextProvider>
    );
}

export default UserContextProvider
