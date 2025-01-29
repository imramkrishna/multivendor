// components/Navbar.js
import Link from "next/link";

const modules = [
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    icon: '/icons/pharmacy.png',
    iconColor: 'text-blue-600', 
    description: 'Manage medicine orders',
    href: '/pharmacy/dashboard'
  },
  {
    id: 'food',
    name: 'Food',
    icon: '/icons/food.png',
    iconColor: 'text-orange-600',
    description: 'Manage food orders',
    href: '/food/dashboard'
  }
];

// Function to render icons
function renderIcon(icon, iconColor) {
  return <img src={icon} className={`h-6 w-6 ${iconColor}`} alt="icon" />;
}

// Render modules
{modules.map(module => (
  <Link key={module.id} href={module.href}>
    <span className="flex flex-col items-center px-3 py-3 text-gray-700 hover:bg-blue-50 transition-colors rounded-lg w-36 border border-blue-200">
      {renderIcon(module.icon, module.iconColor)}
      <div className="text-center">
        <p className="font-medium">{module.name}</p>
        <p className="text-xs text-gray-500">{module.description}</p>
      </div>
    </span>
  </Link>
))}