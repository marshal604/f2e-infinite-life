export interface CharacterAttribute {
  academics?: number;
}

export interface Choice {
  text: string;
  updatedAttributes: CharacterAttribute;
  resultDescription: string;
}

export interface EventResponse {
  eventDescription: string;
  choices: Choice[];
}
