import {v4 as uuidv4} from 'uuid';
export const toys = [
  {
    id: uuidv4(),
    title: 'Milk',
    weight: '1.5',
    description: 'For kids',
    category: 'Dairy',
  },
  {
    id: uuidv4(),
    title: 'Meat',
    weight: '4',
    description: 'Friends meeting',
    category: 'Meat',
  },
  {
    id: uuidv4(),
    title: 'Eggs',
    weight: '0.5',
    description: 'Breakfast',
    category: 'Meat',
  },
  {
    id: uuidv4(),
    title: 'Butter',
    weight: '0.5',
    description: 'Sandwich',
    category: 'Dairy',
  },
  {
    id: uuidv4(),
    title: 'Ham',
    weight: '1',
    description: 'Sandwich',
    category: 'Meat',
  },
];
