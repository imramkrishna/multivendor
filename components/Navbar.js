// components/Navbar.js
const modules = [
    {
      id: 'grocery',
      name: 'Grocery',
      icon: '/icons/grocery.png',
      iconColor: 'text-green-600',
      description: 'Manage grocery items',
      href: '/grocery/dashboard'
    },
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
  ]
  
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