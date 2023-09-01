import { TeamCard } from "~/components/TeamCard";
import { api } from "~/utils/api";

export default function Teams() {
  const { data, isLoading } = api.team.getAll.useQuery();
  if (isLoading) return <>loading...</>;
  if (!data) return <div>Something Went Wrong</div>;
  return (
    <div className="flex flex-col">
      <div className="flex  justify-between p-8">
        <h1 className="text-xl font-bold">Teams </h1>
        <button className=" rounded bg-blue-300 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Create Team
        </button>
      </div>
      <div className="flex">
        {[...data].map((team) => (
          <TeamCard {...team} key={team.id} />
        ))}
      </div>
    </div>
  );
}
