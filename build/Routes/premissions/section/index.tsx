import {FC} from "react";
import {permission} from "Routes/premissions/route";

interface Permissions {
    userPermissions: permission,
    allowedPermissions: permission,
    children: any
}

const checkPermissions = (userPermissions:permission, allowedPermissions:permission) => {
    if (allowedPermissions.length === 0) {
        return true;
    }
    return userPermissions.some(permission =>
        allowedPermissions.includes(permission)
    );
};

const AccessControl: FC<Permissions> = ({
                                            userPermissions,
                                            allowedPermissions,
                                            children
                                        }) => {
    const permitted = checkPermissions(userPermissions, allowedPermissions);

    if (permitted) {
        return children;
    }
};

export default AccessControl;