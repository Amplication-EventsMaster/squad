import { EventUpdateManyWithoutCustomersInput } from "./EventUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  events?: EventUpdateManyWithoutCustomersInput;
  firstName?: string | null;
  lAstName?: string | null;
};
