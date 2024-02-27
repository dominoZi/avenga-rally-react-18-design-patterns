export interface ExampleList {
  id: string;
  title: string;
  desc: string;
  disabled?: boolean;
  error?: boolean;
  removable?: boolean;
  selectable?: boolean;
  firstName?: string;
  lastName?: string;
}

export const getListExample = () => [
  {
    id: "fbe2aad2-de53-4733-99e3-0c02018a592b",
    title: "Lorem ipsum",
    desc: "Lorem ipsum",
    disabled: true,
    error: false,
    removable: false,
    selectable: true,
    firstName: "Dominik",
    lastName: "Lato",
  },
  {
    id: "416bd31a-1770-48f0-9fb0-50072cce2608",
    title: "Lorem ipsum",
    desc: "Lorem ipsum",
    disabled: true,
    error: false,
    removable: true,
    selectable: false,
    firstName: null,
    lastName: "Lato",
  },
];
