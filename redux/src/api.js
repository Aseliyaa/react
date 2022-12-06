export default class Api {
  static #BASE_URL = "http://localhost:5000";

  static #fetch = (url) => fetch(this.#BASE_URL + url).then((r) => r.json());

  static getAlbums = () => this.#fetch(`/albums`);

  static getUsers = () => this.#fetch(`/users`);

  static getPhotos = (id) => this.#fetch(`/photos?albumId=${id}`);

  static getUser = (id) => this.#fetch(`/users/${id}`);

  static getAlbum = (id) => this.#fetch(`/albums/${id}`);

  static getAlbumsForUser = (id) => this.#fetch(`/albums?userId=${id}`);
}
