import GroceryNav from "@/components/navigation/GroceryNav";
import "../globals.css";
import Navbar from "@/components/navigation/GroceryNav";
export default function GroceryLayout({ children }) {
    return (
        
      <div className="grocery-layout">
        <Navbar module="grocery"/>
       
        <div className="ml-72 mt-4">{children}</div>
        
      </div>
    )
  }