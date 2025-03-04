import { CharacterAttribute as Character, Choice } from '@services/ApiService/types';

export type Event = {
  eventDescription: string;
  choices: Choice[];
} | null;

export interface SchoolCoreState {
  character: Character;
  history: any;
  event: Event;
}
