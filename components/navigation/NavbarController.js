import GroceryNav from './GroceryNav'
import PharmacyNav from './PharmacyNav'
import FoodNav from './FoodNav'

const NavbarController = ({ module }) => {
  switch(module) {
    case 'grocery':
      return <GroceryNav />
    case 'pharmacy':
      return <PharmacyNav />
    case 'food':
      return <FoodNav />
    default:
      return null
  }
}

export default NavbarController;