const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return (  
        <div className="bg-blue-550 h-full">
            {children}
        </div>
    );
}
 
export default AuthLayout;