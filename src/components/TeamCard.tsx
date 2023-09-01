import { RouterOutputs } from "~/utils/api";

type Team = RouterOutputs["team"]["getAll"][number];
export const TeamCard = (team: Team) => {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold text-blue-400">
          {team.name.toUpperCase()}
        </div>
      </div>
    </div>
  );
};
