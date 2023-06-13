import {useCookies} from 'react-cookie';


export function IsAuthorized(allowedRoles) {
  const [cookies] = useCookies(['userId', 'roleId']);

  const userId = cookies.userId;
  const userRole = cookies.roleId;

  // Check if the user is logged in, their role is included in the allowed roles, and the 'userId' cookie exists
  return !!userId && !!userRole && allowedRoles.includes(userRole);
}