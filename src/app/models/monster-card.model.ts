type Urls = { image_url: string; image_url_small: string };

export interface IRequestRandomMonster {
  card_images: Urls[];
}

export interface IRequestMonsterCard {
  data: { card_images: Urls[] }[];
}
export class MonsterCard {
  constructor(public imageUrl: String, public imageUrlSmall: String) {}
}
