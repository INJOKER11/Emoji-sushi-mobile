import {makeAutoObservable} from 'mobx';

class store {
  categorySlug = 'premium-roli';
  city: string = 'odesa';

  constructor() {
    makeAutoObservable(this);
  }
  changeCategory(slug: string) {
    this.categorySlug = slug;
  }
  changeCity(city: string) {
    this.city = city;
  }
}

export default new store();
