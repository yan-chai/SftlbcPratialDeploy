import sliders from './slides.json';
import covers from './covers.json';
import cards from './cards.json';
import groups from './groups.json';

export default {
  'GET /api/slide-banners': sliders,
  'GET /api/covers': covers,
  'GET /api/cards': cards,
  'GET /api/groups': groups,
};
