import { createClient, SupabaseClient } from "@supabase/supabase-js";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define types for the Supabase context
interface SupabaseContextType {
  supabase: SupabaseClient;
  isConnected: boolean;
}

// Create a context for Supabase
const SupabaseContext = createContext<SupabaseContextType | undefined>(
  undefined
);

// Create a provider component
export const SupabaseProvider = ({ children }: { children: ReactNode }) => {
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Initialize Supabase client
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

    if (supabaseUrl && supabaseAnonKey) {
      const client = createClient(supabaseUrl, supabaseAnonKey);
      setSupabase(client);

      // Check connection
      const checkConnection = async () => {
        try {
          const { data, error } = await client
            .from("staff")
            .select("count", { count: "exact" })
            .limit(1);
          if (!error) {
            setIsConnected(true);
          }
        } catch (error) {
          console.error("Error connecting to Supabase:", error);
          setIsConnected(false);
        }
      };

      checkConnection();
    }
  }, []);

  // Use a fallback client if environment variables are not set
  const fallbackClient = createClient(
    "https://placeholder-url.supabase.co",
    "placeholder-key"
  );

  return (
    <SupabaseContext.Provider
      value={{
        supabase: supabase ?? fallbackClient,
        isConnected: isConnected,
      }}
    >
      {children}
    </SupabaseContext.Provider>
  );
};

// Custom hook to use the Supabase context
export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error("useSupabase must be used within a SupabaseProvider");
  }
  return context;
};
