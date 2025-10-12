// ... (The AuthContext and AuthProvider code is here) ...

// THIS IS OUR CUSTOM HOOK
export const useAuth = () => {
  // It does the repetitive work for us...
  return useContext(AuthContext); 
  // ... and just gives back the result.
};