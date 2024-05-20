// protecting routes
import { withAuth } from "next-auth/middleware"

export default withAuth;

// anyone opens there paths will be asked to log in
export const config = {
    matcher: ["/chat", "/chat:id", "/register"],
};