import { coeColumns , coePlayerColumns , allPlayersColumns , winnesColumns} from "./tables";
const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers" }
];
const [tomato, lettuce, cheese, carrot, banana, blueberries , champers] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese , carrot , banana , champers];

export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
};
export function removeItem(arr, item) {
    const index = arr.indexOf(item);
    index > -1 && arr.splice(index, 1);
    return arr.slice(); // Using slice to create a new array and avoid modifying the original
  }
  
 export function closestItem(arr, item) {
    const index = arr.indexOf(item);
    if (index === -1) {
      return arr[0];
    } else if (index === arr.length - 1) {
      return arr[arr.length - 2];
    } else {
      return arr[index + 1];
    }
  }