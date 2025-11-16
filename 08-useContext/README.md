# use - context flow :

1. UserContext.js bnao - means - jaha tumhara wo saara data store hoga, jo tum globally access krna chahte ho
    
    Syntax : 

        const UserContext (anyname) = React.createContext();


2.  UserContextProvider.jsx bnao - jaha tum apne container me jo data rkhna chahte ho wo bnaoge

    Syntax : 
        function UserContextProvider ({children}) {
            const [user, setUser] = useState(null);

            return (
                <UserContext.Provider value={{user, setUser}}>
                    {children}
                </UserContext.Provider>
            )
        }

3. jis bhi component me tumhe wo data chahiye....uss component ko UserContextProvider me wrap kr dena

    Syntax : 
        <UserContextProvider>
            <Login/>
            <Profile/>
        </UserContextProvider>

4. ab UserContext ke data ko update ya use krne ke liye, 

    Syntax :

        const {user, setUser} = useContext(UserContext);

        //now user and setUser can be used and modify