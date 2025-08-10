interface IMissionProps {
  activeMission: number;
}

export const Mission = ({ activeMission }: IMissionProps) => {
  return <div className="h-full w-full">{activeMission}</div>;
};
