import NavbarController from "@/components/navigation/NavbarController";
import "../globals.css";
export default function GroceryLayout({ children }) {
    return (
        
      <div className="modules-layout">
        <NavbarController/>
       
        <div className="ml-72">{children}</div>
        
      </div>
    )
  }