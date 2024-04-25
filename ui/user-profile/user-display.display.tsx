import { UserType } from "@/schema/types";

export function UserDisplay({
  user,
  loading,
}: {
  user: UserType | null;
  loading: boolean;
}) {
  return (
    <div className="w-[min(400px,_100%)] border rounded-sm p-4 my-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        user && (
          <>
            <p className="text-lg font-semibold">{user.name}</p>
            <p className="text-sm">{user.email}</p>
            <p className="text-sm">{user.phone}</p>
            <p className="text-sm">{user.username}</p>
            <p className="text-sm">{user.website}</p>
          </>
        )
      )}
    </div>
  );
}
