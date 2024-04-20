export type AppDataType = {
  name: string;
  date: string;
  professional: string;
  crn: string;
};

export type AppContextType = {
  state: AppDataType;
  setState: React.Dispatch<React.SetStateAction<AppDataType>>;
};
