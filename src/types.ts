//Define el tipo TypeScript Character usado para asegurar que los objetos personaje tengan los atributos correctos: id, name, status, species e image.

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}
