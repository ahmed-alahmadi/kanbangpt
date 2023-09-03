import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { api } from "~/utils/api";

const CreateTeamSchema = z.object({
  name: z.string().min(2),
});
type CreateTeamSchema = z.infer<typeof CreateTeamSchema>;

export default function CreateTeam() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<CreateTeamSchema>({ resolver: zodResolver(CreateTeamSchema) });
  const ctx = api.useContext();

  const { mutate, isLoading } = api.team.create.useMutation({
    onSuccess: () => {
      void ctx.team.getAll.invalidate();
    },
    onError: (opts) => {
      console.log(opts);
    },
  });

  const onSubmit: SubmitHandler<CreateTeamSchema> = (data) => mutate(data);
  return (
    <div className=" flex h-screen items-center justify-center ">
      <form
        className="flex  flex-col space-y-6 rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-8 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Team Name
        </label>
        <input
          id="name"
          {...register("name")}
          placeholder="Team Name"
          className="rounded border bg-slate-100 text-center"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
        <button
          className=" rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
