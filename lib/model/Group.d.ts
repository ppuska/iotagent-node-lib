import { DeviceAttribute, DeviceCommand } from "./Device";

export interface Group {
    url: string,
    resource: string,
    apikey: string,
    type: string,
    service: string,
    subservice: string,
    transport?: string,
    description?: string,
    endpoint?: string,
    trust?: string,
    cbHost?: string,
    timezone?: string,
    timestamp?: boolean,
    commands?: GroupCommand[],
    staticAttributes?: GroupAttribute[],
    lazy?: GroupAttribute[],
    attributes?: GroupAttribute[],
    internalAttributes?: GroupAttribute[],
    autoprovision?: boolean,
    defaultEntityNameConjunction?: string,
    ngsiVersion?: string,
    entityNameExp?: string,
    payloadType?: string
}

interface GroupCommand extends DeviceCommand { }

interface GroupAttribute extends DeviceAttribute { }
