import { UserType } from "@/schema/types";

export function UserDisplay({
  user,
  loading,
  error,
}: {
  user: UserType | null;
  loading: boolean;
  error: boolean;
}) {
  if (error) return <p>Error loading user</p>;
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
