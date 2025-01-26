import GroceryNav from './GroceryNav'
import PharmacyNav from './PharmacyNav'
import FoodNav from './FoodNav'
import ModuleNav from './ModuleNav'

const NavbarController = ({ module }) => {
  switch(module) {
    case 'grocery':
      return <GroceryNav />
    case 'pharmacy':
      return <PharmacyNav />
    case 'food':
      return <FoodNav />
    default:
      return <ModuleNav/>
  }
}

export default NavbarController;