import GroceryNav from "@/components/navigation/GroceryNav";
import "../globals.css";
export default function GroceryLayout({ children }) {
    return (
        
      <div className="grocery-layout">
        <GroceryNav/>
        <div className="ml-72">{children}</div>
        
      </div>
    )
  }