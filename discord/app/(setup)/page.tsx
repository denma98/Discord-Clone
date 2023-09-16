import { initialProfile } from "@/lib/initial_Profile";
import { db } from "@/lib/db"; 
import { redirect } from "next/navigation";

const SetupPage = async () => {
    const profile = await initialProfile()
    
    const server = await db.server.findFirst({
        where: {
            member: {
                some: {
                    profileId: profile.id
                }
            }
        }

        
    });

    if( server) return redirect(`/servers/${server.id}`)

    return <div>Create a Server</div>
}
 
export default SetupPage;