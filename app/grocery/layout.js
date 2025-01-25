import GroceryNav from "@/components/navigation/GroceryNav";
import "../globals.css";
export default function GroceryLayout({ children }) {
    return (
        
      <div className="grocery-layout">
       
        <div className="ml-72 mt-4">{children}</div>
        
      </div>
    )
  }